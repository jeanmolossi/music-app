import { CurrentUserProfile } from "../models";

export interface LoadUserInfo {
  load(): Promise<LoadUserInfo.Model>;
}

export namespace LoadUserInfo {
  export type Model = CurrentUserProfile;
}
