import { Spotify } from "../spotify";

export interface GetMyPlaylists {
  load(): Promise<GetMyPlaylists.Model>;
}

export namespace GetMyPlaylists {
  export type Model = Spotify.MyPlaylist;
}
