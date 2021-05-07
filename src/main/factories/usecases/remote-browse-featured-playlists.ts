import { RemoteBrowseFeaturedPlaylist } from "@/data/usecases";
import { makeApiUrl, makeSpotifyAuthorizedHttpClient } from "../http";

export const makeRemoteBrowseFeaturedPlaylists = () =>
  new RemoteBrowseFeaturedPlaylist(
    makeApiUrl("/browse/featured-playlists"),
    makeSpotifyAuthorizedHttpClient()
  );
