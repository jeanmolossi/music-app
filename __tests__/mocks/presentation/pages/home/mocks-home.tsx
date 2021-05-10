import React from "react";
import { render } from "@testing-library/react-native";
import { renderHook } from "@testing-library/react-hooks/native";
import { Home } from "@/presentation/pages/home";
import { GlobalContextFactoryProvider } from "@/main/factories/contexts";
import { HomeProps } from "@/presentation/pages/home/types";
import { useHomeHelpers } from "@/presentation/pages/home/helpers";
import { makeBrowseFeaturedPlaylistsSut } from "__tests__/mocks/data/usecase/browse/featured-playlists/mock-featured-playlists";
import {
  makeLoadUserInfoSut,
  makeRemoteGetMyPlaylistsSut,
  makeRemoteGetRecentlyPlayedSut,
} from "__tests__/mocks";

export const makeHomeSut = () => {
  const mockSetSpotifyAuthCode = jest.fn(async (auth: string) => {});

  const {
    sut: remoteBrowseFeaturedPlaylists,
  } = makeBrowseFeaturedPlaylistsSut();

  const { sut: remoteLoadCurrentUserInfo } = makeLoadUserInfoSut();

  const { sut: remoteRecentlyPlayed } = makeRemoteGetRecentlyPlayedSut();

  const { sut: remoteGetMyPlaylists } = makeRemoteGetMyPlaylistsSut();

  const props: HomeProps = {
    setSpotifyAuthorizationCode: mockSetSpotifyAuthCode,
    remoteBrowseFeaturedPlaylists,
    remoteGetMyPlaylists,
    remoteLoadCurrentUserInfo,
    remoteRecentlyPlayed,
  };

  const home_render = render(<Home {...props} />, {
    wrapper: GlobalContextFactoryProvider,
  });

  const useHomeHookSut = renderHook(() => useHomeHelpers(props), {
    wrapper: GlobalContextFactoryProvider,
  });

  return {
    props,
    home_render,
    useHomeHookSut,
  };
};
