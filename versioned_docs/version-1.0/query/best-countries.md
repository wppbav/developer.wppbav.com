---
split: true
---

# Best Countries

The Best Countries API holds all scores and rankings from the BAV Best Countries studies in an easily accessible format.

## Get data for a specific year

```http request
GET /api/v1/best_countries/2020
```

where `2020` is the year you want to retrieve data for.

For performance reasons the attributes and categories are not loaded by default when you request the yearly data.
Instead you get the overall score and rank for the country.

To also get the full category and attribute data, add the `?include_data` query parameter to the request URL.

Please note that the categories list does not include the overall category. This is instead presented as `score`
and `rank` at the topmost object.

---

```json
{
    "data": [
        {
            "name": "Sweden",
            "code": "SE",
            "region": "Europe",
            "score": 18.38,
            "rank": 40,
            "attributes": [
                {
                    "id": 1,
                    "name": "Pleasant climate",
                    "score": 10.0,
                    "rank": 8
                }
                // ...
            ],
            "categories": [
                {
                    "id": 2,
                    "name": "Adventure",
                    "key": "adventure",
                    "score": 40.0,
                    "rank": 20
                }
                // ...
            ]
        }
        // ...
    ]
}
```

## Get data for a specific country

Using this endpoint you will be able to retrieve all Best Countries data for a specific country including its history to
make useful comparisons over time.

```http request
GET /api/v1/best_countries/countries/SE
```

where `SE` is the two-letter ISO country code for the country.

---

```json
{
    "data": {
        "name": "Sweden",
        "code": "SE",
        "region": "Europe",
        "categories": [
            {
                "name": "Adventure",
                "years": [
                    {
                        "year": 2020,
                        "score": 41.0,
                        "rank": 20
                    },
                    {
                        "year": 2019,
                        "score": 50.0,
                        "rank": 21
                    }
                    // ...
                ]
            }
            // ...
        ],
        "attributes": [
            {
                "name": "Pleasant climate",
                "years": [
                    {
                        "year": 2021,
                        "score": 10.2,
                        "rank": 10
                    }
                    // ...
                ]
            }
        ]
    }
}
```

## Get data for a country and a year

```http request
GET /api/v1/best_countries/2020/SE
```

where `2020` is the year you want to retrieve data for and `SE` is the two-letter ISO country code for the country.

Please note that the categories list does not include the overall category. This is instead presented as `score` and `rank` at the topmost object.

---

```json
{
    "data": {
        "name": "Sweden",
        "code": "SE",
        "region": "Europe",
        "score": 96.91,
        "rank": 5,
        "attributes": [
            {
                "id": 1,
                "name": "Pleasant climate",
                "score": 10.0,
                "rank": 8
            }
            // ...
        ],
        "categories": [
            {
                "id": 2,
                "name": "Adventure",
                "key": "adventure",
                "score": 40.0,
                "rank": 20
            }
            // ...
        ]
    }
}
```

## Schema

The different responses are structured to be as similar as possible. What differs is generally whether the categories
and attributes return an object or an array.

### Country Object

| Key | Type | Description |
| --- | ---- | ----------- |
| `name` | string | The name of the country in English. |
| `code` | string | The two-letter ISO country code (ISO 3166-1 alpha-2) for the country. |
| `region` | string | The name of the region the country belongs to in English. |
| `score` | float | For year-based endpoints. The overall score for the country in the year. |
| `rank` | integer | For year-based endpoints. The overall rank for the country in the year. |

### Attributes Object

| Key | Type | Description |
| --- | ---- | ----------- |
| `id` | integer | The system ID for the attribute. |
| `name` | string | The name of the attribute in English. |
| `key` | string | A slug/key created from the attribute name. |
| `score` | float | The score given to the country for the attribute. From 0 to 100. |
| `rank` | float | The rank given to the country for the attribute. Based on the score and how many countries were ranked in the given year. |

### Category Object

| Key | Type | Description |
| --- | ---- | ----------- |
| `id` | integer | The system ID for the category. |
| `name` | string | The name of the category in English. |
| `key` | string | A slug/key created from the category name. |
| `score` | float | The score given to the country for the category. From 0 to 100. |
| `rank` | float | The rank given to the country for the category. Based on the score and how many countries were ranked in the given year. |
