import { ExternalUrls, Image, Owner, Track } from "@/domain/spotify/common";

interface PlaylistItem {
  added_at: string;
  added_by: {
    external_urls: {
      spotify: string;
    };
    href: string;
    id: string;
    type: string;
    uri: string;
  };
  is_local: boolean;
  track: Track;
}

export interface Playlist {
  collaborative: boolean;
  description: string;
  external_urls: ExternalUrls;
  followers: {
    href?: string | null;
    total: number;
  };
  href: string;
  id: string;
  images: Image[];
  name: string;
  owner: Owner;
  public?: string | null;
  snapshot_id: string;
  tracks: {
    href: string;
    items: PlaylistItem[];
    limit: number;
    next: string;
    offset: number;
    previous?: string | null;
    total: number;
  };
  type: string;
  uri: string;
}
