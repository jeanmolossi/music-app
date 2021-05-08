import { Album } from "./Album";
import { Artist } from "./Artist";
import { ExternalUrls } from "./ExternalUrl";

export interface Track<AlbumType = Album> {
  album: AlbumType;
  artists: Artist[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  name: string;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
}
