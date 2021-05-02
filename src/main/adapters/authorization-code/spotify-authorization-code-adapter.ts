import { makeAsyncStorageAdapter } from "@/main/factories/cache";

export const setSpotifyAuthorizationCodeAdapter = (
  authorization_code: string
) => makeAsyncStorageAdapter().set("authorization_code", authorization_code);

export const getSpotifyAuthorizationCodeAdapter = () =>
  makeAsyncStorageAdapter().get<string>("authorization_code");
