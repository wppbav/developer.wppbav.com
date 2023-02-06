---
split: true
---

# Brands

Through the Brands API you may retrieve details about one or more brands. The endpoint supports both a paginated list
view as well as a single brand lookup. You may also retrieve filterable brand metrics for a brand.

## List brands

To list all of the brands and browse them via the API, use the list endpoint:

```http request
GET /api/v1/brands
```

The brand list response contains details about the brand.

### Schema

| Key | Type | Description |
| --- | ---- | ----------- |
| `id` | integer | The system ID for the brand. |
| `bav_id` | integer | The brand key in the BAV database. Note that this may be *
both* a positive and negative integer. |
| `name` | string | The primary name of the brand. |
| `sector` | object | An object with the brand's [sector details](../relationship-schema.md) |
| `stock_ticker` | string | The stock ticker for this brand. If this is a child brand, this will be automatically inherited from the parent. |
| `stock_exchange` | string | The stock exchange code where this brand is listed. If this is a child brand, this will be automatically inherited from the parent. |
| `logo_url` | string | A URL to the latest approved version of the primary brand logo in SVG format. |
| `parent` | object | An [object with id and name](../relationship-schema.md) of the parent brand, if this is a child brand. |
| `primary_logo` | object | An object with the primary logo for this brand [(schema)](../relationship-schema.md). |
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

## Get a brand

You may also directly retrieve a brand's details if you already have its system ID.

```http request
GET /api/v1/brands/123
```

Where `123` is the system ID of the brand.

### Schema

| Key | Type | Description |
| --- | ---- | ----------- |
| `id` | integer | The system ID for the brand. |
| `bav_id` | integer | The brand key in the BAV database. Note that this may be *
both* a positive and negative integer. |
| `name` | string | The primary name of the brand. |
| `sector` | object | An object with the brand's [sector details](../relationship-schema.md) |
| `stock_ticker` | string | The stock ticker for this brand. If this is a child brand, this will be automatically inherited from the parent. |
| `stock_exchange` | string | The stock exchange code where this brand is listed. If this is a child brand, this will be automatically inherited from the parent. |
| `logo_url` | string | A URL to the latest approved version of the primary brand logo in SVG format. |
| `parent` | object | An [object with id and name](../relationship-schema.md) of the parent brand, if this is a child brand. |
| `primary_logo` | object | An object with the primary logo for this brand [(schema)](../relationship-schema.md). |
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

- `bav_id`
- `name`
- `sector`
- `stock_ticker`
- `logo_url`
- `stock_exchange`
- `parent`
- `primary_logo`
- `created_at`
- `updated_at`

## Expansions

To create a leaner response data related to brands are not included in the response by default. See
the [Expansions section](../expansions.md) for more information on how this works. The following relationships can be
expanded for the Brands API:

- `aliases` - A list of related names, usually with common misspellings, of the global brand name.
- `local_versions` - If the brand has a version of its logo that is only used in a specific market, it may be found in
  the local versions object.
- `studies` - A list of BAV studies where this brand was included.
- `metrics` - A list of metrics and related values for the brand.

## Filters

The brands endpoint supports the following filters:

- [Pagination](../pagination.md)
- [Searching](../filters.md) by brand name.
- [Updated Since](../filters.md)
- `has_logos` - Include this query parameter to limit the results to brands which we have logos for.
- `has_studies` - Include this query parameter to limit the results to brands which have been included in a BAV study.
- `has_metrics` - Include this query parameter to limit the results to brands which we have BAV metrics for.
- `studies` - A comma-separated list of study IDs to only show brands that were in the given studies.
- `years` - A comma-separated list of year IDs to only show brands that have been studied in the given years.
- `countries` - A comma-separated list of country IDs to only show brands that have been studied in the given countries.
- `sectors` - A comma-separated list of sector IDs to only show brands that are in the given sectors.

## Sorting

The following fields are sortable:

- `id`
- `name`
- `sector_id`
- `bav_brand_id`
- `stock_ticker`
- `stock_exchange`
- `created_at`
- `updated_at`
