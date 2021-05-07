import axios from "axios";
import { HttpClient } from "@/data/protocols/http/http-client";

export class AxiosHttpClient<T = unknown> implements HttpClient<T> {
  async request<BodyType = any>({
    method,
    body,
    url,
    headers,
  }: HttpClient.Params<BodyType>): Promise<HttpClient.HttpResponse<T>> {
    let axiosResponse: T;

    try {
      const httpResponse = await axios.request<T>({
        method,
        url,
        data: body,
        headers,
      });

      axiosResponse = httpResponse.data;
    } catch (error) {
      axiosResponse = error.response;
    }

    return axiosResponse;
  }
}
