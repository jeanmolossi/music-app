import { HttpClient } from "@/data/protocols/http/http-client";
import { CurrentUserProfile } from "@/domain/models";
import { LoadUserInfo } from "@/domain/usecases";

export class RemoteLoadUserInfo implements LoadUserInfo {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<LoadUserInfo.Model>
  ) {}

  async load(): Promise<CurrentUserProfile> {
    const httpResponse = await this.httpClient.request({
      method: "GET",
      url: this.url,
    });

    return httpResponse;
  }
}
