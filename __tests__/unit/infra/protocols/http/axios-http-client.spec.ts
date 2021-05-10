import { AxiosHttpClient } from "@/infra/protocols/http/axios-http-client";
import { mockAxios, mockHttpRequest, mockHttpResponse } from "__tests__/mocks";

jest.mock("axios");

const makeSut = () => {
  const sut = new AxiosHttpClient();
  const mockedAxios = mockAxios();

  return {
    sut,
    mockedAxios,
  };
};

describe("AxiosHttpClient", () => {
  describe("request", () => {
    test("Espera-se que chame o axios com os parametros corretos", async () => {
      const request = mockHttpRequest();

      const { mockedAxios, sut } = makeSut();

      await sut.request(request);

      expect(mockedAxios.request).toHaveBeenCalledWith({
        url: request.url,
        data: request.body,
        method: request.method,
        headers: request.headers,
      });
    });

    test("Espera-se que retorne o erro correto", async () => {
      const { sut, mockedAxios } = makeSut();

      mockedAxios.request.mockRejectedValueOnce({
        response: mockHttpResponse(),
      });

      const promise = sut.request(mockHttpRequest());

      expect(promise).rejects.toEqual(
        mockedAxios.request.mock.results[0].value
      );
    });
  });
});
