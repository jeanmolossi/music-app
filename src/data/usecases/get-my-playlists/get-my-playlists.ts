import { HttpClient } from "@/data/protocols/http/http-client";
import { MyPlaylists } from "@/domain/spotify/my-playlists/my-playlists";
import { GetMyPlaylists } from "@/domain/usecases";

export class RemoteGetMyPlaylists implements GetMyPlaylists {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<GetMyPlaylists.Model>
  ) {}

  async load(): Promise<MyPlaylists> {
    const httpResponse = await this.httpClient.request({
      method: "GET",
      url: this.url,
    });

    return httpResponse;
  }
}
