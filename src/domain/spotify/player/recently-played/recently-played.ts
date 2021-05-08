export interface SpotifyAlbum {
  album_type: string;
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
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
  type: string;
  uri: string;
}

export interface RecentlyPlayed {
  items: Array<{
    track: {
      album: SpotifyAlbum;
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
  }>;
  next: string;
  cursors: {
    after: string;
    before: string;
  };
  limit: number;
  href: string;
}
