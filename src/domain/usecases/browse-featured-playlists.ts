import { Spotify } from "../spotify";

export interface BrowseFeaturedPlaylists {
  load(): Promise<BrowseFeaturedPlaylists.Model>;
}

export namespace BrowseFeaturedPlaylists {
  export type Model = Spotify.Browse.FeaturedPlaylists;
}
