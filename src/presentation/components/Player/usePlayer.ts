import { useCallback, useState } from "react";
import { runOnJS } from "react-native-reanimated";

export function usePlayer() {
  const [visibility, setVisibility] = useState(false);

  const onClose = useCallback(() => {
    "worklet";
    runOnJS(setVisibility)(false);
  }, []);

  const onOpen = useCallback(() => {
    setVisibility(true);
  }, []);

  return {
    visibility,
    onClose,
    onOpen,
  };
}
