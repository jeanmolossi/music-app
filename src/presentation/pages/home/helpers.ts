import { useCallback, useEffect, useState } from "react";
import { HomeProps } from "./types";

export function useHomeHelpers({
  remoteLoadCurrentUserInfo,
  setSpotifyAuthorizationCode,
}: HomeProps) {
  const [code, setCode] = useState("");

  const onNavigationStateChange = useCallback((code: string) => {
    setSpotifyAuthorizationCode(code).then(() => {
      setCode(code);
    });
  }, []);

  useEffect(() => {
    if (code)
      remoteLoadCurrentUserInfo.load().then((response) => {
        console.log({ response: response.followers });
      });
  }, [code]);

  return {
    code,
    onNavigationStateChange,
  };
}
