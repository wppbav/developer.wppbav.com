---
split: true
---

# Countries

Many of the BAV resources rely on segmenting data by countries. This resource contains a list of all the countries in the world, with additional ISO codes and metadata for system use.

## List Countries

To list all of the countries and browse them via the API, use the list endpoint:

```http request
GET /api/v1/countries
```

The brand list response contains details about the country.

### Schema

| Key | Type | Description |
| --- | ---- | ----------- |
| `id` | integer | The system ID for the country. |
| `name` | string | The name of the country in English. |
| `native_name` | string | The name of the country in its native language. |
| `code` | string | The two-letter code (ISO 3166-1 alpha-2) for the country. |
| `code_alpha3` | string | The three-letter code (ISO 3166-1 alpha-3) for the country. |
| `code_numeric` | string | The numeric code (ISO 3166-1 numeric) for the country. |
| `flag` | string | A URL to the country flag in SVG format. |
| `gdp` | float | The country's GDP in USD from the latest published period. |
| `gdp_capita` | float | The country's GDP per capita in USD from the latest published period. |
| `population` | integer | The country's total population from the latest published period. |
| `region` | object | An object with the region that this country belongs to [(schema)](../relationship-schema.md). |

---

```json
{
    "data": [
        {
            "id": 48,
            "name": "United Kingdom",
            "native_name": "United Kingdom",
            "code": "GB",
            "code_alpha3": "GBR",
            "code_numeric": "826",
            "flag": "https:\/\/wpp-fount-dev.s3.eu-west-2.amazonaws.com\/flags\/gb.svg",
            "gdp": null,
            "gdp_capita": null,
            "population": 65110000,
            "region": {
                "id": 4,
                "name": "Europe"
            }
        },
        //...
    ]
    // ...
}
```

## Get a Category

You may also directly retrieve a country's details if you already have its system ID.

```http request
GET /api/v1/countries/123
```

Where `123` is the system ID of the country.

You may also retrieve the country by its two-letter or three-letter ISO code by replacing the ID with it, like so:

```http request
GET /api/v1/countries/GB
```

### Schema

| Key | Type | Description |
| --- | ---- | ----------- |
| `id` | integer | The system ID for the country. |
| `name` | string | The name of the country in English. |
| `native_name` | string | The name of the country in its native language. |
| `code` | string | The two-letter code (ISO 3166-1 alpha-2) for the country. |
| `code_alpha3` | string | The three-letter code (ISO 3166-1 alpha-3) for the country. |
| `code_numeric` | string | The numeric code (ISO 3166-1 numeric) for the country. |
| `flag` | string | A URL to the country flag in SVG format. |
| `gdp` | float | The country's GDP in USD from the latest published period. |
| `gdp_capita` | float | The country's GDP per capita in USD from the latest published period. |
| `population` | integer | The country's total population from the latest published period. |
| `region` | object | An object with the region that this country belongs to [(schema)](../relationship-schema.md). |

---

```json
{
    "data": {
        "id": 48,
        "name": "United Kingdom",
        "native_name": "United Kingdom",
        "code": "GB",
        "code_alpha3": "GBR",
        "code_numeric": "826",
        "flag": "https:\/\/wpp-fount-dev.s3.eu-west-2.amazonaws.com\/flags\/gb.svg",
        "gdp": null,
        "gdp_capita": null,
        "population": 65110000,
        "region": {
            "id": 4,
            "name": "Europe"
        }
    }
}
```

## Configurable Fields

If you only need some of the fields you can optimize the request for a leaner response (
see [Configurable Fields](../customizing/fields.md) for more information). The following fields can be toggled:

- `name`
- `native_name`
- `code`
- `code_alpha3`
- `code_numeric`
- `flag`
- `gdp`
- `gdp_capita`
- `population`
- `region`

## Expansions

To create a leaner response data related to brands are not included in the response by default. See
the [Expansions section](../customizing/includes.md) for more information on how this works. The following relationships can be expanded:

- `studies`

## Filters

The countries endpoint supports the following filters:

- [Pagination](../pagination.md)
- [Searching](../customizing/filters.md) by brand name.
- [Updated Since](../customizing/filters.md)
- `regions` - A comma-separated list of region IDs to only show countries from the specified region.

## Sorting

The following fields are [sortable](../customizing/filters.md):

- `id`
- `name`
- `native_name`
- `code`
- `code_alpha3`
- `code_numeric`
- `flag`
- `gdp`
- `gdp_capita`
- `population`
- `region_id`  
- `created_at`
- `updated_at`
