import { RemoteGetCurrentlyPlayingTrack } from "@/data/usecases";
import { makeApiUrl, makeSpotifyAuthorizedHttpClient } from "../http";

export const makeRemoteGetCurrentlyPlaying = () =>
  new RemoteGetCurrentlyPlayingTrack(
    makeApiUrl("/me/player/currently-playing"),
    makeSpotifyAuthorizedHttpClient()
  );
