# Authentication

Every API request, except the [health check](health-check.md), needs an access token. Send the token in the
`Authorization` header with the `Bearer` scheme:

```bash
curl https://fount.wppbav.com/api/v2/brands \
  -H "Accept: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN"
```

There are several methods to get a token. The correct method depends on the account that you want to make the request
as.

:::caution
Do not share your API keys, client secrets or access tokens with anyone. Treat all of them as sensitive data. Make sure
that they are not visible in code that you share publicly. Do not commit them to a repository or expose them in other
ways.
:::

## Choosing a method

| Method                                                    | The request is made as                         | How you get it                                                         | Typical use                                                                 |
|-----------------------------------------------------------|------------------------------------------------|------------------------------------------------------------------------|-----------------------------------------------------------------------------|
| [Personal access token](#personal-access-tokens)          | You                                            | Create it in the [API section in The Fount](https://fount.wppbav.com/api) | Scripts, notebooks and data pipelines that you run yourself.               |
| [Application API key](#application-api-keys)              | The application                                | Create it on the application's page                                    | Back-end integrations that use the application's own access.               |
| [OAuth client credentials](#client-credentials-flow)      | The application                                | Exchange a client ID and secret for a short-lived token                | Machine-to-machine integrations that prefer OAuth to a long-lived key.     |
| [OAuth authorization code](#authorization-code-flow)      | A user who has authorized your application     | The user signs in and approves your application                        | Applications where people sign in and see the data they have access to.   |
| [Acting on behalf of users](#acting-on-behalf-of-users)   | Any user, named in the `X-Act-As-User` header  | An application key or client credentials token, approved by us         | Trusted internal platforms that have already signed the user in.           |

Personal access tokens are the easiest method to start with. If you build something that other people will use, create
an [application](#applications) instead.

:::tip We recommend OAuth
If possible, use [OAuth 2](#oauth-2) instead of a long-lived personal access token or application API key. With OAuth,
users approve what your application can do. They can revoke that access at any time. Each request has the permissions
of the person who uses your application. Use the [authorization code flow](#authorization-code-flow) when people sign
in to your application. Use the [client credentials flow](#client-credentials-flow) for machine-to-machine
integrations.
:::

For all methods, the request has the permissions and data access of the account that it is made as. The token must
also have the [scope](#scopes) that the endpoint requires.

## Personal access tokens

A personal access token lets you call the API as yourself. You do not need to build an OAuth flow. Through the API, you
can see all the data that you can see in The Fount.

Create and manage your tokens under **Personal API Keys** in the
[API section in The Fount](https://fount.wppbav.com/api). When you create a key, you:

- **Give it a name** so you can recognize it later.
- **Choose an expiration** of 7, 30, 60 or 90 days. We strongly recommend that your keys expire.
- **Choose its scopes.** You can only pick the scopes for datasets that you have access to. See [scopes](#scopes).

The Fount shows the key only one time, immediately after you create it. Keep the key in a safe location.

From the list of keys, you can:

- **Regenerate** a key. This replaces the key with a new key that has the same name, scopes and expiry date. The old
  key becomes invalid immediately.
- **Revoke** a key. This deletes the key, and the key becomes invalid immediately.

We send you an e-mail seven days before one of your keys expires. We send another e-mail on the day that it expires.

```bash
curl https://fount.wppbav.com/api/v2/brands \
  -H "Accept: application/json" \
  -H "Authorization: Bearer 1|AbCdEfGhIjKlMnOpQrStUvWxYz0123456789"
```

## Applications

An application represents an integration, for example an internal tool, a data platform or an AI agent. Create the
application under **Applications** in the [API section in The Fount](https://fount.wppbav.com/api). When you have an
application, it can:

- call the API as itself, with [API keys](#application-api-keys) or the [client credentials flow](#client-credentials-flow);
- let users sign in and authorize it through the [authorization code flow](#authorization-code-flow), and then call the
  API on their behalf;
- [act on behalf of users](#acting-on-behalf-of-users) without a sign-in, after we approve it for this.

### Members and roles

The user who creates an application becomes its owner. Owners and admins can add other existing users to the
application by their e-mail address. They can give each of these users a role:

| Role      | Can                                                                                                       |
|-----------|-----------------------------------------------------------------------------------------------------------|
| Owner     | Everything, including deleting the application and giving or removing the Owner role.                    |
| Admin     | Edit the application's settings, manage its members, create and delete OAuth clients, and manage API keys. |
| Developer | Edit existing OAuth clients and manage the application's API keys.                                        |
| Viewer    | View the application's details.                                                                           |

An application always has at least one owner. Only an owner can give, change or remove the Owner role.

### Application access

When the application calls the API as itself, it has its own access to data. This access is separate from the access
of its members. A new application starts with only basic access. [Contact us](mailto:bavsupport@wpp.com) to get the
access that it needs.

### Application API keys

An application API key works like a personal access token, but the request is made as the application. Owners, admins
and developers manage the keys under **API Keys** on the application's page. They manage the keys in the same way as
[personal access tokens](#personal-access-tokens). The scopes that you can pick depend on the access of the
application, not on your access.

Expiry e-mails for the keys of an application go to its owners, admins and developers.

For machine-to-machine integrations, we recommend the [client credentials flow](#client-credentials-flow) instead of an
API key. The flow gives the same access as the application, but its tokens are valid for one hour. An API key is
long-lived.

```bash
curl https://fount.wppbav.com/api/v2/brands \
  -H "Accept: application/json" \
  -H "Authorization: Bearer 2|ZyXwVuTsRqPoNmLkJiHgFeDcBa9876543210"
```

:::note Service accounts
Applications replace service accounts. We converted every service account to an application. Tokens that were issued
to a service account continue to work with the same access. You now manage them as the API keys of the application.
:::

### OAuth clients

To use OAuth, an application needs a client. Owners and admins create clients under **Clients** on the application's
page. There are two kinds:

- **Authorization code clients** let users authorize your application. Give the client one or more **Redirect URLs**,
  one on each line. The Fount redirects users only to those URLs.
- **Client credentials clients** let the application request tokens for itself. Choose the scopes that the tokens of
  the client can have. This kind of client is available only after we enable the client credentials flow for your
  application.

When you create a client, you get a **Client ID** and a **Client Secret**. The Fount shows the secret only one time.
You can use **Rotate Secret** on a client at any time. The old secret then becomes invalid immediately. If you delete a
client, all the tokens that it issued are revoked.

Clients that you create in The Fount are confidential clients. They have a secret, and you must keep the secret on your
server.

### Restricting where API calls come from

You can limit the IP addresses that an application can call the API from. Use **Allowed API IP Addresses** when you
edit the application. Enter one IP address or CIDR range on each line, for example `203.0.113.10` or
`198.51.100.0/24`.

The allow-list applies to all the requests that the application makes:

- requests with its API keys;
- requests with client credentials tokens, and the token request itself;
- requests with OAuth tokens that users have issued to it;
- requests where it acts on behalf of users.

A request from a different address gets a `403` error. If the list is empty, the application can call the API from any
address.

## OAuth 2

The Fount is an OAuth 2 authorization server. Use these endpoints:

| Endpoint                                      | Method | Used for                                                                |
|-----------------------------------------------|--------|-------------------------------------------------------------------------|
| `https://fount.wppbav.com/oauth/authorize`    | `GET`  | To send the user to sign in and authorize your application.             |
| `https://fount.wppbav.com/oauth/token`        | `POST` | To get an access token, to refresh it, or to use client credentials.    |
| `https://fount.wppbav.com/oauth/userinfo`     | `GET`  | To get the profile of the user who authorized the token.                |

Request scopes as a space-separated list in the `scope` parameter, for example
`scope=bav:shared-resources bav:brand-data`. See [scopes](#scopes) for the available scopes. The authorization code
flow ignores the `*` scope.

### Authorization code flow

Use this flow if people sign in to your application with their WPP account. The flow lets you call the API as them. The
request then has their permissions and data access.

**1. Send the user to the authorization endpoint.**

```
https://fount.wppbav.com/oauth/authorize
  ?client_id=9f1c2e4a-1234-4b5c-8d6e-0123456789ab
  &redirect_uri=https://app.example.com/oauth/callback
  &response_type=code
  &scope=bav:shared-resources bav:brand-data profile
  &state=RANDOM_STATE
  &code_challenge=CODE_CHALLENGE
  &code_challenge_method=S256
```

The `redirect_uri` must exactly match one of the redirect URLs of the client. Use `state` to protect against cross-site
request forgery. Check `state` when the user returns.

PKCE (`code_challenge` and `code_challenge_method`) is optional for confidential clients, but we recommend it. Use the
`S256` method.

**2. The user signs in and approves your application.** The consent screen shows the scopes that you asked for. The
user can authorize or deny the request. The Fount does not ask the user again if they already authorized the same
scopes for your client and that token is still valid. To always show the consent screen, add `prompt=consent`.

**3. The Fount sends the user to your redirect URL** with a `code` and your `state`:

```
https://app.example.com/oauth/callback?code=def50200a1b2c3...&state=RANDOM_STATE
```

The code is valid for 10 minutes. You can use it only one time.

**4. Exchange the code for tokens** from your server:

```bash
curl -X POST https://fount.wppbav.com/oauth/token \
  -H "Accept: application/json" \
  -d grant_type=authorization_code \
  -d client_id=9f1c2e4a-1234-4b5c-8d6e-0123456789ab \
  -d client_secret=YOUR_CLIENT_SECRET \
  -d redirect_uri=https://app.example.com/oauth/callback \
  -d code=def50200a1b2c3... \
  -d code_verifier=CODE_VERIFIER
```

```json
{
  "token_type": "Bearer",
  "expires_in": 31536000,
  "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9...",
  "refresh_token": "def50200d4e5f6..."
}
```

**5. Call the API** with the access token:

```bash
curl https://fount.wppbav.com/api/v2/brands \
  -H "Accept: application/json" \
  -H "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9..."
```

#### Refreshing tokens

Access tokens and refresh tokens are each valid for one year. Use the refresh token to get a new access token before
the old one expires:

```bash
curl -X POST https://fount.wppbav.com/oauth/token \
  -H "Accept: application/json" \
  -d grant_type=refresh_token \
  -d client_id=9f1c2e4a-1234-4b5c-8d6e-0123456789ab \
  -d client_secret=YOUR_CLIENT_SECRET \
  -d refresh_token=def50200d4e5f6...
```

The response contains a new access token and a new refresh token. You cannot use the old refresh token again.

#### Getting the user's profile

With the `profile` scope, you can get the profile of the user who authorized the token from the `userinfo` endpoint.
This works only with tokens from the authorization code flow.

```bash
curl https://fount.wppbav.com/oauth/userinfo \
  -H "Accept: application/json" \
  -H "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9..."
```

```json
{
  "sub": "0b7e6a1c-5d3f-4e2a-9c8b-7a6f5e4d3c2b",
  "name": "Jane Doe",
  "given_name": "Jane",
  "family_name": "Doe",
  "email": "jane.doe@example.com",
  "email_verified": true,
  "locale": "en",
  "updated_at": 1761206400,
  "operating_company": {
    "id": 12,
    "name": "Example Agency"
  },
  "country": {
    "id": 45,
    "name": "United Kingdom",
    "code": "GB",
    "code_alpha3": "GBR",
    "code_numeric": "826",
    "region": "Europe"
  },
  "roles": [
    "User",
    "BAV User"
  ],
  "is_active": true
}
```

If `operating_company` or `country` is not set for the user, the response does not include it.

#### Trusted applications

For internal applications, we can mark the application as trusted and skip the consent screen. The consent screen is
skipped only if the authorization request comes from a trusted IP address. We set up these addresses for the
application, for example for your office or VPN network. From all other addresses, the user sees the consent screen as
usual.

These trusted IP addresses are separate from the [allowed API IP addresses](#restricting-where-api-calls-come-from).
[Contact us](mailto:bavsupport@wpp.com) if you want us to set up your application as trusted.

### Client credentials flow

Use this flow if the application calls the API as itself and you prefer OAuth to a long-lived
[API key](#application-api-keys). The request is made as the application, the same as with an API key. We must enable
the client credentials flow for your application. You also need a client credentials client.

```bash
curl -X POST https://fount.wppbav.com/oauth/token \
  -H "Accept: application/json" \
  -d grant_type=client_credentials \
  -d client_id=9f1c2e4a-5678-4b5c-8d6e-0123456789ab \
  -d client_secret=YOUR_CLIENT_SECRET \
  -d "scope=bav:shared-resources bav:brand-data"
```

```json
{
  "token_type": "Bearer",
  "expires_in": 3600,
  "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9..."
}
```

- The token is valid for **one hour**, and there is no refresh token. When the token expires, request a new token.
- The token can have only the scopes that are set on the client. You choose these scopes when you create or edit the
  client. If you ask for a different scope, including `*`, you get an `invalid_scope` error.
- If you do not send `scope`, the token gets all the scopes on the client except `act-as-user`. You must ask for
  `act-as-user` by name.
- The Fount refuses the token request if:
  - the client has no scopes;
  - the client credentials flow is not enabled for the application;
  - the request comes from an address outside the [allowed API IP addresses](#restricting-where-api-calls-come-from).

Scope changes on a client apply to new tokens. Tokens that were already issued keep their scopes until they expire.

## Acting on behalf of users

A trusted application can make a request as any user. To do this, send the e-mail address of the user in the
`X-Act-As-User` header. The request is then made as that user, with their permissions and data access. Use this for
internal platforms that have already signed the user in and cannot send them through the OAuth flow.

```bash
curl https://fount.wppbav.com/api/v2/brands \
  -H "Accept: application/json" \
  -H "Authorization: Bearer 2|ZyXwVuTsRqPoNmLkJiHgFeDcBa9876543210" \
  -H "X-Act-As-User: jane.doe@example.com"
```

All of these conditions must be true:

- **The application is trusted and approved to act on behalf of users.** We set this.
  [Contact us](mailto:bavsupport@wpp.com) if your application needs it.
- **The token belongs to the application.** Use an [application API key](#application-api-keys) or a
  [client credentials token](#client-credentials-flow). A token that a user issued to your application through the
  authorization code flow cannot act as another user. A personal access token also cannot act as another user.
- **The token has the `act-as-user` scope by name.** The scope is available only after the application is approved.
  The `*` scope does not include it. A client credentials token gets it only if you ask for it in `scope`.
- **The request comes from an allowed address**, if the application has
  [allowed API IP addresses](#restricting-where-api-calls-come-from).

The user must be an active user. If no user has the e-mail address, you get a `422` error.

The Fount records this activity against the user. The record also shows that your application made the request.

## IP restrictions

There are two separate IP lists on an application:

| Setting                       | What it does                                                                                                                              | Set by          |
|-------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------|-----------------|
| Allowed API IP Addresses      | Limits where the application can call the API from. Other addresses get a `403`. Empty means any address. See [above](#restricting-where-api-calls-come-from). | Owners and admins |
| Trusted IP addresses          | Where users can authorize a [trusted application](#trusted-applications) without the consent screen. Does not block requests.             | Us              |

## Errors

The API always returns authentication errors as JSON with a `message`, even if you do not send an `Accept` header.

```json
{
  "message": "This application does not allow requests from this IP address."
}
```

| Code  | Message                                                                                         | Cause                                                                                                                  |
|-------|-------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------|
| `401` | `Unauthenticated.`                                                                              | The token is missing, invalid, revoked or expired. Or it is a client credentials token for an application that no longer allows the flow. |
| `401` | `Your API key does not have the required permissions to perform the requested action: …`       | The token does not have the [scope](#scopes) that the endpoint requires. The message names the scope.                 |
| `403` | `This application does not allow requests from this IP address.`                               | The request comes from outside the application's [allowed API IP addresses](#restricting-where-api-calls-come-from).   |
| `403` | `This application has been deactivated.`                                                        | The application has been deactivated.                                                                                  |
| `403` | `A token issued to a user cannot act as another user.`                                          | `X-Act-As-User` was sent with an OAuth token issued to a user.                                                         |
| `403` | `This token is not allowed to act as another user.`                                             | `X-Act-As-User` was sent with a personal access token.                                                                 |
| `403` | `This application is not allowed to act on behalf of users.`                                    | The application is not trusted and approved to act on behalf of users.                                                 |
| `403` | `The token does not have the act-as-user scope.`                                                | The application's token does not name the `act-as-user` scope.                                                         |
| `403` | `The user to act as is not active.`                                                             | The user in `X-Act-As-User` has been deactivated.                                                                      |
| `403` | `An application cannot act as another application.`                                             | The e-mail address in `X-Act-As-User` belongs to an application.                                                       |
| `422` | `The user to act as must be given as an e-mail address.`                                        | `X-Act-As-User` is not a valid e-mail address.                                                                         |
| `422` | `No user exists with this e-mail address.`                                                      | No user has the e-mail address in `X-Act-As-User`.                                                                     |

A `403` can also mean that the account that the request is made as does not have access to the resource or action. See
[errors](errors.md).

The token endpoint returns errors in the OAuth 2 format, for example:

```json
{
  "error": "invalid_scope",
  "error_description": "The requested scope is invalid, unknown, or malformed",
  "hint": "Check the `bav:market-share-data` scope",
  "message": "The requested scope is invalid, unknown, or malformed"
}
```

## Scopes

You can create integrations and API keys that have different levels of access to your account. Scopes control this
access.

Scopes are broad, and each scope covers a group of endpoints, usually a dataset. For example, to list brands with the
`/brands` endpoint, your token needs the `bav:shared-resources` scope. To get data from the `/brandscape-data`
endpoint, your token needs the `bav:brand-data` scope.

If your token does not have the scope that an endpoint requires, you get a `401` error. The message tells you which
scope is missing.

You choose the scopes when you create a personal access token, an application API key or a client credentials client.
With the authorization code flow, ask for the scopes in the `scope` parameter.

### Available scopes

| Scope                      | Name                | Covers                                                                                                                                                                                                                                                                                                                                                                                                    |
|----------------------------|---------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `bav:shared-resources`     | Shared Resources    | Shared reference data: brands, brand tags, collections, audiences and audience groups (read only), studies and their categories (`/studies/{id}/categories`), years, countries, cities, regions, sectors, GICS sectors, companies, stock prices, stock exchanges, operating companies, tools and the stock performance slide deck (`/slide-decks/stock-performance`).                                                                                                           |
| `bav:brand-data`           | BAV Brand Data      | BAV brand research data and analysis: brandscape data, the brandscape data models (`/brandscape/...`), the tool endpoints (`/tools/...`), categories, brand variations, brand metrics and brand metric groups, brand measures and brand measure groups, BAV questions and question groups, CEE opinions, and the study-level endpoints for brands, brand metrics, brand measures, BAV questions and audience questions. |
| `bav:best-countries-data`  | Best Countries Data | Best Countries research data: the `/best-countries/...` and `/flourish/best-countries/...` endpoints, Best Countries metrics, metric groups and factors.                                                                                                                                                                                                                                                                                      |
| `bav:audience-origin-data` | Audience Origin Data | Audience Origin data: the `/audience-origin/...` endpoints (metrics, metric groups, touchpoints, frequencies and queries) and the audience respondent ID endpoints (`/audiences/{id}/respondents/...`).                                                                                                                                                                                                   |
| `bav:market-share-data`    | Market Share Data   | Euromonitor market share data: the `/market-share/...` endpoints, including the brand and company shares and the catalogs of brands, companies, categories, geographies, industries and data types.                                                                                                                                                                                                       |
| `bav:audiences:write`      | Build Audiences     | Permission to create, update and delete audiences, audience segments and segment metrics, and to deploy audiences (`/audiences/{id}/deploy`). To read audiences, a token needs only `bav:shared-resources`.                                                                                                                                                                                 |
| `bav:collections:write`    | Create Collections  | Permission to create and manage brand collections. The collection endpoints in the REST API are currently read-only and need only `bav:shared-resources`.                                                                                                                                                                                                                                                |
| `profile`                  | User Profile        | The profile information of the authenticated user from the [`/oauth/userinfo`](#getting-the-users-profile) endpoint.                                                                                                                                                                                                                                                                                  |

The [health check](health-check.md) endpoint does not require authentication or a scope.

### Scopes and permissions

Most of the dataset scopes are linked to a permission in The Fount. You can give a scope to a key only if the account
of the key has access to the dataset that the scope covers. For example, the `bav:best-countries-data` scope is
available on a personal access token only if you have access to Best Countries. For the API keys and client credentials
clients of an application, the available scopes depend on the [application's access](#application-access), not on your
access.

Scopes control which endpoints a token can use. In those endpoints, you can see only the data that the account of the
request has access to. If that account does not have permission to do an action or see a resource, you get a `403`
error.

### System scopes

Some scopes are not for general use, and you cannot assign them to yourself. The `act-as-user` scope lets an approved
application [act on behalf of users](#acting-on-behalf-of-users). It is available only on the API keys and client
credentials clients of an application. The application must first be approved to act on behalf of users.

[Contact us](mailto:bavsupport@wpp.com) if you think that your integration needs it.
