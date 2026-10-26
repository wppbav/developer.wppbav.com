# Brand Personality Match

The Brand Personality Match returns the brands in the same study whose imagery profile most closely matches the brand
you name, ranked by similarity. Similarity is the correlation of the brands' imagery attribute ranks, so matches can
come from any category. The tool considers only brands with a knowledge percentile rank of 50 or above.

## Creating a query

```http request
GET /api/v2/tools/brand-personality-match
```

## Parameters

| Key         |          Required?           | Type    | Description           |
|-------------|:----------------------------:|---------|-----------------------|
| `brands`    |      :white_check_mark:      | integer | A single Brand ID.    |
| `studies`   |      :white_check_mark:      | integer | A single Study ID.    |
| `audiences` | :x: (defaults to All Adults) | integer | A single Audience ID. |

## Response

The response contains a `data` array of the brands that match. Each entry has `brand`, `sector`, `category`, `study`,
`country`, `year` and `audience` objects (each with `id` and `name`). Each entry also has `correlation` and
`varianceExplained`, each with a `raw` value and a `formatted` percentage string.
