import React, { ReactNode } from "react";
import { View } from "react-native";
import { PlayerProviderFactory } from "./player-context";
import { RefRequestContextFactory } from "./ref-request-context";

interface GlobalContextFactoryProviderProps {
  children?: ReactNode;
}

export const GlobalContextFactoryProvider = ({
  children,
}: GlobalContextFactoryProviderProps) => {
  return (
    <PlayerProviderFactory>
      <RefRequestContextFactory>{children}</RefRequestContextFactory>
    </PlayerProviderFactory>
  );
};
