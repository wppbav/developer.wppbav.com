# Audiences

You may use the Audiences endpoint to retrieve details about one or more audiences.

## What are audiences?

Audiences are the core of all our datasets. An audience is a group of respondents, such as women aged 18-34. Brand
data is always read for a study and an audience.

Examples of audiences include: All Adults (everyone), Female, Age 18-25, etc.

For the BAV dataset they correspond to the available cuts of data that you can access on audiences. For the Best
Countries dataset they correspond to a set of filters that you can then query the dataset with.

Audiences can be active and inactive. Your application should not display inactive audiences to users even if they are
available through the API.

Audiences can also be public/private. Public audiences are available to all users across the group. Private audiences
are only accessible by the user who owns them and the users they have been shared with. The API only returns the
audiences you have access to: public audiences, your own audiences and audiences shared with you.

Audiences are either standard audiences provided by The Fount (`is_standard`) or audiences built by users. A new
audience has no data until it is deployed.

Audiences in turn belong to [audience groups](audience-groups.md). These groups can be used to create a better
selection experience in an interface as the number of audiences can be plentiful.

:::tip Creating and managing audiences

This page covers reading audiences. To create, update, delete and deploy audiences, and to manage their definitions,
segments and metrics, see [Managing audiences](managing-audiences.md).

:::

## List all audiences

To list all of the audiences and browse them via the API, use the list endpoint:

```http request
GET /api/v2/audiences
```

## Get a single audience

You may also directly retrieve an audience's details if you already have its system ID.

```http request
GET /api/v2/audiences/1
```

Where `1` is the system ID of the audience. Include `definitions.segments.metrics` to get its full definition.

:::note All adults is the base audiences
The All Adults audience is our definition of "unfiltered" or "everyone". It always has the system ID of 1.
:::

## Get the studies for an audience

To list the studies an audience has data in, along with the audience's size in each study, use:

```http request
GET /api/v2/audiences/1/studies
```

Where `1` is the system ID of the audience. An audience that has not been deployed has no studies. This endpoint is
paginated and returns the following for each study:

