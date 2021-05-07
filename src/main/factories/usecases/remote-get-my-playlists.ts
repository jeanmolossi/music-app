import { RemoteGetMyPlaylists } from "@/data/usecases";
import { makeApiUrl, makeSpotifyAuthorizedHttpClient } from "../http";

export const makeRemoteGetMyPlaylists = () =>
  new RemoteGetMyPlaylists(
    makeApiUrl("/me/playlists"),
    makeSpotifyAuthorizedHttpClient()
  );
