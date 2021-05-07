import { GetMyPlaylists, LoadUserInfo } from "@/domain/usecases";
import {
  GestureEventPayload,
  PanGestureHandlerEventPayload,
} from "react-native-gesture-handler";

export interface HomeProps {
  setSpotifyAuthorizationCode: (auth_code: string) => Promise<void>;
  remoteLoadCurrentUserInfo: LoadUserInfo;
  remoteGetMyPlaylists: GetMyPlaylists;
}

export type AnimationE = Readonly<
  GestureEventPayload & PanGestureHandlerEventPayload
>;

export type AnimationContext = {
  startY: number;
};
