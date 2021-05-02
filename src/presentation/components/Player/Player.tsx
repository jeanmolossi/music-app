import React from "react";
import { Entypo, Feather } from "@expo/vector-icons";
import Slider from "@react-native-community/slider";
import { LinearGradient } from "expo-linear-gradient";
import { Alert, Image, Pressable, View } from "react-native";
import { PanGestureHandler, ScrollView } from "react-native-gesture-handler";
import Animated from "react-native-reanimated";
import { Theme } from "@/presentation/styles";
import { Text } from "@/presentation/components";
import { usePlayerContext } from "./context/usePlayerControls";
import { Controls } from "./controls";
import { usePlayerHelpers } from "./helpers";
import styles from "./styles";

export interface PlayerProps {
  visibility: boolean;
  onClose: () => void;
  onOpen: () => void;
}

export const Player = (props: PlayerProps) => {
  const { onClose } = props;
  const { onGestureEvent, animatedStyles } = usePlayerHelpers(props);
  const {
    progressState,
    totalDuration,
    timers,
    onSeekComplete,
    currentTrackMetadata,
  } = usePlayerContext();

  return (
    <Animated.View style={animatedStyles}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <LinearGradient
          colors={[Theme.secondColor, Theme.secondColor_100]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={styles.addorn}
        />
        <PanGestureHandler onGestureEvent={onGestureEvent}>
          <Animated.View style={styles.header}>
            <Pressable onPress={onClose}>
              <Feather
                name="chevron-down"
                color={Theme.backgroundMainColor}
                size={24}
              />
            </Pressable>

            <Text style={{ color: Theme.backgroundMainColor }}>
              Tocando agora
            </Text>

            <Pressable>
              <Feather name="list" color={Theme.contrastTextColor} size={24} />
            </Pressable>
          </Animated.View>
        </PanGestureHandler>

        <View style={styles.cover}>
          <Image
            source={{ uri: currentTrackMetadata.cover }}
            style={styles.cover_image}
          />
        </View>

        <View style={styles.player_infos}>
          <View style={styles.infos_header}>
            <View style={styles.playing_track_info}>
              <Text size="xl" bold>
                {currentTrackMetadata.track}
              </Text>
              <Text variant="suave">{currentTrackMetadata.artist}</Text>
            </View>
            <Pressable
              onPress={() => Alert.alert("OK")}
              style={styles.like_button}
            >
              <Entypo name="heart" color={Theme.secondColor} size={24} />
            </Pressable>
          </View>

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

          <Controls />
        </View>
      </ScrollView>
    </Animated.View>
  );
};
