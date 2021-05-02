export interface SetStorage {
  set<ValueType>(key: string, value: ValueType | null): Promise<void>;
}
