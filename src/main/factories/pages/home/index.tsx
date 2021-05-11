import React from "react";
import { Home } from "@/presentation/pages";
import {
  makeRemoteBrowseFeaturedPlaylists,
  makeRemoteGetMyPlaylists,
  makeRemoteGetRecentlyPlayed,
  makeRemoteLoadCurrentUserInfo,
} from "@/main/factories/usecases";
import {
  getRefreshTokenAdapter,
  setSpotifyAuthorizationCodeAdapter,
} from "@/main/adapters";

interface HomePageFactoryProps {}

export const HomePageFactory = ({}: HomePageFactoryProps) => {
  const setSpotifyAuthorizationCode = setSpotifyAuthorizationCodeAdapter;
  const getRefreshToken = getRefreshTokenAdapter;
  const remoteLoadCurrentUserInfo = makeRemoteLoadCurrentUserInfo();
  const remoteGetMyPlaylists = makeRemoteGetMyPlaylists();
  const remoteBrowseFeaturedPlaylists = makeRemoteBrowseFeaturedPlaylists();
  const remoteRecentlyPlayed = makeRemoteGetRecentlyPlayed();

  return (
    <Home
      {...{
        setSpotifyAuthorizationCode,
        getRefreshToken,
        remoteLoadCurrentUserInfo,
        remoteGetMyPlaylists,
        remoteBrowseFeaturedPlaylists,
        remoteRecentlyPlayed,
      }}
    />
  );
};
