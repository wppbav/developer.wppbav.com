---
sidebar_label: Access & Authorization
---

# Access and Authorization

## Access (as a user)

All users with a WPP Okta account have access to the MCP servers. When you connect to a server, you must sign in. You
must then authorize your AI application to get the data on your behalf.

:::warning Authorized Agent Environments
Connect to the BAV MCP server only from authorized agent environments that WPP legal approved. This makes sure of the
data security and compliance of our proprietary data. If you are not sure that your environment is authorized, contact
us.
:::

### Tools depend on your permissions

Each server controls access to its tools with the permissions of each user. When your AI application lists the tools
on a server, it sees only the tools that you have access to. Thus, two users who connect to the same server can see
different tool lists. For example, the [Market Share server](./market-share.md) requires access to Euromonitor data. The
city tools on the [Best Countries server](./best-countries.md) require access to Best Countries city data.

If you do not see a tool that you expected, [contact us](mailto:bavsupport@wpp.com).

## Authorization (for developers)

These instructions explain how authorization works. They are for developers who connect an AI model or agent to our
MCP servers.

### OAuth

All our MCP servers work with OAuth 2.0 and the
standard [MCP authorization flow](https://modelcontextprotocol.io/docs/tutorials/security/authorization). Most MCP
clients do this flow for you automatically. Thus, you only need to give the server URL.

We strongly recommend OAuth as the authorization mechanism. With OAuth, you can act as the user and get data on their
behalf.

The servers support the discovery and registration mechanisms in the MCP specification:

- **Protected resource metadata:** An unauthenticated request returns a `401` with a `WWW-Authenticate` header. This
  header points to the protected resource metadata at `/.well-known/oauth-protected-resource`.
- **Authorization server metadata:** The authorization, token and registration endpoints are available at
  `/.well-known/oauth-authorization-server`.
- **Dynamic client registration:** Clients can register themselves with the registration endpoint. Thus, you do not
  need to create an OAuth client before you start.

MCP clients use the authorization code grant with PKCE (`S256`). The servers support refresh tokens. Dynamic client
registration is available only to MCP clients. The OAuth clients that you create for an application in The Fount are
confidential clients with a client secret. Refer to [OAuth 2](../../authentication.md#oauth-2).

### Personal Access Tokens

You can also use personal access tokens. But a personal access token is tied to one specific user. Your application
cannot use it to act on behalf of other users. You can create personal access tokens in
the [API section in The Fount](https://fount.wppbav.com/api).

If you use a personal access token, send it as a Bearer token in the Authorization header of your requests to the MCP
server:

```
Authorization: Bearer YOUR_API_KEY
```

### Applications

If you build an application, you can create it yourself under **Applications** in the
[API section in The Fount](https://fount.wppbav.com/api). Applications can authenticate in some different ways:

- **OAuth on behalf of a user:** Users authorize your application through the OAuth flow. Your application then acts on
  their behalf with their permissions.
- **Application API keys:** An API key that belongs to the application. The application sends requests as itself, with
  the access that we set up for it.
- **Client credentials:** A token that you request with the OAuth client credentials grant. It works like an
  application API key. It is limited to the scopes of the client and is valid for one hour.

Some applications have our trusted mark and our approval to act on behalf of users. These applications can send the
e-mail address of a user in the `X-Act-As-User` header, with an application API key or a client credentials token. The
token must explicitly include the `act-as-user` scope. The request then occurs as that user, with the permissions of
that user.

```
Authorization: Bearer YOUR_APPLICATION_TOKEN
X-Act-As-User: jane.doe@wpp.com
```

:::note
A token that belongs to a user cannot act as another user. This applies to OAuth tokens and personal access tokens.
:::

Applications can use two separate IP lists:

- **Allowed API IP addresses** limit the locations that API and MCP calls can come from. If you set this list, all
  requests from the application must come from one of those addresses. This applies to requests that the application
  sends as itself and on behalf of a user. It also applies when the application requests a token with the client
  credentials grant.
- **Trusted IP addresses** let trusted internal applications skip the consent screen. The consent screen is skipped
  only when the browser of the user is on one of these addresses. We recommend this for internal tools because it gives
  a better user experience. If you want us to make your application trusted, contact us.

For more information about applications and tokens, refer to the
[authentication documentation](../../authentication.md).
