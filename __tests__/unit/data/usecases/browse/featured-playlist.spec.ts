import faker from "faker";
import { RemoteBrowseFeaturedPlaylist } from "@/data/usecases";
import { BrowseFeaturedPlaylists } from "@/domain/usecases";
import { HttpClientSpy } from "__tests__/mocks";

const makeSut = (url = faker.internet.url()) => {
  const httpClientSpy = new HttpClientSpy<BrowseFeaturedPlaylists.Model>();
  const sut = new RemoteBrowseFeaturedPlaylist(url, httpClientSpy);
  return {
    sut,
    httpClientSpy,
  };
};

describe("FeaturedPlaylist", () => {
  describe("load", () => {
    test("Espero que faça a chamada com os parâmetros corretos", async () => {
      const url = faker.internet.url();
      const { httpClientSpy, sut } = makeSut(url);

      await sut.load();

      expect(httpClientSpy.url).toBe(url);
    });
  });
});
