---
split: true
---

# Collections

Assets can be grouped into various different collections, either privately by the user or publically available to all
users. You may access these for consumption via the Collections API.

## List all collections

Listing all collections currently is not possible via the REST API.

## Get a collection

If you know the system ID of the collection, you may retrieve it using the collections endpoint:

```http request
GET /api/v1/collections/123
```

where `123` is the system ID for the collection.

| Key | Type | Description |
| --- | ---- | ----------- |
| `id` | integer | The system ID for the collection. |
| `name` | string | The primary name of the collection. |
| `type` | object | An object with the brand's sector details |
| `aliases` | array | An array with other names for this brand. Usually misspellings. |
| `stock_ticker` | string | The stock ticker for this brand. If this is a child brand, this will be automatically inherited from the parent. |
| `stock_exchange` | string | The stock exchange code where this brand is listed. If this is a child brand, this will be automatically inherited from the parent. |
| `parent` | object | An object with id and name of the parent brand, if this is a child brand. |
| `primary_logo` | object | An object with the primary logo for this brand. (see below) |
| `other_logos` | array | An array with other logos that we have for this brand. Could be alternative versions. |
| `local_versions` | array | An array with alternative naming and spelling versions for a specific country, as well as a local logo if applicable. |
| `created_at` | string | A datetime string when this brand was first created. |
| `updated_at` | string | A datetime string when this brand was last updated. |

#### Brands Object

#### Brand Logos Object

| Key | Type | Description |
| --- | ---- | ----------- |
| `id` | integer | The system ID for the logo. |
| `name` | string | The descriptive name for the logo. |
| `formats` | object | An object with URLs to the respective logo formats available: "eps", "hires-png", "lores-png", "jpg" and "svg". |
| `created_at` | string | A datetime string when this logo was first created. |
| `updated_at` | string | A datetime string when this logo was last updated. |

---

```json
{
    "data": {
        "id": 71,
        "name": "Operating Companies",
        "type": {
            "id": 1,
            "name": "Public",
            "is_public": true,
        },
        "brands": [
            {
                "id": 1191,
                "bav_id": null,
                "name": "Acceleration",
                "sector": null,
                "stock_ticker": null,
                "logo": {
                    "id": 1032,
                    "name": "Acceleration logo",
                    "formats": {
                        "eps": "https://wpp-fount.s3.eu-west-2.amazonaws.com/logos/eps/acceleration-logo-9-july-2020.eps",
                        "hires-png": "https://wpp-fount.s3.eu-west-2.amazonaws.com/logos/hires-png/acceleration-logo-9-july-2020.png",
                        "lores-png": "https://wpp-fount.s3.eu-west-2.amazonaws.com/logos/lores-png/acceleration-logo-9-july-2020.png",
                        "jpg": "https://wpp-fount.s3.eu-west-2.amazonaws.com/logos/jpg/acceleration-logo-9-july-2020.jpg",
                        "svg": "https://wpp-fount.s3.eu-west-2.amazonaws.com/logos/svg/acceleration-logo-9-july-2020.svg"
                    },
                    "created_at": "2020-07-09T08:50:02.000000Z",
                    "updated_at": "2020-07-09T08:50:02.000000Z"
                },
                "is_current_version": true
            }
            // ...
        ],
        "assets": []
    }
}
```
