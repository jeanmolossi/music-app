import {
  BrowseFeaturedPlaylists,
  GetMyPlaylists,
  GetRecentlyPlayed,
  LoadUserInfo,
} from "@/domain/usecases";
import { useCallback, useEffect, useState } from "react";
import { HomeProps } from "./types";

export function useHomeHelpers({
  setSpotifyAuthorizationCode,
  remoteLoadCurrentUserInfo,
  remoteGetMyPlaylists,
  remoteBrowseFeaturedPlaylists,
}: HomeProps) {
  const [code, setCode] = useState("");

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
    if (code) {
      remoteLoadCurrentUserInfo.load().then((response) => {
        setUserInfo(response);
      });

      remoteGetMyPlaylists.load().then((remotePlaylists) => {
        setPlaylists(remotePlaylists);
      });

      remoteBrowseFeaturedPlaylists.load().then((remoteFeaturedPlaylists) => {
        setFeaturedPlaylists(remoteFeaturedPlaylists);
      });
    }
  }, [code]);

  return {
    code,
    onNavigationStateChange,
    userInfo,
    playlists,
    featuredPlaylists,
  };
}
