# Tools

## What are tools?

The tools endpoint provides a list of all the available tools in the system and the parameters they expect. It can
be used for various integrations as it provides the metadata for each tool. You can then use the specific tools
endpoints to get the data for most tools.

## List all tools

To list all of the tools and browse them via the API, use the list endpoint:

```http request
GET /api/v2/tools
```

## Get a year

You may also directly retrieve a year's details if you already have its system ID.

```http request
GET /api/v2/tools/123
```

Where `123` is the system ID of the year.

## Schema

### Full response schema

| Key                          | Type    |                Filterable                 |      Sortable      |    Configurable    | Description                                                                                                                                   |
|------------------------------|---------|:-----------------------------------------:|:------------------:|:------------------:|-----------------------------------------------------------------------------------------------------------------------------------------------|
| `id`                         | integer |        :white_check_mark: (exact)         | :white_check_mark: | :white_check_mark: | The system ID.                                                                                                                                |
| `name`                       | integer |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | The name of the tool                                                                                                                          |
| `slug`                       | string  |            :white_check_mark:             |        :x:         | :white_check_mark: | A unique key (slug) for the tool, used in URLs.                                                                                               |                          
| `short_description`          | string  |                    :x:                    |        :x:         | :white_check_mark: | A short sentence description about what the tool does.                                                                                        |                          
| `description`                | string  |                    :x:                    |        :x:         | :white_check_mark: | A longer HTML-formatted description about the tool.                                                                                           |                          
| `documentation_url`          | string  |                    :x:                    |        :x:         | :white_check_mark: | The URL to the documentation for this tool (not yet available)                                                                                |                          
| `api_documentation_url`      | string  |                    :x:                    |        :x:         | :white_check_mark: | The URL to the API documentation here on the developer portal.                                                                                |                          
| `api_endpoint_url`           | string  |                    :x:                    |        :x:         | :white_check_mark: | The URL to the API endpoint for the tool, if available.                                                                                       |                          
| `supported_parameters`       | object  |                    :x:                    |        :x:         | :white_check_mark: | The filter parameters that the tool supports. The object key is the parameter name, and the value is true/false.                              |                          
| `required_parameters`        | object  |                    :x:                    |        :x:         | :white_check_mark: | The required parameters for the tool. The object key is the parameter name, and the value is true/false.                                      |                          
| `multiple_choice_parameters` | object  |                    :x:                    |        :x:         | :white_check_mark: | The parameters which allow for more than one selection. The object key is the parameter name, and the value is true/false.                    |                          
| `extra_parameters`           | object  |                    :x:                    |        :x:         | :white_check_mark: | Additional configuration parameters to control the querying experience.                                                                       |                          
| `export_formats`             | object  |                    :x:                    |        :x:         | :white_check_mark: | The available exports in the interface. The object key is the parameter name, and the value is true/false. Only available exports are listed. |                          
| `is_in_preview`              | boolean |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | If true, the tool is currently unreleased but the user still has access to it under a "preview access" scheme.                                |                          
| `created_at`                 | string  |                    :x:                    | :white_check_mark: | :white_check_mark: | A datetime string when this year was first created.                                                                                           |
| `updated_at`                 | string  | ([updated since](../customizing/filters)) | :white_check_mark: | :white_check_mark: | A datetime string when this year was last updated.                                                                                            |

## Relationships & includes

By default, relationships are not included. See
the [includes section](../customizing/includes) for more information on how this works. The following relationships
are available:

- `group` - The group of tools that this tool belongs to.
- `resources` - A list of resources for the user, such as guides, that are related to this tool.
- `use_cases` - A list of use-cases for which this tool is relevant.