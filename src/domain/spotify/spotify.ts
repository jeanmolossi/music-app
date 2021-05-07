import { AuthorizedSpotifyCredentials } from "./authorization/authorized-credentials";
import { FeaturedPlaylists as SpotifyFeaturedPlaylists } from "./browse/featured-playlists";
import { CurrentlyPlayingTrackUser } from "./currently-playing-track/currently-playing-track";
import { MyPlaylists as SpotifyMyPlaylists } from "./my-playlists/my-playlists";
import { RecentlyPlayed as SpotifyRecentlyPlayed } from "./recently-played/recently-played";

export namespace Spotify {
  export type AuthCredentials = AuthorizedSpotifyCredentials;

  export type CurrentlyPlayingTrack = CurrentlyPlayingTrackUser;

  export type MyPlaylist = SpotifyMyPlaylists;

  export type RecentlyPlayed = SpotifyRecentlyPlayed;

  export namespace Browse {
    export type FeaturedPlaylists = SpotifyFeaturedPlaylists;
  }
}
