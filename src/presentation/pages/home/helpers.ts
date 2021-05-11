import {
  BrowseFeaturedPlaylists,
  GetMyPlaylists,
  GetRecentlyPlayed,
  LoadUserInfo,
} from "@/domain/usecases";
import { usePlayerContext } from "@/presentation/contexts";
import { useCallback, useEffect, useState } from "react";
import { HomeProps } from "./types";

export function useHomeHelpers({
  setSpotifyAuthorizationCode,
  getRefreshToken,
  remoteLoadCurrentUserInfo,
  remoteGetMyPlaylists,
  remoteBrowseFeaturedPlaylists,
  remoteRecentlyPlayed,
}: HomeProps) {
  const { updateMetadata } = usePlayerContext();

  const [code, setCode] = useState("");
  const [refreshToken, setRefreshToken] = useState("");

  const [userInfo, setUserInfo] = useState<LoadUserInfo.Model>();
  const [playlists, setPlaylists] = useState<GetMyPlaylists.Model>();
  const [
    featuredPlaylists,
    setFeaturedPlaylists,
  ] = useState<BrowseFeaturedPlaylists.Model>();

  const onNavigationStateChange = useCallback((code: string) => {
    setSpotifyAuthorizationCode(code).then(() => {
      setCode(code);
    });
  }, []);

  useEffect(() => {
    getRefreshToken().then((token) => {
      if (token) setRefreshToken(token);
    });
  }, []);

  useEffect(() => {
    if (code || refreshToken) {
      remoteLoadCurrentUserInfo.load().then((response) => {
        setUserInfo(response);

        remoteGetMyPlaylists.load().then((remotePlaylists) => {
          setPlaylists(remotePlaylists);
        });

        remoteBrowseFeaturedPlaylists.load().then((remoteFeaturedPlaylists) => {
          setFeaturedPlaylists(remoteFeaturedPlaylists);
        });

        remoteRecentlyPlayed.load().then((remoteRecentPlayed) => {
          if (remoteRecentPlayed.items.length > 0) {
            updateMetadata(remoteRecentPlayed.items[0]);
          }
        });
      });
    }
  }, [code, refreshToken]);

  return {
    code,
    refreshToken,
    onNavigationStateChange,
    userInfo,
    playlists,
    featuredPlaylists,
  };
}
