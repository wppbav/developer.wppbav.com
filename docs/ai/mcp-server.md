# BAV MCP Server

Your AI models and agents can use the official BAV MCP server to access BAV data in both a simple and secure way. It
uses the latest MCP (Model Control Protocol) standard to provide a set of tools that your agents can call to retrieve
data from BAV.

An MCP server is a convenient way to connect your AI models and agents to external data sources, such as BAV. The server
offers a set of tools that agents can trigger to get the data they need to then process and use in their tasks.

We're excited to see how you and your agents use BAV data to power your workflows. If you have questions, feedback, or
requests for new MCP tools, please let us know.

:::warning Authorized Agent Environments
Please note that you may only connect to the BAV MCP server from authorized agent environments that have been
vetted by WPP legal. This is to ensure the data security and compliance around our proprietary data. If you are
not sure whether your environment is authorized, please reach out.
:::

## Connecting to the server

Our remote MCP server supports both SSE (Server-Sent Events) and Streamable HTTP. To connect to the BAV MCP server, you
need to use the following URL:

```
https://mcp.wppbav.com/sse
```

You also need to provide an API key as a Bearer token in the `Authorization` header of your requests. You can
obtain an API key through the API keys section of the BAV platform.

**Note:** When creating your API key please make sure to select all the scopes under "Tools".

## Available Tools

The BAV MCP server provides the following tools:

- `get_pillar_data`
- `get_powergrid_data`
- `get_imagery_data`
- `get_personality_data`
- `get_usage_data`
- `get_preferences_data`
- `get_recommendation_data`

Each tool accepts a set of parameters that your agent will try to extract from the user input. This includes:

- Brands
- Countries (with a note to prefer using ISO 3166-1 alpha-2 codes)
- Years
- Audiences

Behind the scenes the BAV systems will automatically handle fallbacks should a parameter not be provided. However, the
user must always provide *either* a brand, a country or a year. Otherwise, the agent will receive an error back.

:::note Unstable Responses
As the MCP server is still in development the format of the responses is subject to change. We will not be
reaching out to notify you of these changes until the server is stable.
:::

## Recommended Models

We highly recommend using a reasoning model that not only can handle the tool calling effectively, but can also
reason about the data returned by the tools. The following reasoning models have been tested and are known to work well:

- Anthropic's Claude 4
- Anthropic's Claude 3.7 Sonnet Thinking
- Google's Gemini 2.5 Pro

Reasoning models are able to better understand the user requests, extract the necessary parameters, and
interpret the data returned by the tools. This leads to more accurate and relevant responses. They are also
able to better determine multiple tools that need to be called in sequence to answer a user request.