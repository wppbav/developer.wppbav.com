---
split: true
---

# Studies

The studies resource returns overview information about BAV studies and their timelines. Both past and future studies
are available through the API.

## List all Studies

Retrieve a list of all studies done by BAV.

```http request
GET /api/v1/studies
```

### Schema

| Key | Type | Description |
| --- | ---- | ----------- |
| `id` | integer | The system ID for the study. |
| `name` | string | The name of the study. |
| `country` | object | An object with the [country details](../relationship-schema.md). |
| `year` | integer | The year when this study was done. |
| `start_date` | string | A datetime string when the fieldwork for this study was started. |
| `end_date` | string | A datetime string when the fieldwork for this study ended. |
| `data_available_at` | string | A datetime string when the final data was made available. |
| `amount_of_respondents` | integer | How many individual respondents the study had. |
| `amount_of_categories` | integer | How many categories the study had. |
| `amount_of_brands` | integer | How many total brands were in the study. |
| `created_at` | string | A datetime string when this brand was first created. |
| `updated_at` | string | A datetime string when this brand was last updated. |

---

```json
{
    "data": [
        {
            "id": 3894,
            "bav_id": 41305,
            "name": "Microsoft Cloud",
            "sector": {
                "id": 13,
                "name": "Computer\/Electronics"
            },
            "stock_ticker": "MSFT.US",
            "stock_exchange": "NASDAQ",
            "logo_url": "https:\/\/wpp-fount-dev.s3.eu-west-2.amazonaws.com\/logos\/svg\/microsoft-logo-9-april-2020.svg",
            "parent": {
                "id": 369,
                "name": "Microsoft"
            },
            "primary_logo": {
                "id": 412,
                "name": "Microsoft Logo",
                "formats": {
                    "eps": "https:\/\/wpp-fount-dev.s3.eu-west-2.amazonaws.com\/logos\/eps\/microsoft-logo-9-april-2020.eps",
                    "hires-png": "https:\/\/wpp-fount-dev.s3.eu-west-2.amazonaws.com\/logos\/hires-png\/microsoft-logo-9-april-2020.png",
                    "lores-png": "https:\/\/wpp-fount-dev.s3.eu-west-2.amazonaws.com\/logos\/lores-png\/microsoft-logo-9-april-2020.png",
                    "jpg": "https:\/\/wpp-fount-dev.s3.eu-west-2.amazonaws.com\/logos\/jpg\/microsoft-logo-9-april-2020.jpg",
                    "svg": "https:\/\/wpp-fount-dev.s3.eu-west-2.amazonaws.com\/logos\/svg\/microsoft-logo-9-april-2020.svg"
                },
                "created_at": "2020-04-09T11:22:50.000000Z",
                "updated_at": "2020-04-09T11:22:50.000000Z"
            },
            "created_at": "2021-03-02T11:28:21.000000Z",
            "updated_at": "2021-03-26T10:49:49.000000Z"
        }
        //...
    ]
    // ...
}
```

## Get a study

Retrieve information about a single study. Note that this endpoint doesn't contain information about the studied brands,
please see below for this.

```http request
GET /api/v1/studies/123
```

where `123` is the internal system ID for the study.

### Schema

| Key | Type | Description |
| --- | ---- | ----------- |
| `id` | integer | The system ID for the study. |
| `name` | string | The name of the study. |
| `country` | object | An object with the [country details](../relationship-schema.md). |
| `year` | integer | The year when this study was done. |
| `start_date` | string | A datetime string when the fieldwork for this study was started. |
| `end_date` | string | A datetime string when the fieldwork for this study ended. |
| `data_available_at` | string | A datetime string when the final data was made available. |
| `amount_of_respondents` | integer | How many individual respondents the study had. |
| `amount_of_categories` | integer | How many categories the study had. |
| `amount_of_brands` | integer | How many total brands were in the study. |
| `created_at` | string | A datetime string when this brand was first created. |
| `updated_at` | string | A datetime string when this brand was last updated. |

---

```json
{
    "data": {
        "id": 3894,
        "bav_id": 41305,
        "name": "Microsoft Cloud",
        "sector": {
            "id": 13,
            "name": "Computer\/Electronics"
        },
        "stock_ticker": "MSFT.US",
        "stock_exchange": "NASDAQ",
        "logo_url": "https:\/\/wpp-fount-dev.s3.eu-west-2.amazonaws.com\/logos\/svg\/microsoft-logo-9-april-2020.svg",
        "parent": {
            "id": 369,
            "name": "Microsoft"
        },
        "primary_logo": {
            "id": 412,
            "name": "Microsoft Logo",
            "formats": {
                "eps": "https:\/\/wpp-fount-dev.s3.eu-west-2.amazonaws.com\/logos\/eps\/microsoft-logo-9-april-2020.eps",
                "hires-png": "https:\/\/wpp-fount-dev.s3.eu-west-2.amazonaws.com\/logos\/hires-png\/microsoft-logo-9-april-2020.png",
                "lores-png": "https:\/\/wpp-fount-dev.s3.eu-west-2.amazonaws.com\/logos\/lores-png\/microsoft-logo-9-april-2020.png",
                "jpg": "https:\/\/wpp-fount-dev.s3.eu-west-2.amazonaws.com\/logos\/jpg\/microsoft-logo-9-april-2020.jpg",
                "svg": "https:\/\/wpp-fount-dev.s3.eu-west-2.amazonaws.com\/logos\/svg\/microsoft-logo-9-april-2020.svg"
            },
            "created_at": "2020-04-09T11:22:50.000000Z",
            "updated_at": "2020-04-09T11:22:50.000000Z"
        },
        "created_at": "2021-03-02T11:28:21.000000Z",
        "updated_at": "2021-03-26T10:49:49.000000Z"
    }
}
```

## Configurable Fields

If you only need some of the fields you can optimize the request for a leaner response (
see [Configurable Fields](../configurable-fields.md) for more information). The following fields can be toggled:

- `name`
- `country`
- `year`
- `start_date`
- `end_date`
- `data_available_at`
- `amount_of_respondents`
- `amount_of_categories`
- `amount_of_brands`  
- `created_at`
- `updated_at`

## Expansions

To create a leaner response data related to brands are not included in the response by default. See
the [Expansions section](../expansions.md) for more information on how this works. The following relationships can be
expanded for the Brands API:

- `brands` - A list of brands that were a part of the study.

## Filters

The studies endpoint supports the following filters:

- [Pagination](../pagination.md)
- [Searching](../filters.md) by study name.
- [Updated Since](../filters.md)
- `country` - Filter studies by the two-letter country code (ISO 3166-1 alpha-2).
- `year` - Filter studies by year.
- `study_start` - Show studies whose fieldwork started on this date (Y-m-d).
- `study_end` - Show studies whose fieldwork ended on this date (Y-m-d).

## Sorting

The following fields are sortable:

- `id`
- `name`
- `country_id`
- `year_id`
- `start_date`
- `end_date`
- `data_available_at`
- `respondents`
- `categories`
- `created_at`
- `updated_at`
