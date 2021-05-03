import { PlayerControlsProvider } from "@/presentation/contexts";
import React, { ReactNode } from "react";

interface PlayerProviderFactoryProps {
  children?: ReactNode;
}

export const PlayerProviderFactory = ({
  children,
}: PlayerProviderFactoryProps) => {
  return <PlayerControlsProvider>{children}</PlayerControlsProvider>;
};
