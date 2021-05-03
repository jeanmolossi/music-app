import spotifyCredentials from "@/domain/config/credentials/spotify/spotify.credentials";
import base64 from "react-native-base64";
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
    const token = await this.getToken();

    if (!token) {
      const {
        token_type,
        access_token,
        refresh_token,
      } = await this.getValidToken();
      Authorization = `${token_type} ${access_token}`;

      await this.storageAdapter.set("refresh_token", refresh_token);
      await this.storageAdapter.set("access_token", access_token);
    } else {
      Authorization = `Bearer ${token}`;
    }

    try {
      Object.assign(params, {
        headers: Object.assign(params.headers || {}, {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization,
        }),
      });

      const httpResponse = await this.httpClient.request(params);

      return httpResponse;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  private async getToken(): Promise<string | null> {
    try {
      const isset_access_token = await this.storageAdapter.get<string>(
        "access_token"
      );

      return isset_access_token;
    } catch (error) {
      return null;
    }
  }

  private async getValidToken(): Promise<Spotify.AuthCredentials> {
    const code = await this.storageAdapter.get<string>("authorization_code");
    const refresh_token = await this.storageAdapter.get<string>(
      "refresh_token"
    );

    if (!code) throw new Error("Code is empty");

    let current_token = code;
    let grant_type = "authorization_code";
    let Authorization = `Basic ${this.encode_credentials()}`;

    const data = {
      grant_type,
      code: current_token,
      redirect_uri: encodeURIComponent("http://response.ok"),
    };

    let request_params;

    if (refresh_token) {
      grant_type = "refresh_token";
      Authorization = `Bearer ${refresh_token}`;
      request_params = this.default_request([
        { grant_type },
        { refresh_token: Authorization },
      ]);
    } else {
      request_params = this.default_request([{ Authorization }]);

      Object.assign(request_params, {
        body: new URLSearchParams(data).toString(),
      });
    }

    console.log({ request_params });

    const auth_data = (await this.httpClient.request(request_params)) as any;

    console.log(auth_data.request);

    return auth_data as Spotify.AuthCredentials;
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
