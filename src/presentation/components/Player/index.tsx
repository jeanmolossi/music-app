import { Entypo, Feather, FontAwesome5 } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React, { Component, useEffect, useState } from "react";
import { Image, Modal, Pressable, View } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated from "react-native-reanimated";
import { Theme } from "../../styles";
import { Text } from "../Text";
import { Controls } from "./controls";
import { usePlayerHelpers } from "./helpers";
import styles from "./styles";

export interface PlayerProps {
  visibility: boolean;
  onClose: () => void;
  onOpen: () => void;
}

const COVER_MOCK =
  "https://cdn.pixabay.com/photo/2016/05/19/16/34/rapper-1403313_960_720.jpg";

export const Player = (props: PlayerProps) => {
  const { onClose } = props;
  const { onGestureEvent, animatedStyles } = usePlayerHelpers(props);

  return (
    <Animated.View style={animatedStyles}>
      <View style={styles.container}>
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
          <Image source={{ uri: COVER_MOCK }} style={styles.cover_image} />
        </View>

        <View style={styles.player_infos}>
          <View style={styles.infos_header}>
            <View style={styles.playing_track_info}>
              <Text size="xl" bold>
                Lobo
              </Text>
              <Text variant="suave">Mc Poze</Text>
            </View>
            <Pressable style={styles.like_button}>
              <Entypo name="heart" color={Theme.secondColor} size={24} />
            </Pressable>
          </View>

          <View style={styles.progress_bar}>
            <View style={styles.progress_bar_bullet}>
              <View style={styles.bar} />
              <View style={styles.bullet} />
            </View>
            <View style={styles.timers}>
              <Text>1:04</Text>
              <Text>3:27</Text>
            </View>
          </View>

          <Controls />
        </View>
      </View>
    </Animated.View>
  );
};
