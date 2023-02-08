# Stock Exchanges

You may use the Stock Exchanges endpoint to retrieve details about one or more stock exchanges.

## What are stock exchanges?



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
| `code`          | -       |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | -                                                             |
| `suffix`        | string  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | -                                                             |
| `operating_mic` | -       |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | -                                                             |
| `currency`      | -       |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | -                                                             |
| `created_at`    | string  |                    :x:                    | :white_check_mark: | :white_check_mark: | A datetime string when this stock exchange was first created. |
| `updated_at`    | string  | ([updated since](../customizing/filters)) | :white_check_mark: | :white_check_mark: | A datetime string when this stock exchange was last updated.  |

### Relationship Response Schema

The slim relationship schema is used when the stock exchange is used as part of an include in another resource.

| Key             | Type    | Description                           |
|-----------------|---------|---------------------------------------|
| `id`            | integer | The system ID for the stock exchange. |
| `name`          | string  | The name of the stock exchange.       |
| `code`          | -       | -                                     |
| `suffix`        | string  | -                                     |
| `operating_mic` | -       | -                                     |

## Relationships & includes

By default, relationships apart from the sector are not included. See
the [includes section](../customizing/includes) for more information on how this works. The following relationships
are available:

- `country` - The [country](./countries.md) .
