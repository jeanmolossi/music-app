import { Feather, FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import { Pressable, View } from "react-native";
import { Theme } from "../../../styles";
import styles from "../styles";

interface ControlsProps {}

export const Controls = ({}: ControlsProps) => {
  return (
    <View style={styles.player_controls}>
      <Pressable>
        <Feather name="shuffle" color={Theme.lowContrastTextColor} size={18} />
      </Pressable>

      <Pressable>
        <Feather name="skip-back" color="white" size={22} />
      </Pressable>

      <Pressable style={styles.main_button}>
        <FontAwesome5
          name="pause"
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
