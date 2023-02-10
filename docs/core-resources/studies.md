# Studies

## What are studies?

A fundamental element of our datasets are studies. A study is a collection of data from respondents at a specific point
in time. Most markets in BAV are for example covered at most once a year with the exception of the US which is done
quarterly.

Studies are a primary way of filtering our [brandscape data](./brandscape.md) and also contains information about the
study iself, such as when it was conducted and how many respondents it had.

## List all studies

To list all of the studies and browse them via the API, use the list endpoint:

```http request
GET /api/v2/studies
```

## Get a study

You may also directly retrieve a study's details if you already have its system ID.

```http request
GET /api/v2/studies/123
```

Where `123` is the system ID of the study.

## Schema

### Full response schema

| Key                 | Type    |                Filterable                 |      Sortable      |    Configurable    | Description                                                      |
|---------------------|---------|:-----------------------------------------:|:------------------:|:------------------:|------------------------------------------------------------------|
| `id`                | integer |        :white_check_mark: (exact)         | :white_check_mark: | :white_check_mark: | The system ID.                                                   |
| `name`              | string  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | The name of the study.                                           |
| `is_active`         | boolean |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | Whether this study should be used.                               |
| `type`              | object  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | Whether this is a full BAV study or a smaller study.             |
| `period`            | object  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | The period for the study (Full Year, Quarter).                   |
| `start_date`        | string  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | A datetime string when the fieldwork for this study was started. |
| `end_date`          | string  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | A datetime string when the fieldwork for this study ended.       |
| `data_available_at` | string  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | A datetime string when the final data was made available.        |
| `respondents`       | integer |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | How many individual respondents the study had.                   |
| `categories`        | integer |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | How many categories the study had.                               |
| `data_updated_at`   | string  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | When the data for the study was last updated.                    |
| `amount_of_cells`   | integer |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | The total amount of cells in the study.                          |
| `amount_of_brands`  | integer |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | How many brands the study had.                                   |
| `created_at`        | string  |                    :x:                    | :white_check_mark: | :white_check_mark: | A datetime string when this study was first created.             |
| `updated_at`        | string  | ([updated since](../customizing/filters)) | :white_check_mark: | :white_check_mark: | A datetime string when this study was last updated.              |

### Relationship Response Schema

The slim relationship schema is used when the study is used as part of an include in another resource.

| Key       | Type    | Description                                    |
|-----------|---------|------------------------------------------------|
| `id`      | integer | The system ID for the study.                   |
| `name`    | string  | The primary name of the study.                 |
| `period`  | object  | The period for the study (Full Year, Quarter). |
| `country` | object  | The country where the study was done.          |
| `year`    | object  | The year when the study was done.              |

## Relationships & includes

By default, relationships apart from the sector are not included. See
the [includes section](../customizing/includes) for more information on how this works. The following relationships
are available:

- `country` - The [country](countries.md) country where the study was done.
- `year` - The [year](years.md) year when the study was done.
