export interface HttpClient<T = unknown> {
  request<BodyType extends URLSearchParams>(
    params: HttpClient.Params<BodyType>
  ): Promise<HttpClient.HttpResponse<T>>;
}

export namespace HttpClient {
  export type Method = "GET" | "POST" | "DELETE" | "PUT";

  export interface Params<BodyType, HeadersType = any> {
    method: Method;
    url: string;
    body?: BodyType;
    headers?: HeadersType;
  }

  export type HttpResponse<ResponseModel> = ResponseModel;
}
