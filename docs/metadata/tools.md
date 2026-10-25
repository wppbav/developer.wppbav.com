# Tools

## What are tools?

The tools endpoint gives a list of all the available tools in the system and the parameters that they expect. You
can use it for different integrations, because it gives the metadata for each tool. You can then use the specific tools
endpoints to get the data for most tools.

## List all tools

To list all of the tools and browse them through the API, use the list endpoint:

```http request
GET /api/v2/tools
```

## Get a tool

If you already have the system ID of a tool, you can also get its details directly.

```http request
GET /api/v2/tools/123
```

Where `123` is the system ID of the tool.

:::note
On the list endpoint, each item in the `data` list has its own `data` key, for example `data[0].data.name`. On the
get endpoint, the tool is directly in the `data` key.
:::

## Schema

### Full response schema

| Key                          | Type    |                Filterable                 |      Sortable      |    Configurable    | Description                                                                                                                                   |
|------------------------------|---------|:-----------------------------------------:|:------------------:|:------------------:|-----------------------------------------------------------------------------------------------------------------------------------------------|
| `id`                         | integer |        :white_check_mark: (exact)         | :white_check_mark: | :white_check_mark: | The system ID.                                                                                                                                |
| `name`                       | string  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | The name of the tool.                                                                                                                         |
| `slug`                       | string  |            :white_check_mark:             |        :x:         | :white_check_mark: | A unique key (slug) for the tool. The Fount uses it in URLs.                                                                                  |
| `short_description`          | string  |                    :x:                    |        :x:         | :white_check_mark: | A short sentence that tells what the tool does.                                                                                               |
| `description`                | string  |                    :x:                    |        :x:         | :white_check_mark: | A longer HTML-formatted description of the tool.                                                                                              |
| `documentation_url`          | string  |                    :x:                    |        :x:         | :white_check_mark: | The URL to the user documentation for this tool.                                                                                              |
| `api_documentation_url`      | string  |                    :x:                    |        :x:         | :white_check_mark: | The URL to the API documentation on the developer portal.                                                                                     |
| `api_endpoint_url`           | string  |                    :x:                    |        :x:         | :white_check_mark: | The URL to the API endpoint for the tool, if the tool has one.                                                                                |
| `supported_parameters`       | object  |                    :x:                    |        :x:         | :white_check_mark: | The filter parameters that the tool supports. The object key is the parameter name, and the value is true/false.                              |
| `required_parameters`        | object  |                    :x:                    |        :x:         | :white_check_mark: | The required parameters for the tool. The object key is the parameter name, and the value is true/false.                                      |
| `multiple_choice_parameters` | object  |                    :x:                    |        :x:         | :white_check_mark: | The parameters that allow more than one selection. The object key is the parameter name, and the value is true/false.                         |
| `extra_parameters`           | object  |                    :x:                    |        :x:         | :white_check_mark: | The tool-specific parameters that are not part of the standard brandscape filters.                                                            |
| `export_formats`             | object  |                    :x:                    |        :x:         | :white_check_mark: | The export formats of the tool. The object key is the format name, and the value is true/false. Only available exports are listed.            |
| `is_in_preview`              | boolean |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | If true, the tool is not released yet. You can see it because you have preview access.                                                        |
| `url`                        | string  |                    :x:                    |        :x:         |        :x:         | The URL to the tool in The Fount. If you use `fields`, include `slug` and `group_id` to get this value.                                       |
| `created_at`                 | string  |                    :x:                    | :white_check_mark: | :white_check_mark: | A datetime string when this tool was first created.                                                                                           |
| `updated_at`                 | string  | ([updated since](../customizing/filters)) | :white_check_mark: | :white_check_mark: | A datetime string when this tool was last updated.                                                                                            |

## Additional Filters

These filters do not match a column, but you use them with the same `filter[name]=value` format as the
[default filters](../customizing/filters.md):

- `favorited_by_me` - Set to `1` to only return the tools that you marked as favorites.

## Relationships & includes

By default, relationships are not included. See
the [includes section](../customizing/includes) for more information on how this works. The following relationships
are available:

- `group` - The group of tools that this tool belongs to.
- `resources` - A list of resources for the user, such as guides, that are related to this tool.
- `use_cases` - A list of use-cases for which this tool is relevant.