# GICS Sectors

## What are GICS sectors?

The Global Industry Classification Standard is an industry taxonomy developed in 1999 by MSCI and Standard & Poor's for
use by the global financial community.

We use them to classify companies and brands according to what they objectively do on a global basis.

## List all GICS sectors

To list all of the GICS sectors and browse them via the API, use the list endpoint:

```http request
GET /api/v2/gics-sectors
```

## Get a GICS sector

You may also directly retrieve a GICS sector's details if you already have its system ID.

```http request
GET /api/v2/gics-sectors/123
```

Where `123` is the system ID of the GICS sector.

## Schema

### Full response schema

| Key          | Type    |                Filterable                 |      Sortable      |    Configurable    | Description                                                |
|--------------|---------|:-----------------------------------------:|:------------------:|:------------------:|------------------------------------------------------------|
| `id`         | integer |        :white_check_mark: (exact)         | :white_check_mark: | :white_check_mark: | The system ID.                                             |
| `code`       | string  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | The GICS sector code.                                      |
| `name`       | float   |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | The primary name of the GICS sector.                       |
| `created_at` | string  |                    :x:                    | :white_check_mark: | :white_check_mark: | A datetime string when this GICS sector was first created. |
| `updated_at` | string  | ([updated since](../customizing/filters)) | :white_check_mark: | :white_check_mark: | A datetime string when this GICS sector was last updated.  |

### Relationship Response Schema

The slim relationship schema is used when the GICS sector is used as part of an include in another resource.

| Key    | Type    | Description                          |
|--------|---------|--------------------------------------|
| `id`   | integer | The system ID for the GICS sector.   |
| `name` | string  | The primary name of the GICS sector. |

