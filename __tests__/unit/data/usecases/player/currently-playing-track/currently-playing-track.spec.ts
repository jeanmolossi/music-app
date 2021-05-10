import faker from "faker";
import { makeGetCurrentlyPlayingTrackSut } from "__tests__/mocks";

describe("GetCurrentlyPlayingTrack", () => {
  describe("load", () => {
    test("Espera-se que faça a chamada com os parâmetros corretos", async () => {
      const url = faker.internet.url();
      const { sut, httpClientSpy } = makeGetCurrentlyPlayingTrackSut(url);

      await sut.get();

      expect(httpClientSpy.url).toBe(url);
      expect(httpClientSpy.header).toBeTruthy();
    });
  });
});
