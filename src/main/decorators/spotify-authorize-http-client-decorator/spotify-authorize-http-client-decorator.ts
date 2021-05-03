import { encode } from "react-native-base64";
import spotifyCredentials from "@/domain/config/credentials/spotify/spotify.credentials";
import { HttpClient } from "@/data/protocols/http/http-client";
import { GetStorage, SetStorage } from "@/data/protocols/cache";
import { makeApiUrl } from "@/main/factories/http/api-url-factory";
import { Spotify } from "@/domain/models/spotify";

export class SpotifyAuthorizeHttpClientDecorator<T = unknown>
  implements HttpClient<T> {
  constructor(
    private readonly storageAdapter: GetStorage & SetStorage,
    private readonly httpClient: HttpClient<T>
  ) {}

  async request<BodyType extends URLSearchParams>(
    params: HttpClient.Params<BodyType>
  ): Promise<T> {
    let Authorization: string;
    const token = await this.getRefreshToken();

    if (!token) {
      const {
        token_type,
        access_token,
        refresh_token,
      } = await this.getValidToken();
      Authorization = `${token_type} ${access_token}`;

      await this.storageAdapter.set("refresh_token", refresh_token);
    } else {
      Authorization = `Bearer ${token}`;
    }

    try {
      Object.assign(params, {
        headers: Object.assign(params.headers, {
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

  private async getRefreshToken(): Promise<string | null> {
    try {
      const isset_refresh_token = await this.storageAdapter.get<string>(
        "refresh_token"
      );

      return isset_refresh_token;
    } catch (error) {
      return null;
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

    const auth_data = (await this.httpClient.request({
      method: "POST",
      url: makeApiUrl("/api/token"),
      body: new URLSearchParams(data),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${this.encode_credentials()}`,
      },
    })) as unknown;

    return auth_data as Spotify.AuthCredentials;
  }

  private encode_credentials(): string {
    const { ClientID, ClientSecret } = spotifyCredentials;

    return encode(`${ClientID}:${ClientSecret}`);
  }
}
