import {
  useAnimatedGestureHandler,
  useSharedValue,
  withSpring,
  useAnimatedStyle,
  interpolate,
  Extrapolate,
} from "react-native-reanimated";
import { clamp, snapPoint } from "react-native-redash";
import { AnimationE, AnimationContext, HomeProps } from "./types";

const START_POSITION = 0;
const END_POSITION = -220;

const SPRING_CONFIG = {
  stiffness: 150,
  damping: 18,
};

export function useHomeAnimations() {
  const translationY = useSharedValue(0);
  const isUp = useSharedValue(false);

  function clamp_gestures(value: number) {
    "worklet";
    return clamp(value, END_POSITION, START_POSITION);
  }

  function onStart(e: AnimationE, context: AnimationContext) {
    "worklet";
    context.startY = translationY.value;
  }

  function onActive(e: AnimationE, context: AnimationContext) {
    "worklet";

    const limitedValue = clamp_gestures(e.translationY + context.startY);

    translationY.value = limitedValue;
  }

  function onEnd(e: AnimationE, context: AnimationContext) {
    "worklet";

    const endValue = snapPoint(translationY.value, e.velocityY, [
      START_POSITION,
      END_POSITION,
    ]);

    translationY.value = withSpring(endValue, SPRING_CONFIG);

    isUp.value = endValue === END_POSITION;

    context.startY = endValue;
  }

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translationY.value }],
    };
  });

  const textBoxAnimation = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translationY.value }],
    };
  });

  const textAnimation = useAnimatedStyle(() => {
    return {
      fontSize: interpolate(
        translationY.value,
        [END_POSITION, START_POSITION],
        [18, 24],
        Extrapolate.CLAMP
      ),
      color: "white",
    };
  });

  const onGestureEvent = useAnimatedGestureHandler({
    onStart,
    onActive,
    onEnd,
  });

  return {
    animatedStyle,
    textBoxAnimation,
    textAnimation,
    onGestureEvent,
  };
}
