import faker from "faker";
import { BrowseFeaturedPlaylists } from "@/domain/usecases";
import { RemoteBrowseFeaturedPlaylist } from "@/data/usecases";
import { HttpClientSpy } from "__tests__/mocks";

type MockPlaylist = BrowseFeaturedPlaylists.Model["playlists"];

export const mockRemoteFeaturedPlaylist = (): BrowseFeaturedPlaylists.Model => ({
  message: faker.random.words(),
  playlists: (faker.random.objectElement() as unknown) as MockPlaylist,
});

export const makeBrowseFeaturedPlaylistsSut = (url = faker.internet.url()) => {
  const httpClientSpy = new HttpClientSpy<BrowseFeaturedPlaylists.Model>();

  const sut = new RemoteBrowseFeaturedPlaylist(url, httpClientSpy);
  return {
    sut,
    httpClientSpy,
  };
};
