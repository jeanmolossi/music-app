import { HttpClient } from "@/data/protocols/http/http-client";
import { RecentlyPlayed } from "@/domain/spotify/recently-played/recently-played";
import { GetRecentlyPlayed } from "@/domain/usecases";

export class RemoteGetRecentlyPlayed implements GetRecentlyPlayed {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<GetRecentlyPlayed.Model>
  ) {}

  async load(): Promise<RecentlyPlayed> {
    const httpResponse = await this.httpClient.request({
      method: "GET",
      url: this.url,
    });

    return httpResponse;
  }
}
