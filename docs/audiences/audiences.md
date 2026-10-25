# Audiences

Use the Audiences endpoint to get details about one or more audiences.

## What are audiences?

Audiences are the core of all our datasets. An audience is a group of respondents, such as women aged 18-34. You
always read brand data for a study and an audience.

Examples of audiences include All Adults (everyone), Female and Age 18-25.

For the BAV dataset, audiences are the available cuts of data that you can access. For the Best Countries dataset,
audiences are a set of filters that you can use to query the dataset.

Audiences can be active or inactive. Do not show inactive audiences to users in your application, even if they are
available through the API.

Audiences can also be public or private. Public audiences are available to all users across the group. Only the user
who owns a private audience and the users it is shared with can access it. The API returns only the audiences you have
access to: public audiences, your own audiences and audiences shared with you.

An audience is either a standard audience from The Fount (`is_standard`) or an audience that a user built. A new
audience has no data until you deploy it.

Audiences belong to [audience groups](audience-groups.md). There can be many audiences, so you can use these groups to
make the selection of audiences easier in an interface.

:::tip Creating and managing audiences

This page covers reading audiences. To create, update, delete and deploy audiences, and to manage their definitions,
segments and metrics, see [Managing audiences](managing-audiences.md).

:::

## List all audiences

To list all of the audiences and browse them through the API, use the list endpoint:

```http request
GET /api/v2/audiences
```

## Get a single audience

If you already have the system ID of an audience, you can also get its details directly.

```http request
GET /api/v2/audiences/1
```

Where `1` is the system ID of the audience. Include `definitions.segments.metrics` to get its full definition.

:::note All adults is the base audiences
The All Adults audience is our definition of "unfiltered" or "everyone". It always has the system ID of 1.
:::

## Get the studies for an audience

To list the studies that an audience has data in, and the size of the audience in each study, use:

```http request
GET /api/v2/audiences/1/studies
```

Where `1` is the system ID of the audience. An audience that is not deployed has no studies. This endpoint is
paginated and returns these keys for each study:

