import faker from "faker";
import { RemoteGetCurrentlyPlayingTrack } from "@/data/usecases";
import { GetCurrentlyPlayingTrack } from "@/domain/usecases";
import { HttpClientSpy } from "__tests__/mocks";

export const makeGetCurrentlyPlayingTrackSut = (url = faker.internet.url()) => {
  const httpClientSpy = new HttpClientSpy<GetCurrentlyPlayingTrack.Model>();
  const sut = new RemoteGetCurrentlyPlayingTrack(url, httpClientSpy);

  return {
    sut,
    httpClientSpy,
  };
};
