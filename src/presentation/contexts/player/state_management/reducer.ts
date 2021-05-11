import { PlayerState, TrackMetadata } from "../types";
import { PlayerActions, PlayerStates } from "./types";

export const initialState: PlayerStates = {
  currentPlaying: undefined,
  playbackState: PlayerState.LOADING,
  progressState: 0,
  totalDuration: 0,
  timers: {
    current: "0:00",
    total: "0:00",
  },
};

export function playerReducer(
  state: PlayerStates,
  action: PlayerActions
): PlayerStates {
  switch (action.type) {
    case "@player/update-metadatas": {
      const { currentPlaying } = action.payload;

      return {
        ...state,
        currentPlaying,
      };
    }

    case "@player/update-playback-state": {
      const { playerState } = action.payload;

      return {
        ...state,
        playbackState: playerState,
      };
    }

    case "@player/update-progress-state": {
      const { progressState } = action.payload;

      return {
        ...state,
        progressState,
      };
    }

    case "@player/update-timers": {
      const { current, total } = action.payload;

      return {
        ...state,
        timers: {
          current,
          total,
        },
      };
    }

    case "@player/update-total-duration": {
      const { totalDuration } = action.payload;

      return {
        ...state,
        totalDuration,
      };
    }

    default:
      return state;
  }
}
