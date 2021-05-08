import React from "react";
import { Home } from "@/presentation/pages";
import {
  makeRemoteBrowseFeaturedPlaylists,
  makeRemoteGetMyPlaylists,
  makeRemoteGetRecentlyPlayed,
  makeRemoteLoadCurrentUserInfo,
} from "@/main/factories/usecases";
import { setSpotifyAuthorizationCodeAdapter } from "@/main/adapters";

interface HomePageFactoryProps {}

export const HomePageFactory = ({}: HomePageFactoryProps) => {
  const remoteLoadCurrentUserInfo = makeRemoteLoadCurrentUserInfo();
  const setSpotifyAuthorizationCode = setSpotifyAuthorizationCodeAdapter;
  const remoteGetMyPlaylists = makeRemoteGetMyPlaylists();
  const remoteBrowseFeaturedPlaylists = makeRemoteBrowseFeaturedPlaylists();
  const remoteRecentlyPlayed = makeRemoteGetRecentlyPlayed();

  return (
    <Home
      {...{
        remoteLoadCurrentUserInfo,
        setSpotifyAuthorizationCode,
        remoteGetMyPlaylists,
        remoteBrowseFeaturedPlaylists,
        remoteRecentlyPlayed,
      }}
    />
  );
};
