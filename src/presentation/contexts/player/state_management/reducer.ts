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

export function playerReducer(state: PlayerStates, action: PlayerActions) {
  switch (action.type) {
    default:
      return state;
  }
}
