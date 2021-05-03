import { LoadUserInfo } from "@/domain/usecases";
import { useCallback, useEffect, useState } from "react";
import { HomeProps } from "./types";

export function useHomeHelpers({
  remoteLoadCurrentUserInfo,
  setSpotifyAuthorizationCode,
}: HomeProps) {
  const [code, setCode] = useState("");
  const [userInfo, setUserInfo] = useState<LoadUserInfo.Model>();

  const onNavigationStateChange = useCallback((code: string) => {
    setSpotifyAuthorizationCode(code).then(() => {
      setCode(code);
    });
  }, []);

  useEffect(() => {
    if (code)
      remoteLoadCurrentUserInfo.load().then((response) => {
        setUserInfo(response);
      });
  }, [code]);

  return {
    code,
    onNavigationStateChange,
    userInfo,
  };
}
