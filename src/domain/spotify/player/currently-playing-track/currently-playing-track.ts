import { Album, Artist, Context, Image, ExternalUrls } from "@/domain/spotify";

interface Item {
  album: Album;
  artists: Artist[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: {
    isrc: string;
  };
  external_urls: ExternalUrls;
  href: string;
  id: string;
  name: string;
  popularity: number;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
}
export interface CurrentlyPlayingTrackUser {
  context: Context;
  timestamp: number;
  progress_ms: number;
  is_playing: boolean;
  currently_playing_type: string;
  item?: Item;
}
