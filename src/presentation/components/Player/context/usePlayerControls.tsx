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
  PlayerMetadatas,
} from "./helpers";
import playlist from "@/data/mock/playlist";

const PlayerContext = createContext({} as PlayerControlsContext);

export const MUSIC_PATH = "@/data/assets/Haikaiss_–_A_Praga.mp3";

const playbackObject = new Audio.Sound();

export const PlayerControlsProvider = ({
  children,
}: PlayerControlsProviderProps) => {
  const [
    currentTrackMetadata,
    setCurrentTrackMetadata,
  ] = useState<PlayerMetadatas>(playlist[0]);
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

  useEffect(() => {
    timerInMinutes();
  }, [timerInMinutes]);

  useEffect(() => {
    setCurrentTrackMetadata(playlist[currentTrackIndex]);

    setPlaybackState(PlayerState.LOADING);

    playbackObject
      .loadAsync(
        {
          uri: "https://api.spotify.com/v1/tracks/7IG7laqVpcvIIULrwWP5SA",
          headers: {
            Authorization:
              "Bearer BQBM9zLzpA7Atau_q9ab3FFsD6C3Jz7pzjIQ6WTfGb-F9luG-yI3hkRruHlhNGOXquZwkhVA1gUBLCbByIWCtUH8D7iDcPeMO7XnWPfKsij9oZ6_Gd63PTmYDyLxx_W60cU3b34fGjKhzgNqIqGnabxN6Dx9t1FgSB4UR9ksMLs71mt6H71RXs3-eDiSBf3rJv-HooJRlBiHuK4ucg7xt0w2m7lgrwYBSo87hZlSug2J4lHOaJov5p1hva8nzuSEz2zBo-QubLsCbwwJiVL9Ida-Qw",
          },
        },
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
