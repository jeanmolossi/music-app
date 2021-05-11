import { AuthorizedSpotifyCredentials } from "./authorization/authorized-credentials";
import { FeaturedPlaylists as SpotifyFeaturedPlaylists } from "./browse/featured-playlists";
import { CurrentlyPlayingTrackUser } from "./player/currently-playing-track/currently-playing-track";
import { MyPlaylists as SpotifyMyPlaylists } from "./playlists/my-playlists/my-playlists";
import { RecentlyPlayed as SpotifyRecentlyPlayed } from "./player/recently-played/recently-played";
import { Playlist } from "./playlists/playlist/playlist";

export namespace Spotify {
  export type AuthCredentials = AuthorizedSpotifyCredentials;

  export namespace Browse {
    export type FeaturedPlaylists = SpotifyFeaturedPlaylists;
  }

  export namespace Player {
    export type CurrentlyPlaying = CurrentlyPlayingTrackUser;
    export type RecentlyPlayed = SpotifyRecentlyPlayed;
  }

  export namespace Playlists {
    export type SinglePlaylist = Playlist;
    export type MyPlaylist = SpotifyMyPlaylists;
  }
}
