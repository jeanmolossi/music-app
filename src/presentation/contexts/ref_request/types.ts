import { HttpClient } from "@/data/protocols/http/http-client";
import { ReactNode } from "react";

export interface RefRequestProviderProps {
  children?: ReactNode;

  httpClient: HttpClient;
}

export interface RefRequestContextData {
  makeRequest: <T = any>(ref_url: string) => Promise<T>;
}