| Key           | Type    | Description                                                                                       |
|---------------|---------|---------------------------------------------------------------------------------------------------|
| `study`       | object  | The [study](../studies/studies.md#relationship-response-schema), with its `country` and `year`.   |
| `respondents` | integer | The number of respondents in this study who are in the audience.                                  |
| `population`  | integer | The population projection: the number of people the audience represents in the study's market. The API calculates it when you deploy the audience. `null` for markets without a population figure to project to. |

## Schema

### Full response schema

| Key                       | Type    |                Filterable                 |      Sortable      |    Configurable    | Description                                                                                                                                         |
|---------------------------|---------|:-----------------------------------------:|:------------------:|:------------------:|-----------------------------------------------------------------------------------------------------------------------------------------------------|
| `id`                      | integer |        :white_check_mark: (exact)         | :white_check_mark: | :white_check_mark: | The system ID.                                                                                                                                      |
| `name`                    | string  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | The display name of the audience.                                                                                                                   |
| `description`             | string  |                    :x:                    |        :x:         | :white_check_mark: | A more detailed description (optional) of the audience.                                                                                             |
| `is_active`               | boolean |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | Whether this audience is active (for use) or not. Do not show inactive audiences in a user interface.                                               |
| `is_public`               | boolean |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | Whether this audience is publicly available to everyone (true) or restricted (false).                                                               |
| `is_standard`             | boolean |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | Whether the audience is one of The Fount's standard audiences.                                                                                      |
| `available_for_diversity` | boolean |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | Whether this audience can be used for diversity analysis (the Consumer Equality Equation study).                                                    |
| `is_ethnic_minority`      | boolean |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | Whether this audience represents an ethnic minority group.                                                                                          |
| `deployed_at`             | string  |                    :x:                    | :white_check_mark: | :white_check_mark: | A datetime string when the audience was last deployed. `null` if it has never been deployed.                                                        |
| `definitions_updated_at`  | string  |                    :x:                    | :white_check_mark: | :white_check_mark: | A datetime string when the audience's segments last changed. If this is later than `deployed_at`, deploy the audience again to show the change in its data.               |
| `deleted_at`              | string  |                    :x:                    |        :x:         | :white_check_mark: | Always `null`. The API does not return deleted audiences.                                                                                           |
| `url`                     | string  |                    :x:                    |        :x:         |        :x:         | The URL to view the audience in The Fount.                                                                                                          |
| `created_at`              | string  |                    :x:                    | :white_check_mark: | :white_check_mark: | A datetime string when this audience was first created.                                                                                             |
| `updated_at`              | string  | ([updated since](../customizing/filters.md)) | :white_check_mark: | :white_check_mark: | A datetime string when this audience was last updated.                                                                                              |

The API adds the `group`, `user` and `definitions` keys when you [include](#relationships--includes) the matching
relationship.

:::caution Removed fields

`available_for_bav`, `available_for_bc` and `bc_filters` are no longer part of the full audience response.
`available_for_bav` and `available_for_bc` are still part of the relationship schema below.

:::

### Relationship Response Schema

The API uses the slim relationship schema when the audience is part of an include in another resource, for example
the `audiences` include on [audience groups](audience-groups.md).

| Key                 | Type    | Description                                                                                                        |
|---------------------|---------|--------------------------------------------------------------------------------------------------------------------|
| `id`                | integer | The system ID for the audience.                                                                                    |
| `name`              | string  | The primary name of the audience.                                                                                  |
| `is_active`         | boolean | Whether this audience is active (for use) or not. Do not show inactive audiences in a user interface.              |
| `is_public`         | boolean | Whether this audience is publicly available to everyone (true) or restricted (false).                              |
| `available_for_bav` | boolean | Whether this audience can be used with the BAV dataset.                                                            |
| `available_for_bc`  | boolean | Whether this audience can be used with the Best Countries dataset.                                                 |

### Definition Schema

The `definitions` include returns a list of definitions. You cannot deploy an audience without definitions.

| Key           | Type   | Description                                                                                                                                    |
|---------------|--------|------------------------------------------------------------------------------------------------------------------------------------------------|
| `id`          | integer | The definition ID.                                                                                                                            |
| `defined_for` | object | What the definition is limited to: `type` is `country` or `study`, with the `id` of that record. Both are `null` when the definition applies to all of the audience's data. |
| `dataset`     | object | The dataset the definition reads, as a `key` and a `label`.                                                                                    |
| `segments`    | array  | The definition's segments, when you include `definitions.segments`. Each segment has `id`, `uuid`, `sort_order`, `name`, `within_segment_operator`, `between_segments_operator`, `created_at` and `updated_at`. When you include `definitions.segments.metrics`, each segment also has `metrics`. |
| `created_at`  | string | A datetime string when the definition was created.                                                                                             |
| `updated_at`  | string | A datetime string when the definition was last updated.                                                                                        |

See [Managing audiences](managing-audiences.md) for the full segment and metric schemas.

## Additional Filters

For convenience, audiences have a set of additional filters. These filters are not in
the [default filters](../customizing/filters.md) and are not columns. The additional filters are:

- `active` - Set to `1` to return only active audiences.
- `inactive` - Set to `1` to return only inactive audiences.
- `public` - Set to `1` to return only public audiences.
- `private` - Set to `1` to return only private audiences.
- `system_provided` - Set to `1` to return only The Fount's standard audiences.
- `user_generated` - Set to `1` to return only audiences that users built.
- `has_definitions` - Set to `1` to return only audiences with one or more definitions.
- `groups` - A comma-separated list of audience group IDs. The filter returns only audiences that belong to the
  specified groups.
- `users` - A comma-separated list of user IDs. The filter returns only audiences that the specified users own.
- `available_for_studies` - A comma-separated list of study IDs. The filter returns only audiences with data in the
  specified studies.

For the `active`, `inactive`, `public`, `private`, `system_provided`, `user_generated` and `has_definitions` filters,
any value turns the filter on.

## Relationships & includes

By default, the response does not include relationships. See the [includes section](../customizing/includes.md) for more information
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
