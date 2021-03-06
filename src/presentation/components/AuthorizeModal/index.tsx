import React from "react";
import { Modal, View } from "react-native";
import { WebView } from "react-native-webview";
import { SPOTIFY_AUTHORIZE_URL } from "./constants";

interface AuthorizeSpotifyModalProps {
  visible?: boolean;
  onNavigationStateChange?: (code: string) => void;
}

export const AuthorizeSpotifyModal = ({
  visible = false,
  onNavigationStateChange,
}: AuthorizeSpotifyModalProps) => {
  return (
    <Modal animationType="slide" visible={visible}>
      <View style={{ flex: 1 }}>
        <WebView
          source={{
            uri: SPOTIFY_AUTHORIZE_URL,
          }}
          onNavigationStateChange={(event) => {
            const urlResult = event.url.replace(/.*\/?\?code=/gm, "");
            const check_if_no_code = event.url.match(
              /https?:\/\/(accounts)?\.(spotify)?\.com/gm
            );

            if (onNavigationStateChange && !!urlResult && !check_if_no_code) {
              console.log({ urlResult });

              onNavigationStateChange(urlResult);
            }
          }}
        />
      </View>
    </Modal>
  );
};
