import AsyncStorage from "@react-native-async-storage/async-storage";
import faker from "faker";

export const mockAsyncResponse = () =>
  JSON.stringify(faker.random.objectElement());

export const mockAsyncStorage = () => {
  const mockedAsyncStorage = AsyncStorage as jest.Mocked<typeof AsyncStorage>;

  mockedAsyncStorage.getItem
    .mockClear()
    .mockResolvedValueOnce(mockAsyncResponse());

  mockedAsyncStorage.setItem.mockClear().mockResolvedValueOnce();
  mockedAsyncStorage.removeItem.mockClear().mockResolvedValueOnce();

  return mockedAsyncStorage;
};
