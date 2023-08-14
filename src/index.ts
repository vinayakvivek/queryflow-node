import {
  IQueryflowClient,
  QueryResponse,
  QueryflowClientOptions,
} from "./types";

export class QueryflowClient implements IQueryflowClient {
  baseUrl: string;
  apiKey: string;

  constructor(options: QueryflowClientOptions) {
    this.baseUrl = options.baseUrl || "https://api.queryflow.com/v1";
    this.apiKey = options.apiKey;
  }

  async query(queryText: string): Promise<QueryResponse> {
    return { text: "mock" };
  }
}
