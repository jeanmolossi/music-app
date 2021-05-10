import faker from "faker";
import { makeLoadUserInfoSut } from "__tests__/mocks";

describe("LoadUserInfo", () => {
  describe("load", () => {
    test("Espera-se que faça a chamada com os parâmetros corretos", async () => {
      const url = faker.internet.url();
      const { sut, httpClientSpy } = makeLoadUserInfoSut(url);

      await sut.load();

      expect(httpClientSpy.url).toBe(url);
      expect(httpClientSpy.header).toBeTruthy();
    });
  });
});
