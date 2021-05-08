import faker from "faker";
import { HttpClient } from "@/data/protocols/http/http-client";

export const mockHttpRequest = (): HttpClient.Params<any> => ({
  url: faker.internet.url(),
  method: faker.random.arrayElement(["GET", "POST", "PUT", "DELETE"]),
  body: faker.random.objectElement(),
  headers: faker.random.objectElement(),
});

export class HttpClientSpy<T = unknown> implements HttpClient<T> {
  url?: string;

  method?: HttpClient.Method;

  body?: any;

  header?: any;

  response = {
    message: "ok",
  };

  async request<BodyType = any>(
    params: HttpClient.Params<BodyType, any>
  ): Promise<T> {
    this.url = params.url;
    this.method = params.method;
    this.header = params.headers;
    this.body = params.body;
    return (this.response as unknown) as T;
  }
}
