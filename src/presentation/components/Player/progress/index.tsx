import React from "react";
import { View } from "react-native";
import Slider from "@react-native-community/slider";
import { Theme } from "@/presentation/styles";
import { Text, usePlayerContext } from "@/presentation/components";
import styles from "../styles";

interface ProgressProps {}

export const Progress = ({}: ProgressProps) => {
  const {
    progressState,
    totalDuration,
    timers,
    onSeekComplete,
  } = usePlayerContext();
  return (
    <View style={styles.progress_bar}>
      <View style={styles.progress_bar_bullet}>
        <Slider
          style={[styles.bar]}
          minimumValue={0}
          maximumValue={totalDuration}
          thumbTintColor={Theme.secondColor}
          maximumTrackTintColor={Theme.backgroundDarkColor}
          minimumTrackTintColor={Theme.secondColor_100}
          value={progressState}
          onSlidingComplete={onSeekComplete}
        />
      </View>
      <View style={styles.timers}>
        <Text>{timers.current}</Text>
        <Text>{timers.total}</Text>
      </View>
    </View>
  );
};
