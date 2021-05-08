import { useEffect } from "react";
import { Dimensions, BackHandler } from "react-native";
import {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { clamp, snapPoint } from "react-native-redash";
import { PlayerProps } from "./";

type AnimationContext = {
  startY: number;
};

const { height } = Dimensions.get("window");

const START_POSITION = 0;
const END_POSITION = height;
const SPRING_CONFIG = {
  stiffness: 150,
  damping: 18,
};

export function usePlayerHelpers({ visibility, onClose }: PlayerProps) {
  const translationY = useSharedValue(END_POSITION);

  const onGestureEvent = useAnimatedGestureHandler({
    onStart: (_e, context: AnimationContext) => {
      context.startY = translationY.value;
    },
    onActive: (e, context) => {
      const limited_value = clamp(
        e.translationY + context.startY,
        START_POSITION,
        END_POSITION
      );
      translationY.value = limited_value;
    },
    onEnd: (e) => {
      const snapPoints = snapPoint(translationY.value, e.velocityY, [
        START_POSITION,
        END_POSITION,
      ]);

      if (snapPoints === END_POSITION) onClose();

      translationY.value = withSpring(snapPoints, SPRING_CONFIG);
    },
  });

  useEffect(() => {
    if (visibility === true) {
      translationY.value = withSpring(START_POSITION, SPRING_CONFIG);
    } else {
      translationY.value = withSpring(END_POSITION, SPRING_CONFIG);
    }
  }, [visibility]);

  useEffect(() => {
    const back = BackHandler.addEventListener("hardwareBackPress", function () {
      if (visibility) {
        onClose();
      }

      return visibility;
    });

    return () => {
      back.remove();
    };
  }, [visibility]);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      position: "absolute",
      top: 0,
      zIndex: 999,
      transform: [
        {
          translateY: translationY.value,
        },
      ],
    };
  });

  return {
    onGestureEvent,
    animatedStyles,
  };
}
