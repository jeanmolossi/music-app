import { RemoteLoadUserInfo } from "@/data/usecases";
import { makeApiUrl } from "../http/api-url-factory";
import { makeSpotifyAuthorizedHttpClient } from "../http/spotify-authorized-http-client";

export const makeRemoteLoadCurrentUserInfo = () =>
  new RemoteLoadUserInfo(
    makeApiUrl("/v1/me"),
    makeSpotifyAuthorizedHttpClient()
  );
