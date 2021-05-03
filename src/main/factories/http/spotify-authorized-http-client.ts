import { SpotifyAuthorizeHttpClientDecorator } from "@/main/decorators/spotify-authorize-http-client-decorator/spotify-authorize-http-client-decorator";
import { makeAsyncStorageAdapter } from "../cache";
import { makeHttpClient } from "./http-client";

export const makeSpotifyAuthorizedHttpClient = <T>() =>
  new SpotifyAuthorizeHttpClientDecorator<T>(
    makeAsyncStorageAdapter(),
    makeHttpClient()
  );
