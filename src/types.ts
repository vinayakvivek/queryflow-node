export interface QueryResponse {
  text: string;
}

export interface QueryRequest {
  text: string;
}

export interface QueryflowClientOptions {
  baseUrl?: string;
  apiKey: string;
}
