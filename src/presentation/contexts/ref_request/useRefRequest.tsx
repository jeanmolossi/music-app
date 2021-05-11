import React, { createContext, useCallback, useContext } from "react";
import { RefRequestContextData, RefRequestProviderProps } from "./types";

const RefRequestContext = createContext({} as RefRequestContextData);

type MakeRequestCallback<T = any> = (ref_url: string) => Promise<T>;

export const RefRequestProvider = ({
  children,
  httpClient,
}: RefRequestProviderProps) => {
  const makeRequest = useCallback<MakeRequestCallback>(
    async (ref_url: string) => {
      return httpClient.request({
        method: "GET",
        url: ref_url,
      });
    },
    []
  );

  return (
    <RefRequestContext.Provider value={{ makeRequest }}>
      {children}
    </RefRequestContext.Provider>
  );
};

export function useRefRequest() {
  const context = useContext(RefRequestContext);
  return context;
}
