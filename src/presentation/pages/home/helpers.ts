import {
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
  remoteGetRecentlyPlayed,
}: HomeProps) {
  const [code, setCode] = useState("");

  const [userInfo, setUserInfo] = useState<LoadUserInfo.Model>();
  const [playlists, setPlaylists] = useState<GetMyPlaylists.Model>();
  const [
    recentlyPlayed,
    setRecentlyPlayed,
  ] = useState<GetRecentlyPlayed.Model>();

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

      remoteGetRecentlyPlayed.load().then((remoteRecentlyPlayed) => {
        setRecentlyPlayed(remoteRecentlyPlayed);
      });
    }
  }, [code]);

  return {
    code,
    onNavigationStateChange,
    userInfo,
    playlists,
    recentlyPlayed,
  };
}
