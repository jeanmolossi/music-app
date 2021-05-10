import faker from "faker";
import { HttpClient } from "@/data/protocols/http/http-client";

export const mockHttpRequest = (): HttpClient.Params<any> => ({
  url: faker.internet.url(),
  method: faker.random.arrayElement(["GET", "POST", "PUT", "DELETE"]),
  body: faker.random.objectElement(),
  headers: faker.random.objectElement(),
});

export type SpyMockType<T> = T extends { statusCode: number }
  ? { statusCode: number }
  : T;

export class HttpClientSpy<T, R = SpyMockType<T>> implements HttpClient<R> {
  url?: string;

  method?: HttpClient.Method;

  body?: any;

  header?: any;

  response: R = {} as R;

  async request<BodyType = any>(
    params: HttpClient.Params<BodyType, any>
  ): Promise<R> {
    this.url = params.url;
    this.method = params.method;
    this.header = params.headers || { Authorization: "token" };
    this.body = params.body;

    return this.response;
  }
}
