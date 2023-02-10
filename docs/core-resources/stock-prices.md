# Stock Prices

## What are stock prices?

Stock prices are the prices of a company's stock on a particular stock exchange. They are used to calculate the value of
a company. We collect stock prices for all companies on all stock exchanges that belong to brands that are covered in
BAV.

## List all stock prices

To list all of the stock prices and browse them via the API, use the list endpoint:

```http request
GET /api/v2/stock-prices
```

## Get a stock price

You may also directly retrieve a stock price's details if you already have its system ID.

```http request
GET /api/v2/stock-prices/123
```

Where `123` is the system ID of the stock price.

## Schema

### Full response schema

| Key                    | Type    |                Filterable                 |      Sortable      |    Configurable    | Description                                                |
|------------------------|---------|:-----------------------------------------:|:------------------:|:------------------:|------------------------------------------------------------|
| `id`                   | integer |        :white_check_mark: (exact)         | :white_check_mark: | :white_check_mark: | The system ID.                                             |
| `date`                 | -       |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | -                                                          |
| `open_price`           | -       |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | -                                                          |
| `close_price`          | -       |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | -                                                          |
| `adjusted_close_price` | -       |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | -                                                          |
| `high_price`           | -       |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | -                                                          |
| `low_price`            | -       |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | -                                                          |
| `trading_volume`       | -       |            :white_check_marl:             | :white_check_mark: | :white_check_mark: | -                                                          |
| `created_at`           | string  |                    :x:                    | :white_check_mark: | :white_check_mark: | A datetime string when this stock price was first created. |
| `updated_at`           | string  | ([updated since](../customizing/filters)) | :white_check_mark: | :white_check_mark: | A datetime string when this stock price was last updated.  |

## Relationships & includes

By default, relationships apart from the sector are not included. See
the [includes section](../customizing/includes) for more information on how this works. The following relationships
are available:

- `company` - The [company](./companies.md).
- `stock_exchange` - The [stock exchange](./stock-exchanges.md).
