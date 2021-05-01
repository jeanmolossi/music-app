import React from "react";
import { ImageBackground, View, Pressable } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated from "react-native-reanimated";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome5 } from "@expo/vector-icons";
import { Player, Text, usePlayer } from "../../components";
import db from "../../../data/mock/fake_db.json";
import { Theme } from "../../styles";
import styles from "./styles";
import { PopularList, AlbumsList, SocialsInfo } from "./components";
import { useHomeHelpers } from "./helpers";

interface HomeProps {}

export const Home = ({}: HomeProps) => {
  const {
    animatedStyle,
    textAnimation,
    textBoxAnimation,
    onGestureEvent,
  } = useHomeHelpers();

  const { onClose, visibility, onOpen } = usePlayer();

  return (
    <View style={styles.container}>
      <Player {...{ onClose, visibility, onOpen }} />
      <ImageBackground source={{ uri: db.cover }} style={styles.imageCover}>
        <Animated.View style={[textBoxAnimation, { width: "100%" }]}>
          <LinearGradient
            colors={["#000000", "#00000000"]}
            start={{ x: 0.5, y: 1 }}
            end={{ x: 0.5, y: 0 }}
          >
            <Animated.View style={[styles.track_info]}>
              <Text style={styles.track_info_badge}>ARTISTA</Text>
              <Animated.Text style={[styles.track_info_music, textAnimation]}>
                Eminem / Vicente
              </Animated.Text>
            </Animated.View>
          </LinearGradient>
        </Animated.View>
      </ImageBackground>

      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <Animated.View style={[styles.more_content, animatedStyle]}>
          <Pressable style={styles.play_button} onPress={onOpen}>
            <LinearGradient
              style={styles.background_play_button}
              colors={[Theme.mainColor, Theme.secondColor]}
            >
              <FontAwesome5 name="play" size={24} />
            </LinearGradient>
          </Pressable>

          <SocialsInfo />

          <View style={styles.popular_content}>
            <Text variant="suave">Popular</Text>

            <PopularList data={db.popular} />

            <Text variant="suave" style={{ marginTop: 16 }}>
              Albums
            </Text>

            <AlbumsList data={db.albums} />
          </View>
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};
