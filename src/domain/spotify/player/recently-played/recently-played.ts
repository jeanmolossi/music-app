import { Artist, Album, Context, Track } from "@/domain/spotify";

export interface SpotifyAlbum extends Album {
  album_type: string;
  artists: Artist[];
  available_markets: string[];
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
}

export interface Items {
  track: Track<SpotifyAlbum>;
  played_at: string;
  context: Context;
}

export interface RecentlyPlayed {
  items: Array<Items>;
  next?: string;
  cursors: {
    after: string;
    before: string;
  };
  limit: number;
  href: string;
}
