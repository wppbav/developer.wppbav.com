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

## Schema

### Full response schema

| Key               | Type    |                Filterable                 |      Sortable      |    Configurable    | Description                                            |
|-------------------|---------|:-----------------------------------------:|:------------------:|:------------------:|--------------------------------------------------------|
| `id`              | integer |        :white_check_mark: (exact)         | :white_check_mark: | :white_check_mark: | The system ID.                                         |
| `name`            | string  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | The primary name of the company.                       |
| `description`     | string  |            :white_check_mark:             |        :x:         | :white_check_mark: | -                                                      |
| `currency`        | -       |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | -                                                      |
| `isin`            | -       |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | -                                                      |
| `ipo_date`        | -       |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | -                                                      |
| `fiscal_year_end` | -       |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | -                                                      |
| `street_address`  | -       |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | -                                                      |
| `state`           | string  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | -                                                      |
| `postal_code`     | -       |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | -                                                      |
| `city`            | string  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | -                                                      |
| `website_url`     | string  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | -                                                      |
| `officers`        | -       |            :white_check_mark:             |        :x:         | :white_check_mark: | -                                                      |
| `created_at`      | string  |                    :x:                    | :white_check_mark: | :white_check_mark: | A datetime string when this company was first created. |
| `updated_at`      | string  | ([updated since](../customizing/filters)) | :white_check_mark: | :white_check_mark: | A datetime string when this company was last updated.  |

### Relationship Response Schema

The slim relationship schema is used when the company is used as part of an include in another resource.

| Key    | Type    | Description                      |
|--------|---------|----------------------------------|
| `id`   | integer | The system ID for the company.   |
| `name` | string  | The primary name of the company. |

## Relationships & includes

By default, relationships apart from the sector are not included. See
the [includes section](../customizing/includes) for more information on how this works. The following relationships
are available:

- `brand` - The [brand](./brands.md) .
- `brands` - The [brands](./brands.md) .
- `gics_sector` - The [GICS Sector](./gics-sectors.md) .
- `stock_exchanges` - The [stock exchanges](./stock-exchanges.md) .
- `country` - The [country](./countries.md) .
- `latest_financials` - The [latest financials](./latest-financials.md) .
