import React from "react";
import { Home } from "@/presentation/pages";
import {
  makeRemoteGetMyPlaylists,
  makeRemoteLoadCurrentUserInfo,
} from "@/main/factories/usecases";
import { setSpotifyAuthorizationCodeAdapter } from "@/main/adapters";

interface HomePageFactoryProps {}

export const HomePageFactory = ({}: HomePageFactoryProps) => {
  const remoteLoadCurrentUserInfo = makeRemoteLoadCurrentUserInfo();
  const setSpotifyAuthorizationCode = setSpotifyAuthorizationCodeAdapter;
  const remoteGetMyPlaylists = makeRemoteGetMyPlaylists();

  return (
    <Home
      {...{
        remoteLoadCurrentUserInfo,
        setSpotifyAuthorizationCode,
        remoteGetMyPlaylists,
      }}
    />
  );
};
