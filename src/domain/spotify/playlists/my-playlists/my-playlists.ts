import { Image, Owner, ExternalUrls } from "@/domain/spotify";

interface Item {
  collaborative: boolean;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  images: Image[];
  name: string;
  owner: Owner;
  public: boolean;
  snapshot_id: string;
  tracks: {
    href: string;
    total: number;
  };
  type: string;
  uri: string;
}
export interface MyPlaylists {
  href: string;
  items: Item[];
  limit: number;
  next?: string | null;
  offset: number;
  previous?: string | null;
  total: number;
}
