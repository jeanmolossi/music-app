import { RefRequestProvider } from "@/presentation/contexts/ref_request/useRefRequest";
import React, { ReactNode } from "react";
import { View } from "react-native";
import { makeSpotifyAuthorizedHttpClient } from "../http";

interface RefRequestContextFactoryProps {
  children?: ReactNode;
}

export const RefRequestContextFactory = ({
  children,
}: RefRequestContextFactoryProps) => {
  const httpClient = makeSpotifyAuthorizedHttpClient();
  return (
    <RefRequestProvider httpClient={httpClient}>{children}</RefRequestProvider>
  );
};
