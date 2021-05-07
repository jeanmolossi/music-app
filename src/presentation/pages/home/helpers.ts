import { GetMyPlaylists, LoadUserInfo } from "@/domain/usecases";
import { useCallback, useEffect, useState } from "react";
import { HomeProps } from "./types";

export function useHomeHelpers({
  remoteLoadCurrentUserInfo,
  remoteGetMyPlaylists,
  setSpotifyAuthorizationCode,
}: HomeProps) {
  const [code, setCode] = useState("");

  const [userInfo, setUserInfo] = useState<LoadUserInfo.Model>();
  const [playlists, setPlaylists] = useState<GetMyPlaylists.Model>();

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
    }
  }, [code]);

  return {
    code,
    onNavigationStateChange,
    userInfo,
    playlists,
  };
}
