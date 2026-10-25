---
sidebar_label: Overview
---

# Market Share

The market share endpoints give you access to Euromonitor's market share data for brands and companies, sliced by
category, geography (market), data type and year. With the share data, you also get Euromonitor's catalogs of
brands, companies, categories, data types, geographies and industries that the data is sliced by.

All market share endpoints live under the `/api/v2/market-share` prefix:

| Method       | Endpoint                             | Description                                         |
|--------------|--------------------------------------|-----------------------------------------------------|
| `GET`        | `/api/v2/market-share/brands`        | Euromonitor's brand catalog.                        |
| `GET`        | `/api/v2/market-share/companies`     | Euromonitor's company catalog.                      |
| `GET`        | `/api/v2/market-share/categories`    | Euromonitor's category tree.                        |
| `GET`        | `/api/v2/market-share/data-types`    | What a share row measures.                          |
| `GET`        | `/api/v2/market-share/geographies`   | Euromonitor's markets.                              |
| `GET`        | `/api/v2/market-share/industries`    | Euromonitor's industries.                           |
| `GET`/`POST` | `/api/v2/market-share/brand-shares`  | Market share for brands.                            |
| `GET`/`POST` | `/api/v2/market-share/company-shares`| Market share for companies.                         |

The [catalog](catalog.md) page documents the catalog endpoints. The [brand shares](brand-shares.md)
and [company shares](company-shares.md) pages document the share data.

## Access

The market share endpoints require the **Market Share Data** (`bav:market-share-data`) scope on your API key or
application. See [authentication](../authentication.md#scopes) for more information on scopes.

Only users who have access to Euromonitor data in The Fount can assign the scope. The API also checks the access of
the user on every request. If the user behind a token loses access to Euromonitor data, the token will receive a `403`
response. This occurs even though the token still holds the scope.

## Important concepts

Euromonitor data works differently from the BAV data in a few important ways. Read these concepts before you
start to build on the market share endpoints.

### Euromonitor IDs are not BAV IDs

Euromonitor keeps its own list of everything: brands, companies, categories, geographies, industries and data types.
None of these are the same as the BAV resources with similar names. The Euromonitor brand catalog covers brands that
BAV has never surveyed, splits some brands that BAV holds as one, and names others differently. Likewise, Euromonitor
geographies are not the same as the BAV [countries](../metadata/countries.md).

Everything on the market share endpoints is Euromonitor's unless it has the prefix `bav_`. This means that:

- `brands`, `companies`, `categories`, `geographies`, `industries` and `data_types` always take Euromonitor IDs.
- `bav_brands` and `bav_companies` take BAV [brand](../brands/brands.md) and [company](../company-data/companies.md)
  IDs.
- `bav_brand`, `bav_company` and `bav_country` in responses are the BAV records that a Euromonitor record is linked to.

:::warning Do not mix up the IDs
If you send a BAV ID where the API expects a Euromonitor ID, the request does not fail. The API silently reads it as
another, unrelated Euromonitor entity (or it matches nothing). Always use the [catalog endpoints](catalog.md) to look up
Euromonitor IDs first. If you only know the BAV ID, use the `bav_brands` and `bav_companies` filters.
:::

### Linking to BAV

If a Euromonitor brand or company is linked to a BAV brand or company, the `bav_brand` and `bav_company` fields in the
catalog and share endpoints show the link. You can read only linked records together with BAV brand equity data. Where no link exists, these fields are `null`.

### Null is not zero

The different measures (USD value, local currency value, percentage share and rank) arrive from Euromonitor in separate
extracts. These extracts are merged into one row. It is normal for a row to have one measure but not another.

A `null` value means that the figure was not supplied for that slice. It never means zero. Do not read it as a sign that
the brand or company has none of the category.

### Data types are not comparable

Each share row measures a specific [data type](catalog.md#data-types), such as retail value or retail volume. Rows
that differ only by data type measure different things. Do not sum or average across them. In most cases, filter your
share queries to a single data type.

### At least one narrowing filter is required

Every share query must name at least one entity, category, geography or industry. Without one, the query will be the
whole of Euromonitor. A year on its own does not count, because Euromonitor measures every brand in every market each
year. See
the [brand shares](brand-shares.md) and [company shares](company-shares.md) pages for the exact filters that qualify.

The share responses are not paginated. If a query matches more than 25,000 rows, the API rejects it with a
validation error and does not truncate it. If this occurs, narrow the query with a geography, category or year filter.
