export interface HttpClient<T = unknown> {
  request<BodyType extends URLSearchParams>(
    params: HttpClient.Params<BodyType>
  ): Promise<HttpClient.HttpResponse<T>>;
}

export namespace HttpClient {
  export type Method = "GET" | "POST" | "DELETE" | "PUT";

  export interface Params<BodyType> {
    method: Method;
    url: string;
    body: BodyType;
  }

  export type HttpResponse<ResponseModel> = ResponseModel;
}
