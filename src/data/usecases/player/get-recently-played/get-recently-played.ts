import { HttpClient } from "@/data/protocols/http/http-client";
import { GetRecentlyPlayed } from "@/domain/usecases";

export class RemoteGetRecentlyPlayed implements GetRecentlyPlayed {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<GetRecentlyPlayed.Model>
  ) {}

  async load(): Promise<GetRecentlyPlayed.Model> {
    const httpResponse = await this.httpClient.request({
      method: "GET",
      url: this.url,
    });

    const { items } = httpResponse || { items: [] };

    items.sort(sortItems());

    return httpResponse;
  }
}

export type ItemT = GetRecentlyPlayed.Model["items"][0];

function sortItems() {
  return (a: ItemT, b: ItemT) => {
    const a_time = new Date(a.played_at).getTime();
    const b_time = new Date(b.played_at).getTime();

    return b_time - a_time;
  };
}
