import faker from "faker";
import { RemoteGetRecentlyPlayed } from "@/data/usecases";
import { GetRecentlyPlayed } from "@/domain/usecases";
import { HttpClientSpy } from "__tests__/mocks";

export const makeRemoteGetRecentlyPlayedSut = (url = faker.internet.url()) => {
  const httpClientSpy = new HttpClientSpy<GetRecentlyPlayed.Model>();
  const sut = new RemoteGetRecentlyPlayed(url, httpClientSpy);

  return {
    sut,
    httpClientSpy,
  };
};
