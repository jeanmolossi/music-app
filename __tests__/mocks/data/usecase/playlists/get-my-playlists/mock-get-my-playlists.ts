import faker from "faker";
import { RemoteGetMyPlaylists } from "@/data/usecases";
import { GetMyPlaylists } from "@/domain/usecases";
import { HttpClientSpy } from "__tests__/mocks";

export const makeRemoteGetMyPlaylistsSut = (url = faker.internet.url()) => {
  const httpClientSpy = new HttpClientSpy<GetMyPlaylists.Model>();
  const sut = new RemoteGetMyPlaylists(url, httpClientSpy);

  return {
    sut,
    httpClientSpy,
  };
};
