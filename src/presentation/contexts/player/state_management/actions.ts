import { PlayerState, TrackMetadata } from "../types";
import {
  UpdateCurrentPlaying,
  UpdatePlaybackStateAction,
  UpdateProgressState,
  UpdateTimersAction,
  UpdateTotalDuration,
} from "./types";

export function setTotalDuration(totalDuration: number): UpdateTotalDuration {
  return {
    type: "@player/update-total-duration",
    payload: {
      totalDuration,
    },
  };
}

export function setProgressState(position: number): UpdateProgressState {
  return {
    type: "@player/update-progress-state",
    payload: {
      progressState: position,
    },
  };
}

export function setPlaybackState(
  playbackState: PlayerState
): UpdatePlaybackStateAction {
  return {
    type: "@player/update-playback-state",
    payload: { playerState: playbackState },
  };
}

export function setTimers(current: string, total: string): UpdateTimersAction {
  return {
    type: "@player/update-timers",
    payload: {
      current,
      total,
    },
  };
}

export function setCurrentPlaying(
  currentPlaying: TrackMetadata
): UpdateCurrentPlaying {
  return {
    type: "@player/update-metadatas",
    payload: {
      currentPlaying,
    },
  };
}
