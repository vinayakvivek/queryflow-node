export interface QueryResponse {
  text: string;
}

export interface QueryflowClientOptions {
  baseUrl?: string;
  apiKey: string;
}

export interface IQueryflowClient {
  baseUrl: string;
  apiKey: string;
  query: (queryText: string) => Promise<QueryResponse>;
}
