import axios from "axios";
import { QueryRequest, QueryResponse, QueryflowClientOptions } from "./types";

export class QueryflowClient {
  private baseUrl: string;
  private apiKey: string;

  constructor(options: QueryflowClientOptions) {
    this.baseUrl = options.baseUrl || "https://api.queryflow.com/v1";
    this.apiKey = options.apiKey;
  }

  async query(queryText: string): Promise<QueryResponse> {
    return this.execute<QueryRequest, QueryResponse>("query", {
      text: queryText,
    });
  }

  private async execute<T, R>(endpoint: string, data: T) {
    try {
      const headers = {
        "Content-Type": "application/json",
        "x-api-key": this.apiKey,
      };
      const response = await axios.post<R>(
        `${this.baseUrl}/${endpoint}`,
        data,
        { headers }
      );
      return response.data;
    } catch (err) {
      throw new Error("Error in QueryflowClient: " + err.message);
    }
  }
}
