# Authentication

The API uses simple Bearer token keys to authenticate requests. This allows you to get started consuming the API as
quickly as possible.

## Scopes

A select few of the API endpoints are scoped and requires special access. Most however are accessible with the standard
token and standard permissions.

## Authenticating

The authentication method for each request is a bearer token:

```bash
curl https://fount.wppbav.com/api/v1/brands -H "Authorization: Bearer TOKEN"
```

## Obtaining a token

We require you to register your application before you are able to start consuming the API. You may create a new API key from your [profile settings page in The Fount](https://fount.wppbav.com/profile) and by going to the API tab.
