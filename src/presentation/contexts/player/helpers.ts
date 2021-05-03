import { GetCurrentlyPlayingTrack } from "@/domain/usecases";
import { ReactNode } from "react";

export enum PlayerState {
  BUFFERING = "buffering",
  PLAYING = "playing",
  LOADING = "loading",
  PAUSED = "paused",
  STOPPED = "stopped",
}

export interface PlayerControlsContext {
  playMusic: () => void;
  pauseMusic: () => void;
  onSeekComplete: (value: number) => void;
  togglePlayback: () => void;
  playbackState: PlayerState;
  progressState: number;
  totalDuration: number;
  timers: {
    total: string;
    current: string;
  };
  currentTrackMetadata?: GetCurrentlyPlayingTrack.Model;
}

export interface PlayerControlsProviderProps {
  children?: ReactNode;
  remoteGetCurrentlyPlaying: GetCurrentlyPlayingTrack;
}
