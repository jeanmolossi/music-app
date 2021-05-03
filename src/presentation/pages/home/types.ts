import { LoadUserInfo } from "@/domain/usecases";
import {
  GestureEventPayload,
  PanGestureHandlerEventPayload,
} from "react-native-gesture-handler";

export interface HomeProps {
  remoteLoadCurrentUserInfo: LoadUserInfo;
}

export type AnimationE = Readonly<
  GestureEventPayload & PanGestureHandlerEventPayload
>;

export type AnimationContext = {
  startY: number;
};
