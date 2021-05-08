import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { Audio, AVPlaybackStatus } from "expo-av";
import {
  PlayerControlsContext,
  PlayerControlsProviderProps,
  PlayerState,
  TrackMetadata,
} from "./helpers";

const PlayerContext = createContext({} as PlayerControlsContext);

export const MUSIC_PATH = "@/data/assets/Haikaiss_–_A_Praga.mp3";

const playbackObject = new Audio.Sound();

export const PlayerControlsProvider = ({
  children,
  remoteGetCurrentlyPlaying,
}: PlayerControlsProviderProps) => {
  const [
    currentTrackMetadata,
    setCurrentTrackMetadata,
  ] = useState<TrackMetadata>();
  const [nextCheck, setNextCheck] = useState(-1);
  const [reload, setReload] = useState(true);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [playbackState, setPlaybackState] = useState(PlayerState.LOADING);
  const [progressState, setProgressState] = useState(0);
  const [totalDuration, setTotalDuration] = useState(0);
  const [timers, setTimers] = useState({
    total: "0:00",
    current: "0:00",
  });

  const onPlaybackStatusUpdate = useCallback(
    (status: AVPlaybackStatus) => {
      if (!status.isLoaded) {
        setPlaybackState(PlayerState.LOADING);
        return;
      }

      const playableDurationMillis = status.playableDurationMillis || 0;

      if (status.isBuffering && playableDurationMillis <= 0) {
        setPlaybackState(PlayerState.BUFFERING);
        return;
      }

      if (status.isPlaying) setPlaybackState(PlayerState.PLAYING);

      if (status.positionMillis > 0) {
        setProgressState(status.positionMillis);
      }

      if (status.didJustFinish) {
        playbackObject.unloadAsync().then(() => {
          setPlaybackState(PlayerState.STOPPED);
        });
      }
    },
    [currentTrackIndex]
  );

  const playMusic = useCallback(() => {
    playbackObject.playAsync().then(() => {
      setPlaybackState(PlayerState.PLAYING);
    });
  }, []);

  const pauseMusic = useCallback(() => {
    playbackObject.pauseAsync().then(() => {
      setPlaybackState(PlayerState.PAUSED);
    });
  }, []);

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

    setTimers({
      total: durationTotal,
      current: currentTotal,
    });
  }, [totalDuration, progressState]);

  const onSeekComplete = useCallback((value: number) => {
    playbackObject.setPositionAsync(value);
  }, []);

  const togglePlayback = useCallback(() => {
    if (playbackState === PlayerState.PLAYING) pauseMusic();
    else playMusic();
  }, [playbackState]);

  const updateMetadata = useCallback((metadatas: TrackMetadata) => {
    setCurrentTrackMetadata(metadatas);
  }, []);

  useEffect(() => {
    timerInMinutes();
  }, [timerInMinutes]);

  useEffect(() => {
    setPlaybackState(PlayerState.LOADING);

    if (currentTrackMetadata?.track.preview_url)
      playbackObject
        .loadAsync(
          { uri: currentTrackMetadata?.track.preview_url },
          { progressUpdateIntervalMillis: 1000 },
          true
        )
        .then((status) => {
          if (status.isLoaded) {
            playbackObject.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate);
            setTotalDuration(status.durationMillis || 0);
            setProgressState(status.positionMillis);

            if (currentTrackIndex > 0) {
              setPlaybackState(PlayerState.PLAYING);
              playMusic();
            } else {
              setPlaybackState(PlayerState.STOPPED);
            }
          }
        });
  }, [currentTrackMetadata]);

  useEffect(() => {
    let CheckInterval: NodeJS.Timeout;
    if (nextCheck >= 0)
      CheckInterval = setTimeout(() => {
        setReload(true);
      }, nextCheck);

    return () => {
      clearTimeout(CheckInterval);
    };
  }, [nextCheck]);

  useEffect(() => {
    if (reload) {
      console.log("RELOAD");
      remoteGetCurrentlyPlaying.get().then((response) => {
        if (response.is_playing) {
          const nextCheckCalc =
            (response.item?.duration_ms || 1) - response.progress_ms;

          console.log(nextCheckCalc);
          setNextCheck(nextCheckCalc);
        }

        setReload(false);
      });
    }
  }, [reload]);

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
        currentTrackMetadata,
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
