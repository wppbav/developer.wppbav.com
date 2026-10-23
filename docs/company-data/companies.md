# Companies

## What are companies?

Companies are a step above brands in the BAV hierarchy. Companies are the legal entities that own brands. These
companies can be privately or publicly owned.

## List all companies

To list all of the companies and browse them via the API, use the list endpoint:

```http request
GET /api/v2/companies
```

## Get a company

You may also directly retrieve a company's details if you already have its system ID.

```http request
GET /api/v2/companies/123
```

Where `123` is the system ID of the company.

## Get a company's stock prices

To get the historical share prices for a company's primary stock exchange listing, use the company stock prices
endpoint:

```http request
GET /api/v2/companies/123/stock-prices
```

Where `123` is the system ID of the company.

This returns the same response as the [stock prices endpoint](stock-prices.md#response) and is not paginated. It
accepts the `from`, `to` and `interval` parameters described in
the [stock prices documentation](stock-prices.md#parameters). Omitting `from` and `to` returns the full price history,
so use a date window or a `weekly` or `monthly` `interval` to keep the response small.

A company without a primary listing returns no rows, and its ID is listed in `meta.companies_without_listing`. A `503`
error is returned if the market data provider cannot be reached.

## Schema

### Full response schema

| Key               | Type    |                Filterable                 |      Sortable      |    Configurable    | Description                                                     |
|-------------------|---------|:-----------------------------------------:|:------------------:|:------------------:|-----------------------------------------------------------------|
| `id`              | integer |        :white_check_mark: (exact)         | :white_check_mark: | :white_check_mark: | The system ID.                                                  |
| `name`            | string  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | The primary name of the company.                                |
| `description`     | string  |            :white_check_mark:             |        :x:         | :white_check_mark: | A description of what the company does.                         |
| `currency`        | string  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | The primary reporting currency for the company.                 |
| `isin`            | string  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | The company's ISIN number (if public).                          |
| `ipo_date`        | string  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | When the company first had its initial public offering.         |
| `fiscal_year_end` | string  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | The month when the company's fiscal year ends.                  |
| `street_address`  | string  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | The street address for the company's listed HQ.                 |
| `state`           | string  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | The state/region for the company's listed HQ.                   |
| `postal_code`     | string  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | The zip/postal code for the company's listed HQ.                |
| `city`            | string  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | The city for the company's listed HQ.                           |
| `website_url`     | string  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | The company's primary website URL.                              |
| `officers`        | array   |            :white_check_mark:             |        :x:         | :white_check_mark: | An array of names and roles of the registered company officers. |
| `created_at`      | string  |                    :x:                    | :white_check_mark: | :white_check_mark: | A datetime string when this company was first created.          |
| `updated_at`      | string  | ([updated since](../customizing/filters)) | :white_check_mark: | :white_check_mark: | A datetime string when this company was last updated.           |
| `url`             | string  |                    :x:                    |        :x:         |        :x:         | The URL to view the company in The Fount.                       |

### Relationship Response Schema

The slim relationship schema is used when the company is used as part of an include in another resource.

| Key    | Type    | Description                      |
|--------|---------|----------------------------------|
| `id`   | integer | The system ID for the company.   |
| `name` | string  | The primary name of the company. |

## Additional Filters

For convenience, we have a set of additional filters that are not available in
the [default filters](../customizing/filters.md) or are part of the columns. These are:

- `public` - Set to `1` to only return public (listed) companies.
- `private` - Set to `1` to only return private (unlisted) companies.
- `brands` - Set to a comma-separated list of brand IDs to only return companies whose linked `brand` (the brand that
  represents the company itself) is one of those brands. This does not match every brand the company owns.

## Relationships & includes

By default, relationships are not included. See
the [includes section](../customizing/includes) for more information on how this works. The following relationships
are available:

- `brand` - The [brand](../brands/brands.md) that represents the company itself, where one is linked.
- `brands` - The [brands](../brands/brands.md) that belong to the company.
- `gics_sector` - The [GICS Sector](../metadata/gics-sectors.md) that categorizes the company.
- `stock_exchanges` - The [stock exchanges](../metadata/stock-exchanges.md) that the company is listed on. Each
  exchange also includes the company's `stock_ticker` on that exchange.
- `country` - The [country](../metadata/countries.md) that the company is registered in.
- `latest_financials` - The latest financials for the company (available for public companies).
