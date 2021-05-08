import faker from "faker";
import { RemoteGetCurrentlyPlayingTrack } from "@/data/usecases";
import { GetCurrentlyPlayingTrack } from "@/domain/usecases";
import { HttpClientSpy } from "__tests__/mocks";

const makeSut = (url = faker.internet.url()) => {
  const httpClientSpy = new HttpClientSpy<GetCurrentlyPlayingTrack.Model>();
  const sut = new RemoteGetCurrentlyPlayingTrack(url, httpClientSpy);

  return {
    sut,
    httpClientSpy,
  };
};

describe("GetCurrentlyPlayingTrack", () => {
  describe("load", () => {
    test("Espera-se que faça a chamada com os parâmetros corretos", async () => {
      const url = faker.internet.url();
      const { sut, httpClientSpy } = makeSut(url);

      await sut.get();

      expect(httpClientSpy.url).toBe(url);
      expect(httpClientSpy.header).toBeTruthy();
    });
  });
});
