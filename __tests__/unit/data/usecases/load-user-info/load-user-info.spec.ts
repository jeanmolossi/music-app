import faker from "faker";
import { RemoteLoadUserInfo } from "@/data/usecases";
import { LoadUserInfo } from "@/domain/usecases";
import { HttpClientSpy } from "__tests__/mocks";

const makeSut = (url = faker.internet.url()) => {
  const httpClientSpy = new HttpClientSpy<LoadUserInfo.Model>();
  const sut = new RemoteLoadUserInfo(url, httpClientSpy);

  return {
    sut,
    httpClientSpy,
  };
};

describe("LoadUserInfo", () => {
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
