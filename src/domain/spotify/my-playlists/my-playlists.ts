export interface MyPlaylists {
  href: string;
  items: [
    {
      collaborative: boolean;
      external_urls: {
        spotify: string;
      };
      href: string;
      id: string;
      images: [
        {
          height: number;
          url: string;
          width: number;
        }
      ];
      name: string;
      owner: {
        external_urls: {
          spotify: string;
        };
        href: string;
        id: string;
        type: string;
        uri: string;
      };
      public: boolean;
      snapshot_id: string;
      tracks: {
        href: string;
        total: number;
      };
      type: string;
      uri: string;
    },
    {
      collaborative: boolean;
      external_urls: {
        spotify: string;
      };
      href: string;
      id: string;
      images: [
        {
          height: number;
          url: string;
          width: number;
        }
      ];
      name: string;
      owner: {
        external_urls: {
          spotify: string;
        };
        href: string;
        id: string;
        type: string;
        uri: string;
      };
      public: boolean;
      snapshot_id: string;
      tracks: {
        href: string;
        total: number;
      };
      type: string;
      uri: string;
    }
  ];
  limit: number;
  next?: string;
  offset: number;
  previous?: string;
  total: number;
}
