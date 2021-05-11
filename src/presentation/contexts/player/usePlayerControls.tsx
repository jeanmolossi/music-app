import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

import { PlayerControlsContext, PlayerControlsProviderProps } from "./types";
import { usePlayerContextHelper } from "./helpers";

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
    loadPlaylist,
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
        loadPlaylist,
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
