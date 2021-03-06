import axios from "axios";
import faker from "faker";

export const mockHttpResponse = () => faker.random.objectElement();

export const mockAxios = (): jest.Mocked<typeof axios> => {
  const mockedAxios = axios as jest.Mocked<typeof axios>;

  mockedAxios.request.mockClear().mockResolvedValue(mockHttpResponse());

  return mockedAxios;
};
