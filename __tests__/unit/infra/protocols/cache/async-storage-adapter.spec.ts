import { AsyncStorageAdapter } from "@/infra/protocols/cache";
import { mockAsyncStorage } from "__tests__/mocks/infra/protocols/cache/mock-async-storage";

jest.mock("@react-native-async-storage/async-storage");

const makeSut = (value: object = {}) => {
  const prefix = "@AwesomeMusic";
  const sut = new AsyncStorageAdapter();
  const mockedStorageAdapter = mockAsyncStorage();

  const expected_object = JSON.stringify(value);

  return {
    prefix,
    sut,
    mockedStorageAdapter,
    expected_object,
  };
};

describe("AsyncStorageAdapter", () => {
  describe("get", () => {
    test("Espera-se que seja chamado o adapter com o parâmetro correto", async () => {
      const { prefix, sut, mockedStorageAdapter } = makeSut();

      await sut.get("key");

      expect(mockedStorageAdapter.getItem).toHaveBeenCalledWith(
        `${prefix}/key`
      );
    });

    test("Espera-se que não retorne erro caso não haja um value", async () => {
      const { sut, mockedStorageAdapter } = makeSut();

      mockedStorageAdapter.getItem.mockClear().mockRejectedValueOnce(null);

      const result = sut.get("any");

      const expected_result =
        mockedStorageAdapter.getItem.mock.results[0].value;

      expect(result).resolves.toEqual(expected_result);
    });
  });

  describe("set", () => {
    test("Espera-se que seja chamado o adapter com o parâmetro correto", async () => {
      const value = { value: "test" };

      const { prefix, sut, mockedStorageAdapter, expected_object } = makeSut(
        value
      );

      await sut.set("key", value);

      expect(mockedStorageAdapter.setItem).toHaveBeenCalledWith(
        `${prefix}/key`,
        expected_object
      );
    });

    test("Espera-se que remove o item caso o value seja UNDEFINED|NULL", async () => {
      const { prefix, sut, mockedStorageAdapter } = makeSut();

      await sut.set("key", undefined);

      expect(mockedStorageAdapter.removeItem).toHaveBeenCalledWith(
        `${prefix}/key`
      );
    });
  });
});
