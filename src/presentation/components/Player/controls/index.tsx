import React from "react";
import { Feather, FontAwesome5 } from "@expo/vector-icons";
import { Pressable, View } from "react-native";
import { Theme } from "@/presentation/styles";
import { usePlayerContext } from "@/presentation/contexts";
import { PlayerState } from "@/presentation/contexts/player/types";
import styles from "../styles";

interface ControlsProps {}

export const Controls = ({}: ControlsProps) => {
  const { playbackState, togglePlayback } = usePlayerContext();

  return (
    <View style={styles.player_controls}>
      <Pressable>
        <Feather name="shuffle" color={Theme.lowContrastTextColor} size={18} />
      </Pressable>

      <Pressable>
        <Feather name="skip-back" color="white" size={22} />
      </Pressable>

      <Pressable onPress={togglePlayback} style={styles.main_button}>
        <FontAwesome5
          name={playbackState === PlayerState.PLAYING ? "pause" : "play"}
          color={Theme.backgroundMainColor}
          size={24}
        />
      </Pressable>

      <Pressable>
        <Feather name="skip-forward" color="white" size={22} />
      </Pressable>

      <Pressable>
        <Feather name="repeat" color={Theme.lowContrastTextColor} size={18} />
      </Pressable>
    </View>
  );
};
