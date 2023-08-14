# QueryflowAI Node SDK

This library provides convenient access to the QueryflowAI API from your node applications.

## Installation

```bash
npm install queryflow-ai
```

## Usage

```javascript
import { QueryflowClient } from "queryflow-ai";

const client = new QueryflowClient({
  apiKey: "<YOUR_API_KEY>",
});

const response = await client.query("<SEARCH_QUERY>");
console.log(response);
```
