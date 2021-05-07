import { HttpClient } from "@/data/protocols/http/http-client";
import { CurrentlyPlayingTrackUser } from "@/domain/spotify/currently-playing-track/currently-playing-track";
import { GetCurrentlyPlayingTrack } from "@/domain/usecases";

export class RemoteGetCurrentlyPlayingTrack
  implements GetCurrentlyPlayingTrack {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<GetCurrentlyPlayingTrack.Model>
  ) {}

  async get(): Promise<CurrentlyPlayingTrackUser> {
    const body = new URLSearchParams({
      market: "BR",
    });

    const httpResponse = await this.httpClient.request({
      method: "GET",
      url: this.url,
      body: body.toString(),
    });

    return httpResponse;
  }
}
