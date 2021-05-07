export interface RecentlyPlayed {
  items: [
    {
      track: {
        artists: [
          {
            external_urls: {
              spotify: string;
            };
            href: string;
            id: string;
            name: string;
            type: string;
            uri: string;
          }
        ];
        available_markets: string[];
        disc_number: number;
        duration_ms: number;
        explicit: boolean;
        external_urls: {
          spotify: string;
        };
        href: string;
        id: string;
        name: string;
        preview_url: string;
        track_number: number;
        type: string;
        uri: string;
      };
      played_at: string;
      context: {
        uri: string;
        external_urls: {
          spotify: string;
        };
        href: string;
        type: string;
      };
    },
    {
      track: {
        artists: [
          {
            external_urls: {
              spotify: string;
            };
            href: string;
            id: string;
            name: string;
            type: string;
            uri: string;
          }
        ];
        available_markets: string[];
        disc_number: number;
        duration_ms: number;
        explicit: boolean;
        external_urls: {
          spotify: string;
        };
        href: string;
        id: string;
        name: string;
        preview_url: string;
        track_number: number;
        type: string;
        uri: string;
      };
      played_at: string;
      context: {
        uri: string;
        external_urls: {
          spotify: string;
        };
        href: string;
        type: string;
      };
    }
  ];
  next: string;
  cursors: {
    after: string;
    before: string;
  };
  limit: number;
  href: string;
}
