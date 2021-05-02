import { HttpClient } from "@/domain/protocols/http/http-client";
import axios from "axios";

export class AxiosHttpClient<T> implements HttpClient<T> {
  constructor(private readonly url: string) {}

  async request<BodyType extends URLSearchParams>({
    method,
    body,
  }: HttpClient.Params<BodyType>): Promise<HttpClient.HttpResponse<T>> {
    let axiosResponse: T;

    try {
      const httpResponse = await axios.request<T>({
        method,
        url: this.url,
        data: new URLSearchParams(body).toString(),
      });

      axiosResponse = httpResponse.data;
    } catch (error) {
      axiosResponse = error.response;
    }

    return axiosResponse;
  }
}
