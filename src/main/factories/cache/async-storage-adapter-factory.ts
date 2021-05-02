import { AsyncStorageAdapter } from "@/infra/protocols/cache";

export const makeAsyncStorageAdapter = () => new AsyncStorageAdapter();
