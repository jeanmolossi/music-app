import axios from "axios";
import { HttpClient } from "@/data/protocols/http/http-client";

export class AxiosHttpClient<T = unknown> implements HttpClient<T> {
  async request<BodyType extends URLSearchParams>({
    method,
    body,
    url,
  }: HttpClient.Params<BodyType>): Promise<HttpClient.HttpResponse<T>> {
    let axiosResponse: T;

    try {
      const httpResponse = await axios.request<T>({
        method,
        url,
        data: new URLSearchParams(body).toString(),
      });

      axiosResponse = httpResponse.data;
    } catch (error) {
      axiosResponse = error.response;
    }

    return axiosResponse;
  }
}
