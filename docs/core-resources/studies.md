# Studies

You may use the Studies endpoint to retrieve details about one or more studies.

## What are studies?

The studies resource returns overview information about BAV studies and their timelines. Both past and future studies
are available through the API.

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
| `is_active`         | boolean |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | -                                                                |
| `type`              | -       |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | -                                                                |
| `period`            | -       |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | -                                                                |
| `start_date`        | string  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | A datetime string when the fieldwork for this study was started. |
| `end_date`          | string  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | A datetime string when the fieldwork for this study ended.       |
| `data_available_at` | string  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | A datetime string when the final data was made available.        |
| `respondents`       | -       |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | -                                                                |
| `categories`        | -       |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | -                                                                |
| `data_updated_at`   | -       |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | -                                                                |
| `amount_of_cells`   | -       |            :white_check_mark:             |        :x:         | :white_check_mark: | -                                                                |
| `created_at`        | string  |                    :x:                    | :white_check_mark: | :white_check_mark: | A datetime string when this study was first created.             |
| `updated_at`        | string  | ([updated since](../customizing/filters)) | :white_check_mark: | :white_check_mark: | A datetime string when this study was last updated.              |

### Relationship Response Schema

The slim relationship schema is used when the study is used as part of an include in another resource.

| Key       | Type    | Description                    |
|-----------|---------|--------------------------------|
| `id`      | integer | The system ID for the study.   |
| `name`    | string  | The primary name of the study. |
| `period`  | -       | -                              |
| `country` | -       | -                              |
| `year`    | -       | -                              |


## Relationships & includes

By default, relationships apart from the sector are not included. See
the [includes section](../customizing/includes) for more information on how this works. The following relationships
are available:

- `country` - The [country](./countries.md) -.
- `year` - The [year](./years.md) -.
