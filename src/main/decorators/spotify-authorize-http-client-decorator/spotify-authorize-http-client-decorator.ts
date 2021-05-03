import base64 from "react-native-base64";
import spotifyCredentials from "@/domain/config/credentials/spotify/spotify.credentials";
import { HttpClient } from "@/data/protocols/http/http-client";
import { GetStorage, SetStorage } from "@/data/protocols/cache";
import { Spotify } from "@/domain/spotify";

export class SpotifyAuthorizeHttpClientDecorator<T = unknown>
  implements HttpClient<T> {
  constructor(
    private readonly storageAdapter: GetStorage & SetStorage,
    private readonly httpClient: HttpClient<T>
  ) {}

  async request<BodyType = any>(
    params: HttpClient.Params<BodyType>
  ): Promise<T> {
    let Authorization: string;

    const get_token = await this.storageAdapter.get<string>("access_token");
    const get_refresh_token = await this.storageAdapter.get<string>(
      "refresh_token"
    );

    let refresh_token: string = get_refresh_token || "";

    if (!get_token) {
      const {
        token_type,
        access_token,
        refresh_token: new_refresh_token,
      } = await this.getValidToken();

      refresh_token = new_refresh_token;

      Authorization = `${token_type} ${access_token}`;

      await this.storageAdapter.set("refresh_token", refresh_token);
      await this.storageAdapter.set("access_token", access_token);
    } else {
      Authorization = `Bearer ${get_token}`;
    }

    try {
      Object.assign(params, {
        headers: Object.assign(params.headers || {}, {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization,
        }),
      });

      let httpResponse = await this.httpClient.request(params);

      if ((httpResponse as any).status > 299) {
        const {
          access_token,
          refresh_token: new_refresh_token,
          token_type,
        } = await this.getValidTokenRefreshStrategy(refresh_token);

        await this.storageAdapter.set("refresh_token", new_refresh_token);
        await this.storageAdapter.set("access_token", access_token);

        Authorization = `${token_type} ${access_token}`;

        Object.assign(params, {
          headers: Object.assign(params.headers || {}, {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization,
          }),
        });

        httpResponse = await this.httpClient.request(params);
      }

      return httpResponse;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  private async getValidToken(): Promise<Spotify.AuthCredentials> {
    const code = await this.storageAdapter.get<string>("authorization_code");

    if (!code) throw new Error("Code is empty");

    const data = {
      grant_type: "authorization_code",
      code,
      redirect_uri: encodeURIComponent("http://response.ok"),
    };

    const Authorization = `Basic ${this.encode_credentials()}`;

    const request_params = {
      ...this.default_request([{ Authorization }]),
      body: new URLSearchParams(data).toString(),
    };

    const auth_data = (await this.httpClient.request(request_params)) as any;

    return auth_data as Spotify.AuthCredentials;
  }

  private async getValidTokenRefreshStrategy(refresh_token: string) {
    const grant_type = "refresh_token";
    const Authorization = `Bearer ${refresh_token}`;

    const auth_data: unknown = await this.httpClient.request(
      this.default_request([{ grant_type }, { refresh_token: Authorization }])
    );

    const response_data = auth_data as Spotify.AuthCredentials;

    return response_data;
  }

  private encode_credentials(): string {
    const { ClientID, ClientSecret } = spotifyCredentials;

    return base64.encode(`${ClientID}:${ClientSecret}`);
  }

  private default_request(headers: Array<Record<string, string>>) {
    return {
      method: "POST" as const,
      url: "https://accounts.spotify.com/api/token",
      headers: Object.assign(
        {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        ...(headers || {})
      ),
    };
  }
}