| Key           | Type    | Description                                                                                       |
|---------------|---------|---------------------------------------------------------------------------------------------------|
| `study`       | object  | The [study](../studies/studies.md#relationship-response-schema), with its `country` and `year`.   |
| `respondents` | integer | The number of respondents in this study who are in the audience.                                  |
| `population`  | integer | The population projection: the number of people the audience represents in the study's market. Calculated when the audience is deployed. `null` for markets without a population figure to project to. |

## Schema

### Full response schema

| Key                       | Type    |                Filterable                 |      Sortable      |    Configurable    | Description                                                                                                                                         |
|---------------------------|---------|:-----------------------------------------:|:------------------:|:------------------:|-----------------------------------------------------------------------------------------------------------------------------------------------------|
| `id`                      | integer |        :white_check_mark: (exact)         | :white_check_mark: | :white_check_mark: | The system ID.                                                                                                                                      |
| `name`                    | string  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | The display name of the audience.                                                                                                                   |
| `description`             | string  |                    :x:                    |        :x:         | :white_check_mark: | A more detailed description (optional) of the audience.                                                                                             |
| `is_active`               | boolean |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | Whether this audience is active (should be used) or not. Please don't show inactive audiences in a user interface.                                  |
| `is_public`               | boolean |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | Whether this audience is publicly available to everyone (true) or restricted (false).                                                               |
| `is_standard`             | boolean |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | Whether the audience is one of The Fount's standard audiences.                                                                                      |
| `available_for_diversity` | boolean |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | Whether this audience can be used for diversity analysis (the Consumer Equality Equation study).                                                    |
| `is_ethnic_minority`      | boolean |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | Whether this audience represents an ethnic minority group.                                                                                          |
| `deployed_at`             | string  |                    :x:                    | :white_check_mark: | :white_check_mark: | A datetime string when the audience was last deployed. `null` if it has never been deployed.                                                        |
| `definitions_updated_at`  | string  |                    :x:                    | :white_check_mark: | :white_check_mark: | A datetime string when the audience's segments last changed. If this is later than `deployed_at`, the audience must be deployed again for the change to show in its data. |
| `deleted_at`              | string  |                    :x:                    |        :x:         | :white_check_mark: | Always `null`. Deleted audiences are not returned.                                                                                                  |
| `url`                     | string  |                    :x:                    |        :x:         |        :x:         | The URL to view the audience in The Fount.                                                                                                          |
| `created_at`              | string  |                    :x:                    | :white_check_mark: | :white_check_mark: | A datetime string when this audience was first created.                                                                                             |
| `updated_at`              | string  | ([updated since](../customizing/filters.md)) | :white_check_mark: | :white_check_mark: | A datetime string when this audience was last updated.                                                                                              |

The `group`, `user` and `definitions` keys are added when the matching relationship is [included](#relationships--includes).

:::caution Removed fields

`available_for_bav`, `available_for_bc` and `bc_filters` are no longer part of the full audience response. The first
two are still part of the relationship schema below.

:::

### Relationship Response Schema

The slim relationship schema is used when the audience is used as part of an include in another resource, for example
the `audiences` include on [audience groups](audience-groups.md).

| Key                 | Type    | Description                                                                                                        |
|---------------------|---------|--------------------------------------------------------------------------------------------------------------------|
| `id`                | integer | The system ID for the audience.                                                                                    |
| `name`              | string  | The primary name of the audience.                                                                                  |
| `is_active`         | boolean | Whether this audience is active (should be used) or not. Please don't show inactive audiences in a user interface. |
| `is_public`         | boolean | Whether this audience is publicly available to everyone (true) or restricted (false).                              |
| `available_for_bav` | boolean | Whether this audience can be used with the BAV dataset.                                                            |
| `available_for_bc`  | boolean | Whether this audience can be used with the Best Countries dataset.                                                 |

### Definition Schema

The `definitions` include returns a list of definitions. An audience without definitions cannot be deployed.

| Key           | Type   | Description                                                                                                                                    |
|---------------|--------|------------------------------------------------------------------------------------------------------------------------------------------------|
| `id`          | integer | The definition ID.                                                                                                                            |
| `defined_for` | object | What the definition is limited to: `type` is `country` or `study`, with the `id` of that record. Both are `null` when the definition applies to all of the audience's data. |
| `dataset`     | object | The dataset the definition reads, as a `key` and a `label`.                                                                                    |
| `segments`    | array  | The definition's segments, when `definitions.segments` is included. Each has `id`, `uuid`, `sort_order`, `name`, `within_segment_operator`, `between_segments_operator`, `created_at`, `updated_at` and, when `definitions.segments.metrics` is included, `metrics`. |
| `created_at`  | string | A datetime string when the definition was created.                                                                                             |
| `updated_at`  | string | A datetime string when the definition was last updated.                                                                                        |

See [Managing audiences](managing-audiences.md) for the full segment and metric schemas.

## Additional Filters

For convenience, we have a set of additional filters for audiences that are not available in
the [default filters](../customizing/filters.md) or are part of the columns. These are:

- `active` - Set to `1` to only return active audiences.
- `inactive` - Set to `1` to only return inactive audiences.
- `public` - Set to `1` to only return public audiences.
- `private` - Set to `1` to only return private audiences.
- `system_provided` - Set to `1` to only return The Fount's standard audiences.
- `user_generated` - Set to `1` to only return audiences built by users.
- `has_definitions` - Set to `1` to only return audiences with at least one definition.
- `groups` - A comma-separated list of audience group IDs. This will only return audiences that belong to the
  specified groups.
- `users` - A comma-separated list of user IDs. This will only return audiences owned by the specified users.
- `available_for_studies` - A comma-separated list of study IDs. This will only return audiences with data available in
  the specified studies.

For the `active`, `inactive`, `public`, `private`, `system_provided`, `user_generated` and `has_definitions` filters,
any value turns the filter on.

## Relationships & includes

By default, relationships are not included. See the [includes section](../customizing/includes.md) for more information
on how this works. The following relationships are available:

- `group` - The [audience group](audience-groups.md) that this audience belongs to.
- `definitions` - The audience's [definitions](#definition-schema).
- `definitions.segments` - The definitions, with their segments.
- `definitions.segments.metrics` - The definitions, with their segments and each segment's metrics. This is the
  audience's full definition.
- `user` - The user who owns the audience (`id`, `first_name`, `last_name`, `name` and `email`).
- `user.operating_company` - The owner, with their [operating company](../metadata/operating-companies.md).

## Searching

This endpoint supports searching. See the [searching section](../customizing/searching.md) for more details.
