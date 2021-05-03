import { AuthorizedSpotifyCredentials } from "./authorization/authorized-credentials";
import { CurrentlyPlayingTrackUser } from "./currently-playing-track/currently-playing-track";

export namespace Spotify {
  export type AuthCredentials = AuthorizedSpotifyCredentials;

  export type CurrentlyPlayingTrack = CurrentlyPlayingTrackUser;
}
