import React from "react";
import { Entypo, Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Alert, Image, Pressable, View } from "react-native";
import { PanGestureHandler, ScrollView } from "react-native-gesture-handler";
import Animated from "react-native-reanimated";
import { Theme } from "@/presentation/styles";
import { Text } from "@/presentation/components";
import { usePlayerContext } from "@/presentation/contexts";
import { Controls } from "./controls";
import { usePlayerHelpers } from "./helpers";
import styles from "./styles";
import { Progress } from "./progress";

export interface PlayerProps {
  visibility: boolean;
  onClose: () => void;
  onOpen: () => void;
}

export const Player = (props: PlayerProps) => {
  const { onClose } = props;
  const { onGestureEvent, animatedStyles } = usePlayerHelpers(props);
  const { currentTrackMetadata } = usePlayerContext();

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
          <Animated.View>
            <View style={styles.header}>
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
                <Feather
                  name="list"
                  color={Theme.contrastTextColor}
                  size={24}
                />
              </Pressable>
            </View>

            <View style={styles.cover}>
              <Image
                source={{ uri: currentTrackMetadata.cover }}
                style={styles.cover_image}
              />
            </View>
          </Animated.View>
        </PanGestureHandler>

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

          <Progress />

          <Controls />
        </View>
      </ScrollView>
    </Animated.View>
  );
};
