import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { AVPlaybackStatus } from "expo-av";
import {
  PlayerControlsContext,
  PlayerControlsProviderProps,
  PlayerState,
  TrackMetadata,
} from "./types";
import { usePlayerContextHelper } from "./helpers";
import {
  setPlaybackState,
  setProgressState,
  setTotalDuration,
} from "./state_management/actions";

const PlayerContext = createContext({} as PlayerControlsContext);

export const MUSIC_PATH = "@/data/assets/Haikaiss_–_A_Praga.mp3";

export const PlayerControlsProvider = (props: PlayerControlsProviderProps) => {
  const { children } = props;

  const {
    state,
    onSeekComplete,
    pauseMusic,
    playMusic,
    togglePlayback,
    updateMetadata,
  } = usePlayerContextHelper(props);

  const {
    playbackState,
    progressState,
    totalDuration,
    timers,
    currentPlaying,
  } = state;

  return (
    <PlayerContext.Provider
      value={{
        playMusic,
        pauseMusic,
        playbackState,
        progressState,
        totalDuration,
        timers,
        onSeekComplete,
        currentPlaying,
        togglePlayback,
        updateMetadata,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

export function usePlayerContext() {
  const context = useContext(PlayerContext);

  return context;
}
