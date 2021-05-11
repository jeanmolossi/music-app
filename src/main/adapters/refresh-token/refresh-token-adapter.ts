import { makeAsyncStorageAdapter } from "@/main/factories/cache";

export const getRefreshTokenAdapter = () =>
  makeAsyncStorageAdapter().get<string>("refresh_token");
