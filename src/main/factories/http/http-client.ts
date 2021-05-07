import { AxiosHttpClient } from "@/infra/protocols/http/axios-http-client";

export const makeHttpClient = <T>() => new AxiosHttpClient<T>();
