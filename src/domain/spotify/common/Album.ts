import { Image } from "./Image";
import { ExternalUrls } from "./ExternalUrl";

export interface Album {
  album_type: string;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  images: Image[];
  name: string;
  type: string;
  uri: string;
}
