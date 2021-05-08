import { ExternalUrls, Image } from "../spotify";

export interface CurrentUserProfile {
  country: string;
  display_name: string;
  email: string;
  external_urls: ExternalUrls;
  followers: {
    href: string | null;
    total: number;
  };
  href: string;
  id: string;
  images: Image[];
  product: string;
  type: string;
  uri: string;
}
