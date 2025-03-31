# Brand Personality Match

## Creating a query

```http request
GET /api/v2/tools/brand-personality-match
```

## Parameters

| Key         |          Required?           | Type          | Description                             |
|-------------|:----------------------------:|---------------|-----------------------------------------|
| `brands`    |      :white_check_mark:      | numeric array | A single Brand ID in array format.      |
| `studies`   |      :white_check_mark:      | numeric array | A single Study ID in array format.      |
| `audiences` | :x: (defaults to All Adults) | numeric array | A single Audience ID in array format.   |
