import { HttpClient } from "@/data/protocols/http/http-client";
import { LoadUserInfo } from "@/domain/usecases";

export class RemoteLoadUserInfo implements LoadUserInfo {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<LoadUserInfo.Model>
  ) {}

  async load(): Promise<LoadUserInfo.Model> {
    const httpResponse = await this.httpClient.request({
      method: "GET",
      url: this.url,
    });

    return httpResponse;
  }
}
