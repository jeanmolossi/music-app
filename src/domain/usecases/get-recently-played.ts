import { Spotify } from "../spotify";

export interface GetRecentlyPlayed {
  load(): Promise<GetRecentlyPlayed.Model>;
}

export namespace GetRecentlyPlayed {
  export type Model = Spotify.RecentlyPlayed;
}
