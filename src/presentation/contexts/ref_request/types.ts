import { HttpClient } from "@/data/protocols/http/http-client";
import { ReactNode } from "react";

export interface RefRequestProviderProps {
  children?: ReactNode;

  httpClient: HttpClient;
}

export interface RefRequestContextData {
  makeRequest: (ref_url: string) => Promise<any>;
}
