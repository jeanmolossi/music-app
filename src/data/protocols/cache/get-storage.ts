export interface GetStorage {
  get<R>(key: string): Promise<R>;
}
