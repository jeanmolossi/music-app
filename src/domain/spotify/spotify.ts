import { AuthorizedSpotifyCredentials } from "./authorization/authorized-credentials";
import { CurrentlyPlayingTrackUser } from "./currently-playing-track/currently-playing-track";
import { MyPlaylists as SpotifyMyPlaylists } from "./my-playlists/my-playlists";

export namespace Spotify {
  export type AuthCredentials = AuthorizedSpotifyCredentials;

  export type CurrentlyPlayingTrack = CurrentlyPlayingTrackUser;

  export type MyPlaylist = SpotifyMyPlaylists;
}
