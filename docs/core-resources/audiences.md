# Audiences

You may use the Audiences endpoint to retrieve details about one or more audiences.

## What are audiences?

Audiences are the core of all our datasets. Audiences are pre-filtered groups of respondents for a dataset. They are
shared between the BAV and Best Countries datasets.

Examples of audiences include: All Adults (everyone), Female, Age 18-25, etc.

For the BAV dataset they correspond to the available cuts of data that you can access on audiences. For the Best
Countries
dataset they correspond to a set of filters that you can then query the dataset with.

Audiences can be active and inactive. Your application should not display inactive audiences to users even if they are
available through the API.

Audiences can also be public/private. Public audiences are available to all users across the group. Private audiences
are audiences only accessible by the current user.

Audiences in turn belong to [audience groups](audience-groups.md). These groups can be used to create a better
selection experience in an interface as the number of audiences can be plentiful.

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

Where `1` is the system ID of the audience.

:::note All adults is the base audiences
The All Adults audience is our definition of "unfiltered" or "everyone". It always has the system ID of 1.
:::

## Schema

### Full response schema

| Key                       | Type    |                Filterable                 |      Sortable      |    Configurable    | Description                                                                                                        |
|---------------------------|---------|:-----------------------------------------:|:------------------:|:------------------:|--------------------------------------------------------------------------------------------------------------------|
| `id`                      | integer |        :white_check_mark: (exact)         | :white_check_mark: | :white_check_mark: | The system ID.                                                                                                     |
| `name`                    | string  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | The display name of the audience.                                                                                  |
| `description`             | string  |                    :x:                    | :white_check_mark: | :white_check_mark: | A more detailed description (optional) of the audience.                                                            |
| `is_active`               | boolean |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | Whether this audience is active (should be used) or not. Please don't show inactive audiences in a user interface. |
| `is_public`               | boolean |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | Whether this audience is publicly available to everyone (true) or just the current user (false).                   |
| `available_for_bav`       | boolean |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | Whether this audience can be used with the BAV dataset.                                                            |
| `available_for_bc`        | boolean |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | Whether this audience can be used with the Best Countries dataset.                                                 |
| `bc_filters`              | array   |            :white_check_mark:             |        :x:         | :white_check_mark: | The filters to apply to the raw Best Countries dataset to get this audience.                                       |
| `available_for_diversity` | boolean |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | Whether this audience is available in the Consumer Equality Equation study.                                        |
| `is_ethnic_minority`      | boolean |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | Whether this audience is considered an ethnic minority.                                                            |
| `created_at`              | string  |                    :x:                    | :white_check_mark: | :white_check_mark: | A datetime string when this audience was first created.                                                            |
| `updated_at`              | string  | ([updated since](../customizing/filters)) | :white_check_mark: | :white_check_mark: | A datetime string when this audience was last updated.                                                             |

### Relationship Response Schema

The slim relationship schema is used when the audience is used as part of an include in another resource.

| Key                 | Type    | Description                                                                                                        |
|---------------------|---------|--------------------------------------------------------------------------------------------------------------------|
| `id`                | integer | The system ID for the audience.                                                                                    |
| `name`              | string  | The primary name of the audience.                                                                                  |
| `is_active`         | boolean | Whether this audience is active (should be used) or not. Please don't show inactive audiences in a user interface. |
| `is_public`         | boolean | Whether this audience is publicly available to everyone (true) or just the current user (false).                   |
| `available_for_bav` | boolean | Whether this audience can be used with the BAV dataset.                                                            |
| `available_for_bc`  | boolean | Whether this audience can be used with the Best Countries dataset.                                                 |

## Additional Filters

For convenience, we have a set of additional filters for brands that are not available in
the [default filters](../customizing/filters.md) or are part of the columns. These are:

- `active` - Set to `1` to only return active audiences.
- `inactive` - Set to `1` to only return inactive audiences.
- `public` - Set to `1` to only return public audiences.
- `private` - Set to `1` to only return private audiences.
- `groups` - A comma-separated list of audience group IDs. This will only return audiences that belong to the
  specified groups.

## Relationships & includes

By default, relationships apart from the sector are not included. See
the [includes section](../customizing/includes) for more information on how this works. The following relationships
are available:

- `group` - The [audience group](audience-groups.md) that this audience belongs to.