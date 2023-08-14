import { QueryflowClient } from "queryflow-ai";

const client = new QueryflowClient({
  apiKey: "YOUR_API_KEY",
});

const runQuery = async () => {
  try {
    const response = await client.query("mock query");
    console.log(response);
  } catch (err) {
    console.error(err.message);
  }
};

runQuery();
