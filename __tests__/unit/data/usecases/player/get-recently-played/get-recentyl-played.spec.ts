import faker from "faker";
import { RemoteGetRecentlyPlayed } from "@/data/usecases";
import { GetRecentlyPlayed } from "@/domain/usecases";
import { HttpClientSpy } from "__tests__/mocks";

const makeSut = (url = faker.internet.url()) => {
  const httpClientSpy = new HttpClientSpy<GetRecentlyPlayed.Model>();
  const sut = new RemoteGetRecentlyPlayed(url, httpClientSpy);

  return {
    sut,
    httpClientSpy,
  };
};

describe("GetRecentlyPlayed", () => {
  describe("load", () => {
    test("Espera-se que faça a chamada com os parâmetros corretos", async () => {
      const url = faker.internet.url();
      const { sut, httpClientSpy } = makeSut(url);

      httpClientSpy.response = {
        href: "valid-link",
        cursors: {
          after: "",
          before: "",
        },
        items: [
          {
            context: {} as any,
            played_at: new Date().toISOString(),
            track: {} as any,
          },
          {
            context: {} as any,
            played_at: new Date().toISOString(),
            track: {} as any,
          },
        ],
        limit: 10,
      };

      await sut.load();

      expect(httpClientSpy.url).toBe(url);
      expect(httpClientSpy.header).toBeTruthy();
    });

    test("Espera-se que faça a chamada com os parâmetros corretos e adicione um objeto de items como um vetor vazio", async () => {
      const url = faker.internet.url();
      const { sut, httpClientSpy } = makeSut(url);

      httpClientSpy.response = undefined as any;

      await sut.load();

      expect(httpClientSpy.url).toBe(url);
      expect(httpClientSpy.header).toBeTruthy();
    });
  });
});
