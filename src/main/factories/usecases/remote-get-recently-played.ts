import { RemoteGetRecentlyPlayed } from "@/data/usecases";
import { makeApiUrl, makeSpotifyAuthorizedHttpClient } from "../http";

export const makeRemoteGetRecentlyPlayed = () =>
  new RemoteGetRecentlyPlayed(
    makeApiUrl("/me/player/recently-played"),
    makeSpotifyAuthorizedHttpClient()
  );
