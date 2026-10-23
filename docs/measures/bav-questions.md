# BAV Questions

## What are BAV questions?

BAV questions are the respondent-level questions that BAV asks, such as demographics, opinions and behaviors. Unlike
[brand measures](brand-measures.md), they are asked about the respondent rather than about a brand.

[Audiences](../audiences/audiences.md) are defined from these questions. Use these endpoints to find the questions that
you can [build an audience](../audiences/managing-audiences.md) from, and the studies that asked them.

Questions are organized in [BAV question groups](bav-question-groups.md).

## List all BAV questions

To list all of the BAV questions and browse them via the API, use the list endpoint:

```http request
GET /api/v2/bav-questions
```

## Get a BAV question

You may also directly retrieve a BAV question's details if you already have its system ID.

```http request
GET /api/v2/bav-questions/123
```

Where `123` is the system ID of the BAV question.

## Schema

### Full response schema

| Key          | Type    |                Filterable                 |      Sortable      |    Configurable    | Description                                                                                                |
|--------------|---------|:-----------------------------------------:|:------------------:|:------------------:|------------------------------------------------------------------------------------------------------------|
| `id`         | integer |        :white_check_mark: (exact)         | :white_check_mark: | :white_check_mark: | The system ID.                                                                                             |
| `label`      | string  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | The label of the question, for example "Gender". The filter matches partial labels in any language.        |
| `key`        | string  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | The unique key of the question, for example `gender`. The filter matches partial keys.                     |
| `type`       | string  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | The type of the question, which tells you how to read its answers, such as `dictionary`, `boolean` or `integer`. |
| `crt_id`     | integer |        :white_check_mark: (exact)         | :white_check_mark: | :white_check_mark: | The CRT ID of the question.                                                                                |
| `created_at` | string  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | A datetime string when this question was first created.                                                    |
| `updated_at` | string  | ([updated since](../customizing/filters)) | :white_check_mark: | :white_check_mark: | A datetime string when this question was last updated.                                                     |

### Relationship Response Schema

The slim relationship schema is used when the BAV question is used as part of another resource.

| Key     | Type    | Description                              |
|---------|---------|------------------------------------------|
| `id`    | integer | The system ID for the question.          |
| `label` | string  | The label of the question.               |
| `key`   | string  | The unique key of the question.          |

## Relationships & includes

By default, relationships are not included. See
the [includes section](../customizing/includes) for more information on how this works. The following relationships
are available:

- `group` - The [BAV question group](bav-question-groups.md) that the question belongs to.
- `studies` - The [studies](../studies/studies.md) that asked the question. Only studies you have access to are
  included.

## Studies that asked a BAV question

To list every study that asked a BAV question, use the studies endpoint. This is useful to check where a question has
answers before you build an audience definition with it.

```http request
GET /api/v2/bav-questions/123/studies
```

Where `123` is the system ID of the BAV question.

Only studies you have access to are listed. Fused studies take their questions from the studies they were fused from,
so they are listed under those source studies rather than on their own.

The results are sorted by `study_id` by default. You may also sort by `id`, `created_at` and `updated_at`.

| Key          | Type   | Description                                                                                                                                       |
|--------------|--------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| `study`      | object | The [study](../studies/studies.md) that asked the question, with its `id`, `name`, `period`, `type`, `study_type`, `study_type_label`, `country` and `year`. |
| `question`   | object | The BAV question, using the relationship schema above.                                                                                            |
| `created_at` | string | A datetime string when this record was first created.                                                                                             |
| `updated_at` | string | A datetime string when this record was last updated.                                                                                              |

The following filters are available:

- `studies` - A comma-separated list of study IDs to filter by.
- `updated_since` - Only return records changed on or after this date. See [filters](../customizing/filters.md).

To go the other way and list the questions a specific study asked, see the [study catalog](study-catalog.md).
