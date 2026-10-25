---
sidebar_label: Managing Audiences
---

# Managing Audiences

You can read [audiences](audiences.md), and you can also create your own audiences through the API. You can define who
is part of them. Then you deploy them to make their data available.

## How audiences are built

An audience has these layers:

- **Audience.** The audience itself with its name, description and visibility.
- **Definitions.** An audience has one or more definitions. Each definition reads from a dataset (`bav` or
  `audience-origin`) and uses the questions of a base study. A definition can also be limited to a specific country or
  study. A definition that is not limited applies to all of the audience's data.
- **Segments.** Each definition contains segments. A segment is a group of conditions that a respondent has to meet.
  The `within_segment_operator` decides how the conditions inside the segment combine (`AND` requires all of them, `OR`
  requires any of them). The `between_segments_operator` decides how the segment combines with the segment before it.
  The API combines segments in their `sort_order`.
- **Segment metrics.** Each segment contains metrics. A segment metric points to an
  [Audience Origin metric](../audience-origin/metrics.md), a [BAV brand measure](../measures/brand-measures.md) or a
  [BAV question](../measures/bav-questions.md) and the values a respondent must have given.

A new audience has no data. When the definition is complete, [deploy](#deploy-an-audience) the audience. The API builds
the data in the background, and the data shows in the data endpoints a short time after. If you change the definition
of an audience, deploy it again to show the change in its data.

To see if an audience needs a new deployment, compare `definitions_updated_at` with `deployed_at` on
the [audience](audiences.md). If `definitions_updated_at` is later, the audience changed after the last deployment.

## Access

To read audiences, segments and segment metrics, you need the `bav:shared-resources` scope, the same as for the other
[Audiences](audiences.md) endpoints.

To create, update, delete and deploy audiences, you need the `bav:audiences:write` scope. This scope shows as **Build
Audiences** when you create your API key. Your user also needs the permission to build audiences in The Fount.

The usual audience permissions also apply:

- You can update only the audiences that you own or that are shared with you with edit rights. If you have access to
  manage all audiences, you can update all audiences.
- You can delete only the audiences that you own.

## Create an audience

To create an audience, send a `POST` request to the audiences endpoint:

```http request
POST /api/v2/audiences
```

You can create an empty audience with only a name. You can also create the full audience with its definitions,
segments and metrics in one call. You can create definitions only in this request.

```json
{
    "name": "Frequent Flyers",
    "description": "People who fly at least once a month.",
    "is_active": true,
    "is_public": false,
    "definitions": [
        {
            "dataset": "bav",
            "base_study_id": 635,
            "definitionable_type": "study",
            "definitionable_id": 635,
            "segments": [
                {
                    "name": "Flyers",
                    "sort_order": 0,
                    "within_segment_operator": "AND",
                    "between_segments_operator": "OR",
                    "metrics": [
                        {
                            "metric_type": "bav-study-question",
                            "metric_id": 12,
                            "operator": "is",
                            "values": ["1"]
                        }
                    ]
                }
            ]
        }
    ]
}
```

The response has the status code `201` and contains the created [audience](audiences.md). The response includes the
definitions, segments and metrics of the audience.

### Request body

| Key           | Type    | Required | Description                                                                                                         |
|---------------|---------|:--------:|---------------------------------------------------------------------------------------------------------------------|
| `name`        | string  |   :x:    | The name of the audience. Maximum 255 characters.                                                                   |
| `description` | string  |   :x:    | A description of the audience.                                                                                      |
| `is_active`   | boolean |   :x:    | Whether the audience is active.                                                                                     |
| `is_public`   | boolean |   :x:    | Whether the audience is available to all users (true) or only to you and the users you share it with (false).       |
| `group_id`    | integer |   :x:    | The ID of the [audience group](audience-groups.md) to put the audience in.                                          |
| `user_id`     | integer |   :x:    | The ID of the user who owns the audience. The API accepts only your own user ID. If you do not send it, you become the owner. |
| `definitions` | array   |   :x:    | The definitions of the audience. See below. Used only when you create an audience.                                  |

Each definition in `definitions` accepts:

| Key                   | Type    |      Required      | Description                                                                                                                         |
|-----------------------|---------|:------------------:|-------------------------------------------------------------------------------------------------------------------------------------|
| `dataset`             | string  | :white_check_mark: | The dataset the definition reads from. One of `bav`, `audience-origin`, `best-countries` or `momentum`.                             |
| `base_study_id`       | integer | :white_check_mark: | The ID of the [study](../studies/studies.md) whose questions the definition uses.                                                   |
| `definitionable_type` | string  |        :x:         | What the definition is limited to: `country` or `study`. Leave empty for a definition that applies to all of the audience's data.  |
| `definitionable_id`   | integer |        :x:         | The ID of the country or study the definition is limited to.                                                                        |
| `segments`            | array   |        :x:         | The segments in the definition. Each segment accepts the same fields as when you [create a segment](#create-a-segment), except `definition_id`.   |

### Validation

The API returns validation errors with the status code `422`. The errors use the
standard [error format](../errors.md). The validation rules include:

- `definitions.*.dataset` and `definitions.*.base_study_id` are required for each definition.
- `within_segment_operator` and `between_segments_operator` must be `AND` or `OR`.
- `metric_type` and `metric_id` are required for each segment metric.
- You cannot set `brands` on an Audience Origin metric.

## Update an audience

To update the name, description, visibility, group or owner of an audience, send a `PUT` or `PATCH` request:

```http request
PUT /api/v2/audiences/123
```

Where `123` is the system ID of the audience.

The request accepts the same top-level fields as the create request (`name`, `description`, `is_active`, `is_public`,
`group_id` and `user_id`). The API changes only the fields that you send. This endpoint does not change the definitions
of the audience. To change who is part of the audience, use the [segment](#segments) and
[segment metric](#segment-metrics) endpoints.

The response contains the updated [audience](audiences.md). The response includes the definitions, segments, metrics,
user and group of the audience.

## Delete an audience

To delete an audience, send a `DELETE` request:

```http request
DELETE /api/v2/audiences/123
```

Where `123` is the system ID of the audience.

The response contains the [audience](audiences.md) that was deleted.

## Segments

Each segment is in one of the definitions of the audience. To find the definitions of an audience and their IDs, get
the audience with the `definitions` include:

```http request
GET /api/v2/audiences/123?include=definitions.segments.metrics
```

### List all segments

To list all of the segments of an audience, across all of its definitions, use the list endpoint:

```http request
GET /api/v2/audiences/123/segments
```

Where `123` is the system ID of the audience.

### Get a segment

```http request
GET /api/v2/audiences/123/segments/456
```

Where `123` is the system ID of the audience and `456` is the system ID of the segment.

### Create a segment

To add a segment to one of the audience's definitions, send a `POST` request. You can create the metrics of the segment
in the same call.

```http request
POST /api/v2/audiences/123/segments
```

```json
{
    "definition_id": 12,
    "name": "Frequent flyers",
    "sort_order": 10,
    "within_segment_operator": "AND",
    "between_segments_operator": "OR",
    "metrics": [
        {
            "metric_type": "audience-origins-metric",
            "metric_id": 1520,
            "operator": "is",
            "values": ["1", "2"]
        }
    ]
}
```

| Key                         | Type    |              Required              | Description                                                                                                    |
|-----------------------------|---------|:----------------------------------:|----------------------------------------------------------------------------------------------------------------|
| `definition_id`             | integer | :white_check_mark: (when creating) | The ID of the definition the segment belongs to. It must be a definition of the audience in the path.          |
| `sort_order`                | integer |                :x:                 | The position of the segment in its definition. The API combines segments in this order. Minimum `0`.           |
| `name`                      | string  |                :x:                 | The name of the segment. Maximum 255 characters.                                                               |
| `within_segment_operator`   | string  |                :x:                 | How the metrics in this segment combine. `AND` requires all of them, `OR` requires any.                        |
| `between_segments_operator` | string  |                :x:                 | How this segment combines with the one before it. `AND` or `OR`.                                               |
| `metrics`                   | array   |                :x:                 | The metrics in the segment. Each metric accepts the same fields as when you [create a segment metric](#create-a-segment-metric). Used only when you create a segment. |

The response has the status code `201` and contains the created segment with its metrics.

### Update a segment

```http request
PUT /api/v2/audiences/123/segments/456
```

The request accepts the same fields as the create request, except `metrics`. To manage the metrics of the segment, use
the [segment metric endpoints](#segment-metrics). To move a segment to another definition of the same audience, change
`definition_id`.

### Delete a segment

```http request
DELETE /api/v2/audiences/123/segments/456
```

When you delete a segment, the API also deletes its metrics. The response has the status code `204` and no content.

### Segment schema

| Key                         | Type    |                Filterable                 |      Sortable      |    Configurable    | Description                                                                                        |
|-----------------------------|---------|:-----------------------------------------:|:------------------:|:------------------:|----------------------------------------------------------------------------------------------------|
| `id`                        | integer |        :white_check_mark: (exact)         | :white_check_mark: | :white_check_mark: | The system ID.                                                                                     |
| `uuid`                      | string  |            :white_check_mark:             |        :x:         | :white_check_mark: | The unique identifier for the segment.                                                             |
| `sort_order`                | integer |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | The position of the segment within its definition.                                                 |
| `name`                      | string  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | The name of the segment.                                                                           |
| `within_segment_operator`   | string  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | How the metrics in the segment combine: `AND` or `OR`.                                             |
| `between_segments_operator` | string  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | How the segment combines with the one before it: `AND` or `OR`.                                    |
| `created_at`                | string  |                    :x:                    | :white_check_mark: | :white_check_mark: | A datetime string when this segment was first created.                                             |
| `updated_at`                | string  | ([updated since](../customizing/filters)) | :white_check_mark: | :white_check_mark: | A datetime string when this segment was last updated.                                              |
| `metrics`                   | array   |                    :x:                    |        :x:         |        :x:         | The [segment metrics](#segment-metric-schema) that make up the segment. Always included.           |

The following relationships are available as includes on the segment endpoints:

- `definition` - The audience definition that the segment belongs to.

## Segment metrics

A segment metric is a single condition in a segment. It names a metric and the values a respondent must have given.

### List all segment metrics

```http request
GET /api/v2/audiences/123/segments/456/metrics
```

Where `123` is the system ID of the audience and `456` is the system ID of the segment.

### Get a segment metric

```http request
GET /api/v2/audiences/123/segments/456/metrics/789
```

Where `789` is the system ID of the segment metric.

### Create a segment metric

```http request
POST /api/v2/audiences/123/segments/456/metrics
```

```json
{
    "metric_type": "bav-study-measure",
    "metric_id": 85,
    "operator": "is",
    "brands": [148],
    "values": ["1"]
}
```

| Key           | Type    |      Required      | Description                                                                                                                                                                                                        |
|---------------|---------|:------------------:|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `metric_type` | string  | :white_check_mark: | The kind of metric. One of `audience-origins-metric` ([Audience Origin metric](../audience-origin/metrics.md)), `bav-study-measure` ([brand measure](../measures/brand-measures.md)) or `bav-study-question` ([BAV question](../measures/bav-questions.md)). |
| `metric_id`   | integer | :white_check_mark: | The ID of the metric, of the kind given in `metric_type`.                                                                                                                                                          |
| `operator`    | string  |        :x:         | How the API compares the values. The accepted operators depend on the type of the metric. See [operators](#operators). Defaults to `eq`.                                                                            |
| `brands`      | array   |     Sometimes      | The IDs of the [brands](../brands/brands.md) the metric applies to. Required for metrics that support a brand filter (see `supports_brands_filter` in the response).                                                |
| `values`      | array   |        :x:         | The values a respondent must have given. The valid values depend on the metric. For Audience Origin metrics, the API validates the values against the type and answer options of the metric.                        |

The response has the status code `201` and contains the created segment metric.

:::caution Every metric needs values
You cannot deploy an audience if one of its segment metrics has no selected values.
:::

### Update a segment metric

```http request
PUT /api/v2/audiences/123/segments/456/metrics/789
```

The request accepts the same fields as the create request.

### Delete a segment metric

```http request
DELETE /api/v2/audiences/123/segments/456/metrics/789
```

The response has the status code `204` and no content.

### Operators

The operators you can use depend on the type of the metric:

| Metric type                                         | Operators                                                                       |
|-----------------------------------------------------|---------------------------------------------------------------------------------|
| `boolean`                                           | `true` (is selected), `false` (is not selected)                                 |
| `dictionary`                                        | `is`, `isnot`                                                                   |
| `string`, `text`                                    | `eq` (equals), `neq` (does not equal)                                           |
| `integer`, `decimal`, `seven_scalar`, `six_scalar`  | `eq`, `neq`, `gt`, `gte`, `lt`, `lte`                                           |

### Segment metric schema

| Key          | Type    | Description                                                                                                                       |
|--------------|---------|-----------------------------------------------------------------------------------------------------------------------------------|
| `id`         | integer | The system ID of the segment metric.                                                                                              |
| `metric`     | object  | The metric. See below.                                                                                                            |
| `operator`   | object  | How the API compares the values. Contains `id` (for example `is`), `label`, `is_multiple_choice` and `mysql_operator`.            |
| `brands`     | array   | The IDs of the brands the metric applies to, for metrics that support a brand filter.                                             |
| `values`     | object  | The values a respondent must have given. `raw` is the list of values and `formatted` is a list of objects with an `id` and `label`. |
| `created_at` | string  | A datetime string when this segment metric was first created.                                                                     |
| `updated_at` | string  | A datetime string when this segment metric was last updated.                                                                      |

The `metric` object contains:

| Key                      | Type    | Description                                                                                                  |
|--------------------------|---------|--------------------------------------------------------------------------------------------------------------|
| `id`                     | integer | The system ID of the metric.                                                                                 |
| `type`                   | string  | The kind of metric: `audience-origins-metric`, `bav-study-measure` or `bav-study-question`.                  |
| `label`                  | string  | The name of the metric.                                                                                      |
| `key`                    | string  | The key of the metric.                                                                                       |
| `dataset`                | string  | The acronym of the dataset the metric belongs to, for example `BAV` or `AO`.                                 |
| `default_value`          | mixed   | The default value for the metric.                                                                            |
| `supports_brands_filter` | boolean | Whether the survey asks the metric per brand. If it does, you must set `brands`.                             |
| `group`                  | object  | The group the metric belongs to, with an `id` and `label`. Null if the metric has no group.                  |
| `variable`               | string  | The Audience Origin questionnaire variable. Only present for Audience Origin metrics.                        |

## Audience studies

To see the studies that an audience has data in, with population projections, see
[Get the studies for an audience](./audiences.md#get-the-studies-for-an-audience).

## Deploy an audience

When your audience has a definition, deploy it to build its data:

```http request
GET /api/v2/audiences/123/deploy
```

Where `123` is the system ID of the audience.

The API puts the audience in a queue for deployment and builds the data in the background. The data shows in the data
endpoints a short time after the request returns. Each time you change the definition, deploy the audience again.

A successful request returns:

```json
{
    "data": {
        "message": "The audience has been deployed."
    }
}
```

If the API cannot deploy the audience, the endpoint returns the status code `422` and a message that tells why. This
occurs when:

- The audience has no definitions.
- One or more segment metrics have no values selected. The message lists the names of these metrics.

```json
{
    "data": {
        "message": "The audience has no definitions and cannot be deployed."
    }
}
```
