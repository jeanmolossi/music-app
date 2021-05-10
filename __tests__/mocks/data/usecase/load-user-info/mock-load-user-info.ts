import faker from "faker";
import { RemoteLoadUserInfo } from "@/data/usecases";
import { LoadUserInfo } from "@/domain/usecases";
import { HttpClientSpy } from "__tests__/mocks";

export const makeLoadUserInfoSut = (url = faker.internet.url()) => {
  const httpClientSpy = new HttpClientSpy<LoadUserInfo.Model>();
  const sut = new RemoteLoadUserInfo(url, httpClientSpy);

  return {
    sut,
    httpClientSpy,
  };
};
