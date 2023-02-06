# Authentication

The API has two means of access, depending on your use-case: Personal Access Tokens and Application Access. Personal
Access Tokens are the easiest way to get started with the API.

## Personal Access Tokens

Personal Access Tokens are the easiest way to get started with the API. They allow you to make API requests on your own
account without requiring you to build a full OAuth flow. Personal Access Tokens can be created and managed from
your [profile settings page in The Fount](https://fount.wppbav.com/profile?tab=api).

When using a personal access token to authenticate to the API, you should use the `Bearer` authentication scheme. For
example:

```bash
curl https://fount.wppbav.com/api/v1/brands -H "Authorization: Bearer TOKEN"
```

## Application Access

When you want to integrate BAV into your own application, you will want to use our application access flow. This is a
full OAuth 2 compatible authentication flow that allows you to act on behalf of a given user who needs to authorize your
application.

This flow is currently in beta. [Contact us](mailto:support@bernskioldmedia.com) for more information.

:::note Embedding The Fount into your application
If you want to be able to use our The Fount tools from within your application we allow a special embed integration that
lets you:

- Embed the The Fount tools into your application without our application frame.
- Pass filtered parameters straight to the tool from your application to skip the query flow.
- Pre-authorize a user to bypass the need to login twice.

The embed integration offers you an easy way to integrate The Fount tools into your application without having to build
out integrations for each tool using the API.
:::

## Scopes

We allow you to create integrations and API keys that have different levels of access to your account. This is done
through scopes.

Generally each endpoint has its own scope. For example to list all brands using the `/brands` endpoint, you will need
the `Brands: Read` scope.

Scopes for your API keys and applications are managed from
you [profile settings page in The Fount](https://fount.wppbav.com/profile?tab=api).

A select few endpoints cannot be self-assigned through the settings page but requires approval. In this case you will
find more information on the respective endpoint docs pages.