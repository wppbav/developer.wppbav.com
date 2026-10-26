---
sidebar_label: Query Data
---

# Querying Audience Origin Data

The query endpoint returns Audience Origin data for a set of [metrics](metrics.md) in one or more Audience Origin
studies. The endpoint returns the data for an [audience](../audiences/audiences.md). The default audience is All
Adults.

## Creating a query

Send the query as a `POST` request with a JSON body:

```http request
POST /api/v2/audience-origin/query
```

```json
{
    "filter": {
        "studies": [701],
        "metric_keys": ["gender"],
        "audience": 1
    }
}
```

To select the metrics to get data for, use `metrics`, `metric_keys`, `metric_group_keys` or `metric_group_ids`. You can
combine these parameters. A group returns every metric in it.

### Parameters

Send all parameters inside the `filter` object.

| Key                 | Type    |      Required      | Description                                                                                                                          |
|---------------------|---------|:------------------:|--------------------------------------------------------------------------------------------------------------------------------------|
| `studies`           | array   | :white_check_mark: | The IDs of the Audience Origin [studies](../studies/studies.md) to read from. The endpoint accepts only active Audience Origin studies that you have access to. |
| `metrics`           | array   |        :x:         | The IDs of the [metrics](metrics.md) to return.                                                                                      |
| `metric_keys`       | array   |        :x:         | The keys of the [metrics](metrics.md) to return.                                                                                     |
| `metric_group_keys` | array   |        :x:         | The keys of [metric groups](metric-groups.md) to return every metric from.                                                           |
| `metric_group_ids`  | array   |        :x:         | The IDs of [metric groups](metric-groups.md) to return every metric from.                                                            |
| `quarters`          | array   |        :x:         | The quarters of the year to include, as numbers from `1` to `4`. By default, the endpoint includes all quarters.                     |
| `audience`          | integer |        :x:         | The ID of the [audience](../audiences/audiences.md) to get the data for. Defaults to All Adults (`1`).                               |

If any of the parameters are invalid, for example a study that is not an Audience Origin study or a metric key that
does not exist, the endpoint returns the status code `422` with the validation errors.

## Schema

The response contains a `data` array with one data point per study. Each data point contains a few metadata fields and
a `metrics` object with the data for each metric.

```json
{
    "data": [
        {
            "study": "United Kingdom 2025",
            "study_id": 701,
            "year": "2025",
            "year_id": 45,
            "country": "United Kingdom",
            "country_id": 77,
            "quarter": null,
            "audience_id": 1,
            "audience": "All Adults",
            "metrics": {
                "gender": {
                    "id": 1520,
                    "key": "gender",
                    "name": "Gender",
                    "label": "Gender",
                    "type": "dictionary",
                    "values": {
                        "1": {
                            "value": 1,
                            "label": "Male",
                            "score": 48.7,
                            "full_label": "Gender: Male"
                        },
                        "2": {
                            "value": 2,
                            "label": "Female",
                            "score": 51.3,
                            "full_label": "Gender: Female"
                        }
                    },
                    "dictionary": {
                        "1": "Male",
                        "2": "Female"
                    },
                    "primaryGroup": "Demographics",
                    "secondaryGroup": "Gender"
                }
            }
        }
    ]
}
```

### Data point

| Key           | Type    | Description                                                            |
|---------------|---------|------------------------------------------------------------------------|
| `study`       | string  | The name of the study.                                                 |
| `study_id`    | integer | The system ID of the study.                                            |
| `year`        | string  | The year of the study.                                                 |
| `year_id`     | integer | The system ID of the year.                                             |
| `country`     | string  | The name of the country (market) of the study.                         |
| `country_id`  | integer | The system ID of the country.                                          |
| `quarter`     | integer | The quarter of the data point, when it applies. Otherwise null.        |
| `audience_id` | integer | The system ID of the audience the data is for.                         |
| `audience`    | string  | The name of the audience the data is for.                              |
| `metrics`     | object  | The data for each metric, keyed by the metric `key`. See below.        |

### Metric data

| Key              | Type    | Description                                                                                                   |
|------------------|---------|---------------------------------------------------------------------------------------------------------------|
| `id`             | integer | The system ID of the [metric](metrics.md).                                                                    |
| `key`            | string  | The key of the metric.                                                                                        |
| `name`           | string  | The name of the metric.                                                                                       |
| `label`          | string  | The label of the metric. If there is no label, this is the name.                                              |
| `type`           | string  | The type of the metric, such as `dictionary`, `boolean`, `integer` or `decimal`.                              |
| `values`         | object  | The scores for the metric, keyed by value. See below.                                                         |
| `dictionary`     | object  | The answer options for the metric, as a map of values to labels.                                             |
| `primaryGroup`   | string  | The name of the parent [metric group](metric-groups.md), if any.                                              |
| `secondaryGroup` | string  | The name of the metric group the metric belongs to, if any.                                                   |

The structure of `values` depends on the type of the metric:

- **Dictionary and integer metrics.** One entry per value, with the `value`, its `label`, the `score` and a
  `full_label` that combines the metric label and the value label. The score is the weighted percentage of respondents
  who gave that answer.
- **Decimal metrics.** A single `average` entry with the weighted average as the `score`.
- **Boolean metrics.** A plain map with the weighted percentage of respondents for `1` (yes) and `0` (no).

All scores are weighted.
