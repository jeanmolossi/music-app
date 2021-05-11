import { GetCurrentlyPlayingTrack, GetRecentlyPlayed } from "@/domain/usecases";
import { ReactNode } from "react";

export enum PlayerState {
  BUFFERING = "buffering",
  PLAYING = "playing",
  LOADING = "loading",
  LOADED = "loaded",
  PAUSED = "paused",
  STOPPED = "stopped",
  FINISHED = "finished",
}

export interface PlayerControlsContext {
  playMusic: () => void;
  pauseMusic: () => void;
  onSeekComplete: (value: number) => void;
  togglePlayback: () => void;
  updateMetadata: (metadatas: TrackMetadata) => void;
  loadPlaylist: (playlist_url: string) => void;
  playbackState: PlayerState;
  progressState: number;
  totalDuration: number;
  timers: {
    total: string;
    current: string;
  };
  currentPlaying?: TrackMetadata;
}

export interface PlayerControlsProviderProps {
  children?: ReactNode;
  remoteGetCurrentlyPlaying: GetCurrentlyPlayingTrack;
}

export type TrackMetadata = GetRecentlyPlayed.Model["items"][0];
