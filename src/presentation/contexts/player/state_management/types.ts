import { PlayerState, TrackMetadata } from "../types";

export type ActionModel<T, PayloadType> = {
  type: T;
  payload: PayloadType;
};

export type UpdateTimersAction = ActionModel<
  "@player/update-timers",
  {
    total: string;
    current: string;
  }
>;

export type UpdatePlaybackStateAction = ActionModel<
  "@player/update-playback-state",
  { playerState: PlayerState }
>;

export type UpdateTotalDuration = ActionModel<
  "@player/update-total-duration",
  { totalDuration: number }
>;

export type UpdateProgressState = ActionModel<
  "@player/update-progress-state",
  { progressState: number }
>;

export type UpdateCurrentPlaying = ActionModel<
  "@player/update-metadatas",
  { currentPlaying: TrackMetadata }
>;

export type PlayerStates = {
  currentPlaying?: TrackMetadata;
  playbackState: PlayerState;
  progressState: number;
  totalDuration: number;
  timers: {
    total: string;
    current: string;
  };
};

export type PlayerActions =
  | UpdateTimersAction
  | UpdatePlaybackStateAction
  | UpdateTotalDuration
  | UpdateProgressState
  | UpdateCurrentPlaying;
