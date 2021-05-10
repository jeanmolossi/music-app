import faker from "faker";
import { makeRemoteGetMyPlaylistsSut } from "__tests__/mocks";

describe("GetMyPlaylists", () => {
  describe("load", () => {
    test("Espera-se que faça a chamada com os parâmetros corretos", async () => {
      const url = faker.internet.url();
      const { sut, httpClientSpy } = makeRemoteGetMyPlaylistsSut(url);

      await sut.load();

      expect(httpClientSpy.url).toBe(url);
      expect(httpClientSpy.header).toBeTruthy();
    });
  });
});
