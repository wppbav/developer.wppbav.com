# Partnership Exchange Map

The Partnership Exchange Map compares the imagery attributes of two brands to show what each could bring to a
partnership.

## Creating a query

```http request
GET /api/v2/tools/partnership-exchange-map
```

## Parameters

Give one brand in `brands` and its partner in `comparison_brands`. The exchange is directional, so swapping the two
gives a different result.

| Key                 |          Required?           | Type    | Description                          |
|---------------------|:----------------------------:|---------|--------------------------------------|
| `brands`            |      :white_check_mark:      | integer | A single Brand ID.                   |
| `comparison_brands` |      :white_check_mark:      | integer | A single Brand ID for the partner.   |
| `studies`           |      :white_check_mark:      | integer | A single Study ID.                   |
| `audiences`         | :x: (defaults to All Adults) | integer | A single Audience ID.                |
