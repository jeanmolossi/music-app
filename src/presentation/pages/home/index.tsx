import React from "react";
import { ImageBackground, View, Pressable } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated from "react-native-reanimated";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome5 } from "@expo/vector-icons";
import {
  Player,
  Text,
  usePlayer,
  AuthorizeSpotifyModal,
} from "@/presentation/components";
import { usePlayerContext, PlayerState } from "@/presentation/contexts";
import db from "@/data/mock/fake_db.json";
import { Theme } from "@/presentation/styles";
import { PopularList, AlbumsList, SocialsInfo } from "./components";
import { useHomeHelpers } from "./helpers";
import styles from "./styles";
import { HomeProps } from "./types";
import { useHomeAnimations } from "./home-animations";

export const Home = (props: HomeProps) => {
  const {
    animatedStyle,
    textAnimation,
    textBoxAnimation,
    onGestureEvent,
  } = useHomeAnimations();

  const { onNavigationStateChange, code, userInfo } = useHomeHelpers(props);

  const { onClose, visibility, onOpen } = usePlayer();
  const { playbackState, currentTrackMetadata } = usePlayerContext();

  return (
    <View style={styles.container}>
      <Player {...{ onClose, visibility, onOpen }} />

      {!code && (
        <AuthorizeSpotifyModal
          visible={!code}
          onNavigationStateChange={onNavigationStateChange}
        />
      )}

      {currentTrackMetadata?.item?.album.images[0].url && (
        <ImageBackground
          source={{ uri: currentTrackMetadata.item.album.images[0].url }}
          style={styles.imageCover}
        >
          <Animated.View style={[textBoxAnimation, { width: "100%" }]}>
            <LinearGradient
              colors={["#000000", "#00000000"]}
              start={{ x: 0.5, y: 1 }}
              end={{ x: 0.5, y: 0 }}
            >
              <Animated.View style={[styles.track_info]}>
                <Text style={styles.track_info_badge}>ARTISTA</Text>
                <Animated.Text style={[styles.track_info_music, textAnimation]}>
                  {currentTrackMetadata?.item.artists[0].name || ""}
                </Animated.Text>
              </Animated.View>
            </LinearGradient>
          </Animated.View>
        </ImageBackground>
      )}

      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <Animated.View style={[styles.more_content, animatedStyle]}>
          <Pressable style={styles.play_button} onPress={onOpen}>
            <LinearGradient
              style={[
                styles.background_play_button,
                playbackState === PlayerState.PLAYING
                  ? { paddingLeft: 0 }
                  : null,
              ]}
              colors={[Theme.mainColor, Theme.secondColor]}
            >
              <FontAwesome5
                name={playbackState === PlayerState.PLAYING ? "pause" : "play"}
                size={24}
              />
            </LinearGradient>
          </Pressable>

          <SocialsInfo
            {...{
              followers: userInfo?.followers.total,
              country: userInfo?.country,
              name: userInfo?.display_name,
            }}
          />

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
