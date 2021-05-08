import faker from "faker";
import { RemoteGetMyPlaylists } from "@/data/usecases";
import { GetMyPlaylists } from "@/domain/usecases";
import { HttpClientSpy } from "__tests__/mocks";

const makeSut = (url = faker.internet.url()) => {
  const httpClientSpy = new HttpClientSpy<GetMyPlaylists.Model>();
  const sut = new RemoteGetMyPlaylists(url, httpClientSpy);

  return {
    sut,
    httpClientSpy,
  };
};

describe("GetMyPlaylists", () => {
  describe("load", () => {
    test("Espera-se que faça a chamada com os parâmetros corretos", async () => {
      const url = faker.internet.url();
      const { sut, httpClientSpy } = makeSut(url);

      await sut.load();

      expect(httpClientSpy.url).toBe(url);
      expect(httpClientSpy.header).toBeTruthy();
    });
  });
});
