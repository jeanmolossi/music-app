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
  remoteLoadCurrentUserInfo,
  remoteGetMyPlaylists,
  remoteBrowseFeaturedPlaylists,
  remoteRecentlyPlayed,
}: HomeProps) {
  const { updateMetadata } = usePlayerContext();

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
  }, [code]);

  return {
    code,
    onNavigationStateChange,
    userInfo,
    playlists,
    featuredPlaylists,
  };
}
