import { Image, ExternalUrls } from "@/domain/spotify";

interface Owner {
  external_urls: ExternalUrls;
  href: string;
  id: string;
  type: string;
  uri: string;
}

interface Tracks {
  href: string;
  total: number;
}
interface Item {
  collaborative: boolean;
  description: string;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  images: Image[];
  name: string;
  owner: Owner;
  public?: any;
  snapshot_id: string;
  tracks: Tracks;
  type: string;
  uri: string;
}

interface Playlists {
  href: string;
  items: Item[];
  limit: number;
  next?: string;
  offset: number;
  previous?: string;
  total: number;
}

export interface FeaturedPlaylists {
  message: string;
  playlists: Playlists;
}
