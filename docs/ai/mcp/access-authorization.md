---
sidebar_label: Access & Authorization
---

# Access and Authorization

## Access (as a user)

Everyone with a WPP Okta account has access to the MCP servers. When you connect to it you will be asked to authorize
your AI application to access the data on your behalf.

:::warning Authorized Agent Environments
Please note that you may only connect to the BAV MCP server from authorized agent environments that have been
vetted by WPP legal. This is to ensure the data security and compliance around our proprietary data. If you are
not sure whether your environment is authorized, please reach out.
:::

## Authorization (for developers)

These instructions cover how authorization works and is geared towards a developer integrating an AI model or agent with
our MCP servers.

All our MCP servers work with OAuth 2.0 using the
standard [MCP authorization flow](https://modelcontextprotocol.io/docs/tutorials/security/authorization).

We highly recommend OAuth as the authorization mechanism as it allows you to act as the user and access data on their
behalf.

You may also use personal API keys as well, but please note that API keys are tied to a specific user and do not allow
your application to act on behalf of other users.

If you are using an API key, just pass it as a Bearer token in the Authorization header when making requests to the MCP
server:

```Authorization: Bearer YOUR_API_KEY```

For internal applications it is possible to use skip the consent screen by having your application specifically
allow-listed. We recommend this approach for internal tools as it provides a smoother user experience. Please reach out
if you would like to have your application allow-listed.