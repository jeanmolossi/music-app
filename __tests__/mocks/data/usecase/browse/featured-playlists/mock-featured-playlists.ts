import faker from "faker";
import { BrowseFeaturedPlaylists } from "@/domain/usecases";

type MockPlaylist = BrowseFeaturedPlaylists.Model["playlists"];

export const mockRemoteFeaturedPlaylist = (): BrowseFeaturedPlaylists.Model => ({
  message: faker.random.words(),
  playlists: (faker.random.objectElement() as unknown) as MockPlaylist,
});
