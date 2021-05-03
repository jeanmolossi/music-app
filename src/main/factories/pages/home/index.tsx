import React from "react";
import { Home } from "@/presentation/pages";
import { makeRemoteLoadCurrentUserInfo } from "@/main/factories/usecases";

interface HomePageFactoryProps {}

export const HomePageFactory = ({}: HomePageFactoryProps) => {
  const remoteLoadCurrentUserInfo = makeRemoteLoadCurrentUserInfo();

  return <Home {...{ remoteLoadCurrentUserInfo }} />;
};
