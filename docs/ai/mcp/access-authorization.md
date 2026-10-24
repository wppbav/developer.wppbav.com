---
sidebar_label: Access & Authorization
---

# Access and Authorization

## Access (as a user)

Everyone with a WPP Okta account has access to the MCP servers. When you connect to it you will be asked to sign in and
authorize your AI application to access the data on your behalf.

:::warning Authorized Agent Environments
Please note that you may only connect to the BAV MCP server from authorized agent environments that have been
vetted by WPP legal. This is to ensure the data security and compliance around our proprietary data. If you are
not sure whether your environment is authorized, please reach out.
:::

### Tools depend on your permissions

The tools on each server are permission-gated per user. When your AI application lists the tools on a server, it only
sees the tools that you have access to. This means that two users connecting to the same server may see different tool
lists. For example, the [Market Share server](./market-share.md) requires access to Euromonitor data, and the city tools
on the [Best Countries server](./best-countries.md) require access to Best Countries city data.

If you are missing a tool you expected to see, please [get in touch with us](mailto:bavsupport@wpp.com).

## Authorization (for developers)

These instructions cover how authorization works and is geared towards a developer integrating an AI model or agent with
our MCP servers.

### OAuth

All our MCP servers work with OAuth 2.0 using the
standard [MCP authorization flow](https://modelcontextprotocol.io/docs/tutorials/security/authorization). Most MCP
clients handle this flow for you automatically, so you only need to provide the server URL.

We highly recommend OAuth as the authorization mechanism as it allows you to act as the user and access data on their
behalf.

The servers support the discovery and registration mechanisms in the MCP specification:

- **Protected resource metadata:** An unauthenticated request returns a `401` with a `WWW-Authenticate` header that
  points to the protected resource metadata at `/.well-known/oauth-protected-resource`.
- **Authorization server metadata:** The authorization, token and registration endpoints are published at
  `/.well-known/oauth-authorization-server`.
- **Dynamic client registration:** Clients can register themselves using the registration endpoint, so you do not need
  to create an OAuth client up front.

MCP clients use the authorization code grant with PKCE (`S256`), and refresh tokens are supported. Dynamic client
registration is only available to MCP clients. OAuth clients that you create for an application in The Fount are
confidential clients with a client secret, see [OAuth 2](../../authentication.md#oauth-2).

### Personal Access Tokens

You may also use personal access tokens, but please note that they are tied to a specific user and do not allow
your application to act on behalf of other users. Personal access tokens can be created from
the [API section in The Fount](https://fount.wppbav.com/api).

If you are using a personal access token, just pass it as a Bearer token in the Authorization header when making
requests to the MCP server:

```
Authorization: Bearer YOUR_API_KEY
```

### Applications

If you are building an application, you can create one yourself under **Applications** in the
[API section in The Fount](https://fount.wppbav.com/api). Applications can authenticate in a few different ways:

- **OAuth on behalf of a user:** Users authorize your application through the OAuth flow, and your application acts on
  their behalf with their permissions.
- **Application API keys:** An API key belonging to the application itself. Requests are made as the application, with
  the access that has been set up for it.
- **Client credentials:** A token requested with the OAuth client credentials grant. It works like an application API
  key, is limited to the client's scopes and lasts one hour.

Applications that we have marked as trusted and approved to act on behalf of users can pass the e-mail address of a
user in the `X-Act-As-User` header, together with an application API key or a client credentials token. The token must
explicitly include the `act-as-user` scope. The request is then made as that user, with their permissions. The legacy
`X-User-Email` header is still accepted, but we recommend moving to `X-Act-As-User`.

```
Authorization: Bearer YOUR_APPLICATION_TOKEN
X-Act-As-User: jane.doe@wpp.com
```

:::note
Tokens issued to a user, whether through OAuth or as a personal access token, can't act as another user.
:::

Applications can use two separate IP lists:

- **Allowed API IP addresses** restrict where API and MCP calls can come from. When set, every request the application
  makes, whether as itself or on behalf of a user, must come from one of those addresses. This also applies when
  requesting a token with the client credentials grant.
- **Trusted IP addresses** are used for trusted internal applications to skip the consent screen. Consent is only
  skipped when the user's browser is on one of these addresses. We recommend this for internal tools as it gives a
  smoother experience. Please reach out if you would like your application to be trusted.

See the [authentication documentation](../../authentication.md) for more information on applications and tokens.
