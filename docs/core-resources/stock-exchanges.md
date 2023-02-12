# Stock Exchanges

## What are stock exchanges?

Stock Exchanges are the entities where public [companies](companies.md) are listed.

## List all stock exchanges

To list all of the stock exchanges and browse them via the API, use the list endpoint:

```http request
GET /api/v2/stock-exchanges
```

## Get a stock exchange

You may also directly retrieve a stock exchange's details if you already have its system ID.

```http request
GET /api/v2/stock-exchanges/123
```

Where `123` is the system ID of the stock exchange.

## Schema

### Full response schema

| Key             | Type    |                Filterable                 |      Sortable      |    Configurable    | Description                                                   |
|-----------------|---------|:-----------------------------------------:|:------------------:|:------------------:|---------------------------------------------------------------|
| `id`            | integer |        :white_check_mark: (exact)         | :white_check_mark: | :white_check_mark: | The system ID.                                                |
| `name`          | string  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | The name of the stock exchange.                               |
| `code`          | string  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | The code for the stock exchange.                              |
| `suffix`        | string  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | The stock suffix when part of this stock exchange.            |
| `operating_mic` | string  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | The operating Market Identifier Code for the stock exchange.  |
| `currency`      | string  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | The reporting currency used by the exchange.                  |
| `created_at`    | string  |                    :x:                    | :white_check_mark: | :white_check_mark: | A datetime string when this stock exchange was first created. |
| `updated_at`    | string  | ([updated since](../customizing/filters)) | :white_check_mark: | :white_check_mark: | A datetime string when this stock exchange was last updated.  |

### Relationship Response Schema

The slim relationship schema is used when the stock exchange is used as part of an include in another resource.

| Key             | Type    | Description                                                  |
|-----------------|---------|--------------------------------------------------------------|
| `id`            | integer | The system ID for the stock exchange.                        |
| `name`          | string  | The name of the stock exchange.                              |
| `code`          | string  | The code for the stock exchange.                             |
| `suffix`        | string  | The stock suffix when part of this stock exchange.           |
| `operating_mic` | string  | The operating Market Identifier Code for the stock exchange. |

## Additional Filters

For convenience, we have a set of additional filters that are not available in
the [default filters](../customizing/filters.md) or are part of the columns. These are:

- `countries` - A comma-separated list of country IDs to only return stock exchanges in those countries.
- `country_codes` - A comma-separated list of country codes (two-letter, ISO standard) to only return stock exchanges in
  those countries.

## Relationships & includes

By default, relationships apart from the sector are not included. See
the [includes section](../customizing/includes) for more information on how this works. The following relationships
are available:

- `country` - The [country](countries.md) where the exchange is located.
