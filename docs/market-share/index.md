---
sidebar_label: Overview
---

# Market Share

The market share endpoints give you access to Euromonitor's market share data for brands and companies, sliced by
category, geography (market), data type and year. Alongside the share data you also get Euromonitor's catalogs of
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

The catalog endpoints are documented on the [catalog](catalog.md) page, and the share data on
the [brand shares](brand-shares.md) and [company shares](company-shares.md) pages.

## Access

The market share endpoints require the **Market Share Data** (`bav:market-share-data`) scope on your API key or
application. See [authentication](../authentication.md#scopes) for more information on scopes.

The scope can only be assigned by users who have access to Euromonitor data in The Fount. Access is also checked
against the user on every request, so if the user behind a token loses access to Euromonitor data, the token will
receive a `403` response even though it still holds the scope.

## Important concepts

Euromonitor data works differently from the BAV data in a few important ways. Please read through these before you
start building on top of the market share endpoints.

### Euromonitor IDs are not BAV IDs

Euromonitor keeps its own list of everything: brands, companies, categories, geographies, industries and data types.
None of these are the same as the BAV resources with similar names. The Euromonitor brand catalog covers brands that
BAV has never surveyed, splits some brands that BAV holds as one, and names others differently. Likewise, Euromonitor
geographies are not the same as the BAV [countries](../metadata/countries.md).

Everything on the market share endpoints is Euromonitor's unless it is prefixed with `bav_`. This means that:

- `brands`, `companies`, `categories`, `geographies`, `industries` and `data_types` always take Euromonitor IDs.
- `bav_brands` and `bav_companies` take BAV [brand](../brands/brands.md) and [company](../company-data/companies.md)
  IDs.
- `bav_brand`, `bav_company` and `bav_country` in responses are the BAV records that a Euromonitor record is linked to.

:::warning Do not mix up the IDs
A BAV ID sent where a Euromonitor ID is expected does not fail. It silently reads as another, unrelated Euromonitor
entity (or matches nothing). Always look up Euromonitor IDs using the [catalog endpoints](catalog.md) first, or use the
`bav_brands` and `bav_companies` filters when you only know the BAV ID.
:::

### Linking to BAV

Where a Euromonitor brand or company has been linked to a BAV brand or company, the catalog and share endpoints tell
you so through the `bav_brand` and `bav_company` fields. Only linked records can be read alongside BAV brand equity
data. Where no link exists, these fields are `null`.

### Null is not zero

The different measures (USD value, local currency value, percentage share and rank) arrive from Euromonitor in separate
extracts and are merged into one row. A row carrying one measure but not another is normal.

A `null` value means that the figure was not supplied for that slice. It never means zero, and it should never be read
as the brand or company holding none of the category.

### Data types are not comparable

Each share row is measured as a specific [data type](catalog.md#data-types), such as retail value or retail volume.
Rows that differ only by data type measure different things. They must not be summed or averaged across. Filtering your
share queries to a single data type is usually what you want.

### At least one narrowing filter is required

Every share query has to name at least one entity, category, geography or industry. Without one the query would be the
whole of Euromonitor. A year on its own does not count, since every brand in every market is measured each year. See
the [brand shares](brand-shares.md) and [company shares](company-shares.md) pages for the exact filters that qualify.

The share responses are not paginated. A query matching more than 25,000 rows is rejected with a validation error
rather than truncated. Narrow the query with a geography, category or year filter if this happens.
