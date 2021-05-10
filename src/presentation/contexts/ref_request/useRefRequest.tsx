import React, { createContext, useCallback, useContext } from "react";
import { RefRequestContextData, RefRequestProviderProps } from "./types";

const RefRequestContext = createContext({} as RefRequestContextData);

export const RefRequestProvider = ({
  children,
  httpClient,
}: RefRequestProviderProps) => {
  const makeRequest = useCallback(async (ref_url: string) => {
    return httpClient.request({
      method: "GET",
      url: ref_url,
    });
  }, []);

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
