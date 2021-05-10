import faker from "faker";
import { makeBrowseFeaturedPlaylistsSut } from "__tests__/mocks";

describe("FeaturedPlaylist", () => {
  describe("load", () => {
    test("Espero que faça a chamada com os parâmetros corretos", async () => {
      const url = faker.internet.url();
      const { httpClientSpy, sut } = makeBrowseFeaturedPlaylistsSut(url);

      httpClientSpy.response = {
        message: "Its featured playlists",
        playlists: {
          href: "link",
          items: [],
          limit: 10,
          offset: 0,
          total: 10,
        },
      };

      await sut.load();

      expect(httpClientSpy.url).toBe(url);
    });
  });
});
