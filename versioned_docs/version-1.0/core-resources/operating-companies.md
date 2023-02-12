---
split: true
---

# Operating Companies

The WPP organization consists of many operating companies. Via The Fount API you can get a basic list with names and
logos for each.

## List all operating companies

```http request
GET /api/v1/operating_companies
```

### Schema

| Key | Type | Description |
| --- | ---- | ----------- |
| `id` | integer | The system ID for the operating company. |
| `name` | string | The primary name of the operating company. |
| `logo_url` | string | A URL to the SVG version of the company logo. |
| `created_at` | string | A datetime string when this brand was first created. |
| `updated_at` | string | A datetime string when this brand was last updated. |

---

```json
{
    "data": [
        {
            "id": 13,
            "name": "Burson Cohn & Wolfe",
            "logo_url": "https:\/\/wpp-fount-dev.s3.eu-west-2.amazonaws.com\/logos\/svg\/burson-cohn-wolfe-logo-9-july-2020.svg",
            "created_at": "2021-02-23T16:27:32.000000Z",
            "updated_at": "2021-02-23T16:27:32.000000Z"
        }
        // ...
    ]
    // Pagination data is added here.
}
```

## Get an operating company

```http request
GET /api/v1/operating_companies/123
```

### Schema

| Key | Type | Description |
| --- | ---- | ----------- |
| `id` | integer | The system ID for the operating company. |
| `name` | string | The primary name of the operating company. |
| `logo_url` | string | A URL to the SVG version of the company logo. |
| `created_at` | string | A datetime string when this brand was first created. |
| `updated_at` | string | A datetime string when this brand was last updated. |

---

```json
{
    "data": {
        "id": 13,
        "name": "Burson Cohn & Wolfe",
        "logo_url": "https:\/\/wpp-fount-dev.s3.eu-west-2.amazonaws.com\/logos\/svg\/burson-cohn-wolfe-logo-9-july-2020.svg",
        "created_at": "2021-02-23T16:27:32.000000Z",
        "updated_at": "2021-02-23T16:27:32.000000Z"
    }
}
```

## Expansions

To create a leaner response data related to brands are not included in the response by default. See
the [Expansions section](../expansions.md) for more information on how this works. The following relationships can be
expanded for the operating companies resource:

- `brand` - A slimmer brand object to get information about the brand for the operating company.

## Filters

- [Pagination](../pagination.md)
- [Searching](../filters.md) by company name.
- [Updated Since](../filters.md)

## Sorting

The following fields are sortable:

- `id`
- `name`
- `created_at`
- `updated_at`
