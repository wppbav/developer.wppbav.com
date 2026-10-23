---
slug: application-access
title: Applications can now call the API as themselves
authors: erikbernskiold
---

Applications can now call the API as themselves, using their own API keys or OAuth client credentials. Trusted
applications can also act on behalf of users. This replaces service accounts.

<!-- truncate -->

- **Application API keys** are managed on the application's page by its owners, admins and developers. The scopes on
  offer follow the application's own permissions.
- **Client credentials** tokens now work for calling the API as the application.
- **Acting on behalf of users** uses the `X-Act-As-User` header. It needs a trusted application approved by an
  administrator, and a token with the `act-as-user` scope.
- **IP allow-lists** let an application limit the addresses it may call the API from.

Existing service accounts have been moved over to applications, and their tokens keep working with the same access.

See [Authentication](/docs/2.x/authentication) and
[MCP Access & Authorization](/docs/2.x/ai/mcp/access-authorization) for details.
