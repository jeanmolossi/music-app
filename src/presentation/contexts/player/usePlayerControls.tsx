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
} from "./helpers";
import playlist from "@/data/mock/playlist";
import { GetCurrentlyPlayingTrack } from "@/domain/usecases";

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
  ] = useState<GetCurrentlyPlayingTrack.Model>();
  const [nextCheck, setNextCheck] = useState(0);
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
          setCurrentTrackIndex((oldIndex) => {
            if (playlist.length > oldIndex + 1) return oldIndex + 1;
            return 0;
          });
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

  useEffect(() => {
    timerInMinutes();
  }, [timerInMinutes]);

  useEffect(() => {
    setPlaybackState(PlayerState.LOADING);

    playbackObject
      .loadAsync(
        playlist[currentTrackIndex].source,
        {
          progressUpdateIntervalMillis: 1000,
        },
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
  }, [currentTrackIndex, playlist]);

  useEffect(() => {
    let CheckInterval: NodeJS.Timeout;
    if (nextCheck > 0)
      CheckInterval = setTimeout(() => {
        setReload(true);
      }, nextCheck);

    return () => {
      clearTimeout(CheckInterval);
    };
  }, []);

  useEffect(() => {
    if (reload) {
      console.log("RELOAD");
      remoteGetCurrentlyPlaying.get().then((response) => {
        setCurrentTrackMetadata(response);

        if (response.is_playing)
          setNextCheck(Date.now() + (response.item?.duration_ms || 0));

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
