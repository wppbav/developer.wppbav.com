---
split: true
---

# Brandscape Data

The Brandscape Data API is where you can query for the research data. The scores for each brand in a country is what we
call a Brandscape.

## Querying for data

To browse the data via the API, use the list endpoint:

```http request
GET /api/v1/brandscape-data
```

Querying the brandscape data requires at least one filter (see below). Otherwise you will be returned a 401 bad request
error.

Each item in the list endpoint response is unique on:

- Brand
- Study
- Category
- Base

### Schema

| Key | Type | Description |
| --- | ---- | ----------- |
| `id` | integer | The system ID for the brandscape data point. |
| `brand` | object | A brand relationship object. |
| `study` | object | A study relationship object. |
| `base` | object | A base relationship object. |
| `category` | object | A category relationship object. |
| `metrics` | array | The list of metric objects for the data point. |
| `created_at` | string | A datetime string when this brand was first created. |
| `updated_at` | string | A datetime string when this brand was last updated. |

#### Metrics Object Schema

Each metric object in the `metrics` array consists of the following schema.

| Key | Type | Description |
| --- | ---- | ----------- |
| `id` | integer | The Metric object ID. |
| `name` | string | The human readable name of the metric. |
| `key` | string | A machine readable key for the metric. |
| `group` | object | A brand metric group relationship object. |
| `scores` | object | An object with three keys: `rank`, `percentage` and `value` returning either `null` or `float` |

**Note on Scores:** Each metric will have different available scores. Some metrics have just a `value` score, while
others have `rank`, `percentage` or both of the latter. When one of them returns `null` you can interpret it as not
being available for the metric. Inspect the Metrics resource further for boolean values of which score types each metric
supports.

---

```json
{
    "data": [
        {
            "id": 865156,
            "brand": {
                "id": 368,
                "name": "Facebook",
                "bav_key": -18585
            },
            "study": {
                "id": 381,
                "name": "UK - Adults 2020",
                "year": 2020,
                "country": "United Kingdom"
            },
            "base": {
                "id": 1,
                "name": "All Adults"
            },
            "category": {
                "id": 88,
                "name": "Social Media",
                "sector": "Telecommunications"
            },
            "metrics": [
                {
                    "id": 1,
                    "name": "Brand Base",
                    "key": "brand_base",
                    "group": {
                        "id": 1,
                        "name": "Base Sizes"
                    },
                    "scores": {
                        "rank": null,
                        "percentage": null,
                        "value": 100.255100000000000
                    }
                }
                // ...
            ],
            "created_at": "2021-03-02T11:28:21.000000Z",
            "updated_at": "2021-03-26T10:49:49.000000Z"
        }
        //...
    ]
    // ...
}
```

## Configurable Fields

If you only need some of the fields you can optimize the request for a leaner response (
see [Configurable Fields](../customizing/fields.md) for more information). The following fields can be toggled:

- `id`
- `brand`
- `study`
- `base`
- `category`
- `metrics`
- `created_at`
- `updated_at`

## Expansions

To create a leaner response, some data related to brandscape data are not included in the response by default. See
the [Expansions section](../customizing/includes.md) for more information on how this works. The following relationships can be
expanded for the Brandscape Data API:

- `years` - A years relationship object containing the year and its system ID.
- `countries` - A countries relationship object containing the country, its region and system ID.

## Filters

*At least one of the data filters (studies, brands or search) needs to be applied.*

The endpoint supports the following filters:

- [Pagination](../pagination.md)
- [Searching](../customizing/filters.md) by brand name.
- [Updated Since](../customizing/filters.md)
- `brands` - A comma separated list of brand IDs to find.
- `studies` - A comma separated list of study IDs to find.
- `years` - A comma separated list of year IDs to find.
- `countries` - A comma separated list of country IDs to find.
- `bases` - A comma separated list of study base IDs to find.
- `year_number` - A comma separated list of years (for example: 2020,2021) to find.
- `country_code` - A comma-separated list of ISO-Alpha2 country codes (for example: US,DE) to find data from.

## Sorting

By default, the data will be sorted by ID. This sorting does not require any specific parameter. You can also order it
by any of the metric columns. This is useful for getting a toplist of data.

The sorting parameter in that case takes the form of `metricKey_scoreType`. For example:

`metrickey_rank` (rank scores), `metrickey_pct` (percentage scores) or `metrickey` (value scores)

If you supply `order_by` with an incorrect parameter, a `400 - Bad Request` response will be returned to you.
