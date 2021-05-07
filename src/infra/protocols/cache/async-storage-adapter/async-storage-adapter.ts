import { GetStorage, SetStorage } from "@/data/protocols/cache";
import AsyncStorage from "@react-native-async-storage/async-storage";

export class AsyncStorageAdapter implements GetStorage, SetStorage {
  private key_preffix = "@AwesomeMusic";

  async get<R>(key: string): Promise<R | null> {
    const value = await AsyncStorage.getItem(`${this.key_preffix}/${key}`);

    if (!value) return null;

    return JSON.parse(value || "");
  }

  async set<ValueType>(key: string, value: ValueType | null): Promise<void> {
    if (value) {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(`${this.key_preffix}/${key}`, jsonValue);
    } else {
      await AsyncStorage.removeItem(`${this.key_preffix}/${key}`);
    }
  }
}
