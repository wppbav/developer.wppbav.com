# Authentication

The API has two means of access, depending on your use-case: Personal Access Tokens and Application Access. Personal
Access Tokens are the easiest way to get started with the API.

:::caution
Please take care not to share your API keys with anyone. All API keys should
be treated as sensitive. Make sure it is not visible in any code you share publicly, committed to any repositories or
otherwise exposed.
:::

## Personal Access Tokens

Personal Access Tokens are the easiest way to get started with the API. They allow you to make API requests on your own
account without requiring you to build a full OAuth flow. Personal Access Tokens can be created and managed from
the [API section in The Fount](https://fount.wppbav.com/api).

When using a personal access token to authenticate to the API, you should use the `Bearer` authentication scheme. For
example:

```bash
curl https://fount.wppbav.com/api/v2/brands -H "Authorization: Bearer TOKEN"
```

## Application Access

When you want to integrate BAV into your own application, you will want to use our application access flow. This is a
full OAuth 2 compatible authentication flow that allows you to act on behalf of a given user who needs to authorize your
application.

This flow is currently in beta. [Contact us](mailto:support@bernskiold.com) for more information.

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

Scopes are broad and each one covers a group of endpoints, typically a dataset. For example, to list brands using the
`/brands` endpoint, your API key needs the `bav:shared-resources` scope, and to get data from the `/brandscape-data`
endpoint, it needs the `bav:brand-data` scope.

If your API key doesn't have the scope that an endpoint requires, a `401` error is returned with a message telling you
which scope is missing.

Scopes for your API keys and applications are managed from
the [API section in The Fount](https://fount.wppbav.com/api).

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
| `profile`                  | User Profile        | The authenticated user's profile information from the `/oauth/userinfo` endpoint.                                                                                                                                                                                                                                                                                                                        |

The [health check](health-check.md) endpoint doesn't require authentication or any scope.

### Scopes and permissions

Most of the dataset scopes are tied to a permission in The Fount. You can only give a scope to an API key when your
account has access to the dataset it covers. For example, the `bav:best-countries-data` scope is only available if
you have access to Best Countries. For an application, the scopes available depend on the access of the account that
owns the application.

Scopes control which endpoints an API key can use. Within those endpoints, you can still only see the data that the
account you're acting as has access to. If the account doesn't have permission to perform an action or see a resource,
a `403` error is returned.

### System scopes

A few scopes are not for general use and can't be self-assigned:

- `act-as-user` lets an approved application act on behalf of its users by sending the user's e-mail address in the
  `X-Act-As-User` header. It is only offered on an application's own API keys once the application has been approved
  to act on behalf of users.
- `bav:auto-login` is a legacy system scope for trusted integrations. It requires a special permission and can't be
  given to applications.

[Contact us](mailto:support@bernskiold.com) if you think your integration needs one of these.
