import { Spotify } from "../spotify";

export interface GetCurrentlyPlayingTrack {
  get(): Promise<GetCurrentlyPlayingTrack.Model>;
}

export namespace GetCurrentlyPlayingTrack {
  export type Model = Spotify.CurrentlyPlayingTrack;
}
