import React, { ReactNode } from "react";
import { PlayerControlsProvider } from "@/presentation/contexts";
import { makeRemoteGetCurrentlyPlaying } from "../usecases/remote-get-currently-playing-track";

interface PlayerProviderFactoryProps {
  children?: ReactNode;
}

export const PlayerProviderFactory = ({
  children,
}: PlayerProviderFactoryProps) => {
  const remoteGetCurrentlyPlaying = makeRemoteGetCurrentlyPlaying();

  return (
    <PlayerControlsProvider {...{ remoteGetCurrentlyPlaying }}>
      {children}
    </PlayerControlsProvider>
  );
};
