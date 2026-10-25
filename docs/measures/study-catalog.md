---
sidebar_label: Study Catalog
---

# Study Catalog

Not every metric, measure or question is available in every study, and the answer options can differ between studies.
The study catalog endpoints tell you what a specific [study](../studies/studies.md) contains:

- [Brand metrics](#brand-metrics-in-a-study) - The [brand metrics](../metrics/metrics.md) available in the study, with
  the brandscape data columns for each.
- [Brand measures](#brand-measures-in-a-study) - The [brand measures](brand-measures.md) in the study, with the answer
  options used in that study.
- [Audience questions](#audience-questions-in-a-study) - The [BAV questions](bav-questions.md) in a question group
  that the study asked, with the answer options used in that study.
- [BAV questions](#bav-questions-in-a-study) - All [BAV questions](bav-questions.md) the study asked, and which study
  asked each one.

All of these endpoints require the `bav:brand-data` scope and are paginated.

## Brand metrics in a study

To list the brand metrics available in a study, such as Differentiation and Esteem, use:

```http request
GET /api/v2/studies/123/brand-metrics
```

Where `123` is the system ID of the study.

The endpoint returns only the active metrics that you have access to. By default, the results are sorted by
`sort_order` and `name`.

| Key                    | Type    |         Filterable         |      Sortable      | Description                                                                                  |
|------------------------|---------|:--------------------------:|:------------------:|----------------------------------------------------------------------------------------------|
| `id`                   | integer | :white_check_mark: (exact) | :white_check_mark: | The system ID of the metric.                                                                 |
| `key`                  | string  |     :white_check_mark:     | :white_check_mark: | The key of the metric, for example `differentiation`.                                        |
| `name`                 | string  |     :white_check_mark:     | :white_check_mark: | The name of the metric, for example "Differentiation".                                       |
| `description`          | string  |            :x:             |        :x:         | What the metric measures.                                                                    |
| `group`                | string  |            :x:             |        :x:         | The name of the [metric group](../metrics/metric-groups.md) the metric belongs to.           |
| `sort_order`           | integer |            :x:             | :white_check_mark: | The display order of the metric within its group.                                            |
| `is_core`              | boolean |     :white_check_mark:     |        :x:         | Whether the metric is a core BAV metric measured in the survey.                              |
| `is_legacy`            | boolean |     :white_check_mark:     |        :x:         | Whether the metric is a legacy metric kept for historical comparison.                        |
| `is_category_agnostic` | boolean |            :x:             |        :x:         | Whether the metric is independent of the category the brand is measured in.                  |
| `data_columns`         | array   |            :x:             |        :x:         | The brandscape data columns for the metric, one per score type. See below.                   |

Each item in `data_columns` contains:

- `score_type` - The score type: `value`, `percentile_rank`, `percentage`, `brandscape_index`, `category_index`,
  `construct` or `by_study`.
- `name` - The name of the score type, for example "Rank".
- `data_column` - The name of the column in the [brandscape data](../brand-data/brandscape-data.md), for example
  `differentiation_rank`.
- `description` - What the score type means.

The following additional filters are available:

- `group` - A comma-separated list of [metric group](../metrics/metric-groups.md) IDs to filter by.
- `updated_since` - Only return metrics updated on or after this date. See [filters](../customizing/filters.md).

## Brand measures in a study

To list the [brand measures](brand-measures.md) in a study, with the answer options used in that study, use:

```http request
GET /api/v2/studies/123/brand-measures
```

Where `123` is the system ID of the study.

| Key                    | Type    |         Filterable         |      Sortable      | Description                                                                                  |
|------------------------|---------|:--------------------------:|:------------------:|----------------------------------------------------------------------------------------------|
| `id`                   | integer | :white_check_mark: (exact) | :white_check_mark: | The system ID of the measure.                                                                |
| `key`                  | string  |     :white_check_mark:     | :white_check_mark: | The key of the measure.                                                                      |
| `label`                | string  |     :white_check_mark:     | :white_check_mark: | The label of the measure.                                                                    |
| `survey_display_label` | string  |            :x:             |        :x:         | The label shown to respondents in the survey, where it differs from `label`.                 |
| `group`                | string  |            :x:             |        :x:         | The name of the [brand measure group](brand-measure-groups.md) the measure belongs to.       |
| `type`                 | string  |     :white_check_mark:     | :white_check_mark: | The type of the measure, such as `boolean`, `seven_scalar` or `dictionary`.                  |
| `is_category_agnostic` | boolean |            :x:             |        :x:         | Whether the measure is independent of the category the brand is measured in.                 |
| `in_survey`            | boolean |     :white_check_mark:     | :white_check_mark: | Whether the measure is asked directly in the survey rather than calculated afterwards.      |
| `values`               | array   |            :x:             |        :x:         | The answer options used in this study. See [answer options](#answer-options).                |

The `updated_since` filter is also available. See [filters](../customizing/filters.md).

## Audience questions in a study

To list the respondent-level questions asked in a study, such as demographics and attitudes, with the answer options
used in that study, use:

```http request
GET /api/v2/studies/123/audience-questions
```

Where `123` is the system ID of the study.

The endpoint lists only the [BAV questions](bav-questions.md) that belong to a [question group](bav-question-groups.md).
Use the [BAV questions in a study](#bav-questions-in-a-study) endpoint to list all questions.

| Key                       | Type    |         Filterable         |      Sortable      | Description                                                                         |
|---------------------------|---------|:--------------------------:|:------------------:|-------------------------------------------------------------------------------------|
| `id`                      | integer | :white_check_mark: (exact) | :white_check_mark: | The system ID of the question.                                                      |
| `key`                     | string  |     :white_check_mark:     | :white_check_mark: | The key of the question.                                                            |
| `label`                   | string  |     :white_check_mark:     | :white_check_mark: | The label of the question.                                                          |
| `reporting_display_label` | string  |            :x:             |        :x:         | The label used for this question in reports, where it differs from `label`.         |
| `group`                   | string  |            :x:             |        :x:         | The name of the [question group](bav-question-groups.md) the question belongs to.   |
| `type`                    | string  |     :white_check_mark:     | :white_check_mark: | The type of the question.                                                           |
| `values`                  | array   |            :x:             |        :x:         | The answer options used in this study. See [answer options](#answer-options).       |

The `updated_since` filter is also available. See [filters](../customizing/filters.md).

### Answer options

The `values` field on the brand measures and audience questions endpoints lists the answer options used in the study.
Each option has a `value` (what appears in the data) and a `label` (what the value means):

```json
[
    {
        "value": 1,
        "label": "Male"
    },
    {
        "value": 2,
        "label": "Female"
    }
]
```

The same measure or question can have different answer options in different studies, so always read the options for
the study that you use. Boolean measures and questions without stored options use `1` (Yes) and `0` (No).

## BAV questions in a study

To list all of the [BAV questions](bav-questions.md) a study asked, use:

```http request
GET /api/v2/studies/123/bav-questions
```

Where `123` is the system ID of the study.

Unlike the [audience questions](#audience-questions-in-a-study) endpoint, this also lists questions that are not in a
question group, and does not include the group and answer options of each question.

For a fused study, the questions come from the studies it was fused from. Each row names the study that asked the
question. The endpoint lists only the studies that you have access to.

By default, the results are sorted by `measurable_id` (the question ID). You can also sort by `id`, `created_at` and
`updated_at`.

| Key          | Type   | Description                                                                                                                                       |
|--------------|--------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| `study`      | object | The [study](../studies/studies.md) that asked the question, with its `id`, `name`, `period`, `type`, `study_type`, `study_type_label`, `country` and `year`. |
| `question`   | object | The BAV question, with its `id`, `label` and `key`.                                                                                               |
| `created_at` | string | A datetime string when this record was first created.                                                                                             |
| `updated_at` | string | A datetime string when this record was last updated.                                                                                              |

The following filters are available:

- `questions` - A comma-separated list of BAV question IDs to filter by.
- `updated_since` - Only return records changed on or after this date. See [filters](../customizing/filters.md).
