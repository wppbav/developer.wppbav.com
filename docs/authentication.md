# Authentication

Every API request, except the [health check](health-check.md), needs an access token. You send it in the
`Authorization` header using the `Bearer` scheme:

```bash
curl https://fount.wppbav.com/api/v2/brands \
  -H "Accept: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN"
```

There are a few ways to get a token, depending on who the request should be made as.

:::caution
Please take care not to share your API keys, client secrets or access tokens with anyone. They should all be treated as
sensitive. Make sure they are not visible in any code you share publicly, committed to any repositories or otherwise
exposed.
:::

## Choosing a method

| Method                                                    | The request is made as                         | How you get it                                                         | Typical use                                                                 |
|-----------------------------------------------------------|------------------------------------------------|------------------------------------------------------------------------|-----------------------------------------------------------------------------|
| [Personal access token](#personal-access-tokens)          | You                                            | Create it in the [API section in The Fount](https://fount.wppbav.com/api) | Scripts, notebooks and data pipelines that you run yourself.               |
| [Application API key](#application-api-keys)              | The application                                | Create it on the application's page                                    | Back-end integrations that use the application's own access.               |
| [OAuth client credentials](#client-credentials-flow)      | The application                                | Exchange a client ID and secret for a short-lived token                | Machine-to-machine integrations that prefer OAuth over a long-lived key.   |
| [OAuth authorization code](#authorization-code-flow)      | A user who has authorized your application     | The user signs in and approves your application                        | Applications where people sign in and see the data they have access to.   |
| [Acting on behalf of users](#acting-on-behalf-of-users)   | Any user, named in the `X-Act-As-User` header  | An application key or client credentials token, approved by us         | Trusted internal platforms that have already signed the user in.           |

Personal access tokens are the easiest way to get started. When you build something that other people will use, create
an [application](#applications) instead.

:::tip We recommend OAuth
Where you can, use [OAuth 2](#oauth-2) rather than a long-lived personal access token or application API key. With
OAuth, users approve what your application can do and can revoke that access at any time, each request is made with the
permissions of the person using your application. Use the [authorization code flow](#authorization-code-flow)
when people sign in to your application, and the [client credentials flow](#client-credentials-flow) for
machine-to-machine integrations.
:::

Whichever method you use, the request has the permissions and data access of the account it is made as, and the token
must have the [scope](#scopes) the endpoint requires.

## Personal access tokens

A personal access token lets you call the API as yourself, without building an OAuth flow. Anything you can see in
The Fount, you can see through the API.

You create and manage your tokens under **Personal API Keys** in the
[API section in The Fount](https://fount.wppbav.com/api). When you create a key, you:

- **Give it a name** so you can recognize it later.
- **Choose an expiration** of 7, 30, 60 or 90 days. We strongly recommend that your keys expire.
- **Choose its scopes.** You can only pick the scopes for datasets you have access to. See [scopes](#scopes).

The key is only shown once, right after you create it, so store it somewhere safe.

From the list of keys, you can:

- **Regenerate** a key. This replaces it with a new key that has the same name, scopes and expiry date. The old key
  stops working immediately.
- **Revoke** a key. This deletes it and it stops working immediately.

We e-mail you seven days before one of your keys expires, and again on the day it expires.

```bash
curl https://fount.wppbav.com/api/v2/brands \
  -H "Accept: application/json" \
  -H "Authorization: Bearer 1|AbCdEfGhIjKlMnOpQrStUvWxYz0123456789"
```

## Applications

An application represents an integration, such as an internal tool, a data platform or an AI agent. You create it in
the [API section in The Fount](https://fount.wppbav.com/api) under **Applications**. Once you have an application, it
can:

- call the API as itself, with [API keys](#application-api-keys) or the [client credentials flow](#client-credentials-flow);
- let users sign in and authorize it through the [authorization code flow](#authorization-code-flow), and then call the
  API on their behalf;
- [act on behalf of users](#acting-on-behalf-of-users) without a sign-in, once it has been approved for it.

### Members and roles

Whoever creates an application becomes its owner. Owners and admins can add other existing users to the application
by their e-mail address, and give each of them a role:

| Role      | Can                                                                                                       |
|-----------|-----------------------------------------------------------------------------------------------------------|
| Owner     | Everything, including deleting the application and giving or removing the Owner role.                    |
| Admin     | Edit the application's settings, manage its members, create and delete OAuth clients, and manage API keys. |
| Developer | Edit existing OAuth clients and manage the application's API keys.                                        |
| Viewer    | View the application's details.                                                                           |

An application always keeps at least one owner. Only an owner can give, change or take away the Owner role.

### Application access

When the application calls the API as itself, it has its own access to data, separate from that of its members. A new
application starts with only basic access. [Contact us](mailto:support@bernskiold.com) to have the access it needs
added.

### Application API keys

An application API key works like a personal access token, but the request is made as the application. Owners, admins
and developers manage the keys under **API Keys** on the application's page, in the same way as
[personal access tokens](#personal-access-tokens). The scopes you can pick follow the access the application has been
given, not your own.

Expiry e-mails for an application's keys go to its owners, admins and developers.

For machine-to-machine integrations, we recommend the [client credentials flow](#client-credentials-flow) over an API
key. It gives the same access as the application, but with tokens that last an hour instead of a long-lived key.

```bash
curl https://fount.wppbav.com/api/v2/brands \
  -H "Accept: application/json" \
  -H "Authorization: Bearer 2|ZyXwVuTsRqPoNmLkJiHgFeDcBa9876543210"
```

:::note Service accounts
Applications replace service accounts. Every service account has been converted to an application. Tokens issued to a
service account keep working, with the same access, and are now managed as the application's API keys.
:::

### OAuth clients

To use OAuth, an application needs a client. Owners and admins create clients under **Clients** on the application's
page. There are two kinds:

- **Authorization code clients** let users authorize your application. You give the client one or more **Redirect
  URLs**, one per line, and users are only sent back to those URLs.
- **Client credentials clients** let the application request tokens for itself. You choose the scopes the client may be
  issued. This kind of client is only available once we have enabled the client credentials flow for your application.

When you create a client, you get a **Client ID** and a **Client Secret**. The secret is only shown once. You can
**Rotate Secret** on a client at any time, and the old secret stops working immediately. Deleting a client revokes
every token it has issued.

Clients created in The Fount are confidential clients. They have a secret, which must be kept on your server.

### Restricting where API calls come from

You can limit the IP addresses an application calls the API from, under **Allowed API IP Addresses** when you edit the
application. Enter one IP address or CIDR range per line, such as `203.0.113.10` or `198.51.100.0/24`.

The allow-list covers every request the application makes:

- requests with its API keys;
- requests with client credentials tokens, and the token request itself;
- requests with OAuth tokens that users have issued to it;
- requests where it acts on behalf of users.

A request from any other address gets a `403` error. If the list is empty, the application can call the API from
anywhere.

## OAuth 2

The Fount is an OAuth 2 authorization server. Use these endpoints:

| Endpoint                                      | Method | Used for                                                     |
|-----------------------------------------------|--------|--------------------------------------------------------------|
| `https://fount.wppbav.com/oauth/authorize`    | `GET`  | Sending the user to sign in and authorize your application.  |
| `https://fount.wppbav.com/oauth/token`        | `POST` | Getting an access token, refreshing it, or client credentials. |
| `https://fount.wppbav.com/oauth/userinfo`     | `GET`  | Getting the profile of the user who authorized the token.    |

Request scopes as a space-separated list in the `scope` parameter, for example
`scope=bav:shared-resources bav:brand-data`. See [scopes](#scopes) for what is available. The `*` scope is ignored in
the authorization code flow.

### Authorization code flow

Use this flow when people sign in to your application with their WPP account and you want to call the API as them. The
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

The `redirect_uri` must match one of the client's redirect URLs exactly. Use `state` to protect against cross-site
request forgery and check it when the user comes back.

PKCE (`code_challenge` and `code_challenge_method`) is optional for confidential clients, but we recommend it. Use the
`S256` method.

**2. The user signs in and approves your application.** The consent screen lists the scopes you asked for, and the user
can authorize or deny the request. The user isn't asked again if they have already authorized the same scopes for your
client and that token is still valid. Add `prompt=consent` to always show the consent screen.

**3. The user is sent back to your redirect URL** with a `code` and your `state`:

```
https://app.example.com/oauth/callback?code=def50200a1b2c3...&state=RANDOM_STATE
```

The code is valid for 10 minutes and can only be used once.

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

The response has a new access token and a new refresh token. The old refresh token can't be used again.

#### Getting the user's profile

With the `profile` scope, you can get the profile of the user who authorized the token from the `userinfo` endpoint.
This only works with tokens from the authorization code flow.

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

`operating_company` and `country` are left out when they aren't set for the user.

#### Trusted applications

For internal applications, we can mark the application as trusted and skip the consent screen. Consent is only skipped
when the authorization request comes from one of the trusted IP addresses we set up for the application, for example
your office or VPN network. From anywhere else, the user sees the consent screen as usual.

These trusted IP addresses are separate from the [allowed API IP addresses](#restricting-where-api-calls-come-from).
[Contact us](mailto:support@bernskiold.com) if you'd like your application set up as trusted.

### Client credentials flow

Use this flow when the application calls the API as itself and you'd rather use OAuth than a long-lived
[API key](#application-api-keys). The request is made as the application, just as with an API key. The client
credentials flow needs to be enabled for your application by us, and you need a client credentials client.

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

- The token is valid for **one hour**, and there is no refresh token. Request a new token when it expires.
- The token can only have the scopes set on the client, which you choose when you create or edit the client. Asking for
  any other scope, including `*`, returns an `invalid_scope` error.
- If you leave out `scope`, the token gets every scope on the client except `act-as-user`, which you have to ask for by
  name.
- The token request is refused if the client has no scopes, if the client credentials flow isn't enabled for the
  application, or if the request comes from an address outside the
  [allowed API IP addresses](#restricting-where-api-calls-come-from).

Scope changes on a client apply to new tokens. Tokens already issued keep their scopes until they expire.

## Acting on behalf of users

A trusted application can make a request as any user by sending the user's e-mail address in the `X-Act-As-User`
header. The request is then made as that user, with their permissions and data access. Use this for internal platforms
that have already signed the user in and can't send them through the OAuth flow.

```bash
curl https://fount.wppbav.com/api/v2/brands \
  -H "Accept: application/json" \
  -H "Authorization: Bearer 2|ZyXwVuTsRqPoNmLkJiHgFeDcBa9876543210" \
  -H "X-Act-As-User: jane.doe@example.com"
```

All of these are required:

- **The application is trusted and approved to act on behalf of users.** This is set by us.
  [Contact us](mailto:support@bernskiold.com) if your application needs it.
- **The token belongs to the application.** Use an [application API key](#application-api-keys) or a
  [client credentials token](#client-credentials-flow). A token that a user issued to your application through the
  authorization code flow can't act as another user, and neither can a personal access token.
- **The token has the `act-as-user` scope by name.** The scope is only offered once the application is approved. The
  `*` scope doesn't include it, and a client credentials token only gets it when you ask for it in `scope`.
- **The request comes from an allowed address**, if the application has
  [allowed API IP addresses](#restricting-where-api-calls-come-from).

The user must be an active user. If no user has the e-mail address, a `422` error is returned. For BAV applications,
we can instead have unknown users created as BAV users on their first request.

Activity performed this way is recorded against the user, and notes that it was made through your application.

The legacy `X-User-Email` header is still accepted in place of `X-Act-As-User`, but we recommend moving to
`X-Act-As-User`.

## IP restrictions

There are two separate IP lists on an application:

| Setting                       | What it does                                                                                                                              | Set by          |
|-------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------|-----------------|
| Allowed API IP Addresses      | Limits where the application can call the API from. Other addresses get a `403`. Empty means any address. See [above](#restricting-where-api-calls-come-from). | Owners and admins |
| Trusted IP addresses          | Where users can authorize a [trusted application](#trusted-applications) without the consent screen. Doesn't block any requests.          | Us              |

## Errors

Authentication errors are always returned as JSON with a `message`, even if you don't send an `Accept` header.

```json
{
  "message": "This application does not allow requests from this IP address."
}
```

| Code  | Message                                                                                         | Cause                                                                                                                  |
|-------|-------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------|
| `401` | `Unauthenticated.`                                                                              | The token is missing, invalid, revoked or expired, or it's a client credentials token for an application that no longer allows the flow. |
| `401` | `Your API key does not have the required permissions to perform the requested action: …`       | The token doesn't have the [scope](#scopes) the endpoint requires. The message names the scope.                       |
| `403` | `This application does not allow requests from this IP address.`                               | The request comes from outside the application's [allowed API IP addresses](#restricting-where-api-calls-come-from).   |
| `403` | `This application has been deactivated.`                                                        | The application has been deactivated.                                                                                  |
| `403` | `A token issued to a user cannot act as another user.`                                          | `X-Act-As-User` was sent with an OAuth token issued to a user.                                                         |
| `403` | `This token is not allowed to act as another user.`                                             | `X-Act-As-User` was sent with a personal access token.                                                                 |
| `403` | `This application is not allowed to act on behalf of users.`                                    | The application isn't trusted and approved to act on behalf of users.                                                  |
| `403` | `The token does not have the act-as-user scope.`                                                | The application's token doesn't name the `act-as-user` scope.                                                          |
| `403` | `The user to act as is not active.`                                                             | The user in `X-Act-As-User` has been deactivated.                                                                      |
| `403` | `An application cannot act as another application.`                                             | The e-mail address in `X-Act-As-User` belongs to an application.                                                       |
| `422` | `The user to act as must be given as an e-mail address.`                                        | `X-Act-As-User` isn't a valid e-mail address.                                                                          |
| `422` | `No user exists with this e-mail address.`                                                      | No user has the e-mail address in `X-Act-As-User`.                                                                     |

A `403` can also mean that the account the request is made as doesn't have access to the resource or action. See
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

We allow you to create integrations and API keys that have different levels of access to your account. This is done
through scopes.

Scopes are broad and each one covers a group of endpoints, typically a dataset. For example, to list brands using the
`/brands` endpoint, your token needs the `bav:shared-resources` scope, and to get data from the `/brandscape-data`
endpoint, it needs the `bav:brand-data` scope.

If your token doesn't have the scope that an endpoint requires, a `401` error is returned with a message telling you
which scope is missing.

You choose the scopes when you create a personal access token, an application API key or a client credentials client.
With the authorization code flow, you ask for them in the `scope` parameter.

### Available scopes

| Scope                      | Name                | Covers                                                                                                                                                                                                                                                                                                                                                                                                    |
|----------------------------|---------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `bav:shared-resources`     | Shared Resources    | Shared reference data: brands, brand tags, collections, audiences and audience groups (reading), studies and their categories (`/studies/{id}/categories`), years, countries, cities, regions, sectors, GICS sectors, companies, stock prices, stock exchanges, operating companies, tools and the stock performance slide deck (`/slide-decks/stock-performance`).                                                                                                             |
| `bav:brand-data`           | BAV Brand Data      | BAV brand research data and analysis: brandscape data, the brandscape data models (`/brandscape/...`), the tool endpoints (`/tools/...`), categories, brand variations, brand metrics and brand metric groups, brand measures and brand measure groups, BAV questions and question groups, CEE opinions, and the study-level endpoints for brands, brand metrics, brand measures, BAV questions and audience questions. |
| `bav:best-countries-data`  | Best Countries Data | Best Countries research data: the `/best-countries/...` and `/flourish/best-countries/...` endpoints, Best Countries metrics, metric groups and factors.                                                                                                                                                                                                                                                                                      |
| `bav:audience-origin-data` | Audience Origin Data | Audience Origin data: the `/audience-origin/...` endpoints (metrics, metric groups, touchpoints, frequencies and queries) and the audience respondent ID endpoints (`/audiences/{id}/respondents/...`).                                                                                                                                                                                                   |
| `bav:market-share-data`    | Market Share Data   | Euromonitor market share data: the `/market-share/...` endpoints, including the brand and company shares and the catalogs of brands, companies, categories, geographies, industries and data types.                                                                                                                                                                                                       |
| `bav:audiences:write`      | Build Audiences     | Creating, updating and deleting audiences, audience segments and segment metrics, and deploying audiences (`/audiences/{id}/deploy`). Reading audiences only requires `bav:shared-resources`.                                                                                                                                                                                               |
| `bav:collections:write`    | Create Collections  | Creating and managing brand collections. The collection endpoints in the REST API are currently read-only and only require `bav:shared-resources`.                                                                                                                                                                                                                                                       |
| `profile`                  | User Profile        | The authenticated user's profile information from the [`/oauth/userinfo`](#getting-the-users-profile) endpoint.                                                                                                                                                                                                                                                                                        |

The [health check](health-check.md) endpoint doesn't require authentication or any scope.

### Scopes and permissions

Most of the dataset scopes are tied to a permission in The Fount. You can only give a scope to a key when the account
it belongs to has access to the dataset it covers. For example, the `bav:best-countries-data` scope is only available
on a personal access token if you have access to Best Countries. For an application's API keys and client credentials
clients, the scopes on offer depend on the [application's access](#application-access), not on yours.

Scopes control which endpoints a token can use. Within those endpoints, you can still only see the data that the
account the request is made as has access to. If that account doesn't have permission to perform an action or see a
resource, a `403` error is returned.

### System scopes

Some scopes are not for general use and can't be self-assigned. The `act-as-user` scope lets an approved application
[act on behalf of users](#acting-on-behalf-of-users). It is only offered on an application's own API keys and client
credentials clients once the application has been approved to act on behalf of users.

[Contact us](mailto:support@bernskiold.com) if you think your integration needs it.
