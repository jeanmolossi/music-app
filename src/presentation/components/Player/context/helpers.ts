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
  currentTrackMetadata: PlayerMetadatas;
}

export interface PlayerControlsProviderProps {
  children?: ReactNode;
}

export interface PlayerMetadatas {
  source: any;
  cover: string;
  artist: string;
  track: string;
}
