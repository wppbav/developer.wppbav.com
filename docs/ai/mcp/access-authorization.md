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

The authorization code grant is used with PKCE (`S256`), and refresh tokens are supported.

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

If you are building an application for the group, we can set you up with an application. Applications can
authenticate in a few different ways:

- **OAuth on behalf of a user:** Users authorize your application through the OAuth flow, and your application acts on
  their behalf with their permissions.
- **Application tokens:** An access token belonging to the application itself. Requests are made as the application.
- **Client credentials:** Applications approved for it can request a token using the OAuth client credentials grant.
  This works like an application token.

Applications that have been approved to act on behalf of users can pass the e-mail address of the user in the
`X-Act-As-User` header together with an application token or a client credentials token. The token must explicitly
include the `act-as-user` scope. The request is then made as that user, with their permissions. The legacy
`X-User-Email` header is still accepted but we recommend moving to `X-Act-As-User`.

```
Authorization: Bearer YOUR_APPLICATION_TOKEN
X-Act-As-User: jane.doe@wpp.com
```

:::note
Tokens issued to a user through OAuth cannot act as another user. The `X-Act-As-User` header is only accepted with
application tokens.
:::

Applications can be restricted to only accept requests from a set of allow-listed IP addresses. When an application
has an IP allow-list, every request it makes, whether for itself or on behalf of a user, must come from one of those
addresses. This also applies when requesting a token with the client credentials grant.

For internal applications it is possible to skip the consent screen by having your application specifically
allow-listed as a trusted application. Consent is only skipped when the request comes from one of the application's
allow-listed IP addresses. We recommend this approach for internal tools as it provides a smoother user experience.
Please reach out if you would like to have your application set up.

See the [authentication documentation](../../authentication.md) for more information on applications and tokens.
