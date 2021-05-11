import { Audio, AVPlaybackStatus } from "expo-av";
import { useCallback, useEffect, useReducer } from "react";
import {
  setCurrentPlaying,
  setPlaybackState,
  setProgressState,
  setTotalDuration,
} from "./state_management/actions";
import { initialState, playerReducer } from "./state_management/reducer";
import {
  PlayerControlsProviderProps,
  PlayerState,
  TrackMetadata,
} from "./types";

const playbackObject = new Audio.Sound();

export function usePlayerContextHelper(props: PlayerControlsProviderProps) {
  const [state, dispatch] = useReducer(playerReducer, initialState);

  const { playbackState, progressState, totalDuration, currentPlaying } = state;

  const timerInMinutes = useCallback(() => {
    const durationInMinutes = Math.floor(totalDuration / 1000 / 60);
    const durationSeconds = Math.floor((totalDuration / 1000) % 60)
      .toString()
      .padStart(2, "0");

    const durationTotal = `${durationInMinutes}:${durationSeconds}`;

    const currentInMinutes = Math.floor(progressState / 1000 / 60);
    const currentSeconds = Math.floor((progressState / 1000) % 60)
      .toString()
      .padStart(2, "0");

    const currentTotal = `${currentInMinutes}:${currentSeconds}`;

    dispatch({
      type: "@player/update-timers",
      payload: {
        total: durationTotal,
        current: currentTotal,
      },
    });
  }, [totalDuration, progressState]);

  const onPlaybackStatusUpdate = useCallback((status: AVPlaybackStatus) => {
    if (!status.isLoaded) {
      dispatch(setPlaybackState(PlayerState.LOADING));
      return;
    }

    const playableDurationMillis = status.playableDurationMillis || 0;

    if (status.isBuffering && playableDurationMillis <= 0) {
      dispatch(setPlaybackState(PlayerState.BUFFERING));
      return;
    }

    if (status.isPlaying) dispatch(setPlaybackState(PlayerState.PLAYING));

    if (status.positionMillis > 0) {
      dispatch(setProgressState(status.positionMillis));
    }

    if (status.didJustFinish) {
      playbackObject.unloadAsync().then(() => {
        dispatch(setPlaybackState(PlayerState.STOPPED));
      });
    }
  }, []);

  const loadPlayback = useCallback(
    async (shouldPlay: boolean = false) => {
      if (currentPlaying)
        return await playbackObject.loadAsync(
          { uri: currentPlaying.track.preview_url },
          { progressUpdateIntervalMillis: 625, shouldPlay },
          true
        );
    },
    [currentPlaying]
  );

  const playMusic = useCallback(() => {
    playbackObject
      .playAsync()
      .then(() => {
        dispatch(setPlaybackState(PlayerState.PLAYING));
      })
      .catch(() => {
        loadPlayback(true);
      });
  }, [loadPlayback]);

  const pauseMusic = useCallback(() => {
    playbackObject.pauseAsync().then(() => {
      dispatch(setPlaybackState(PlayerState.PAUSED));
    });
  }, []);

  const onSeekComplete = useCallback((value: number) => {
    playbackObject.setPositionAsync(value);
  }, []);

  const togglePlayback = useCallback(() => {
    if (playbackState === PlayerState.PLAYING) pauseMusic();
    else playMusic();
  }, [playbackState]);

  const updateMetadata = useCallback((metadatas: TrackMetadata) => {
    dispatch(setCurrentPlaying(metadatas));
  }, []);

  useEffect(() => {
    timerInMinutes();
  }, [timerInMinutes]);

  useEffect(() => {
    dispatch(setPlaybackState(PlayerState.LOADING));

    loadPlayback().then((status) => {
      if (status && status.isLoaded) {
        playbackObject.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate);
        dispatch(setTotalDuration(status.durationMillis || 0));
        dispatch(setProgressState(status.positionMillis));

        dispatch(setPlaybackState(PlayerState.STOPPED));
      }
    });
  }, [loadPlayback]);

  return {
    playbackObject,
    state,
    dispatch,
    timerInMinutes,
    onPlaybackStatusUpdate,
    loadPlayback,
    playMusic,
    pauseMusic,
    onSeekComplete,
    togglePlayback,
    updateMetadata,
  };
}
