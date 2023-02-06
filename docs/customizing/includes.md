# Includes

The BAV The Fount API is expansive and contains many relationships. Loading all of these for every request by default
would make the request larger than necessary. Instead, we allow you to select which relationships you want to include
using the includes feature.

Includes are available on both index and single resource endpoints.

Each resource documentation contains a list of relationships and names that can be included.

Included resources only contain a subset of the data that the relationship resource has to make the response leaner. If
you need the full data, please make a second query using the system ID to the respective endpoint. Both the full
response schema and the slim, relationship schema is listed on each endpoint.

:::note Relationships are excluded by default
When you make a query to an endpoint that has relationships these are not loaded by default. For example, if you want to
access the sector for a brand (a relationship), you need to explicitly request it with the `include` parameter.
:::

## Making a request

Adding an expansion is done by adding the `include` query parameter, and passing a comma-separated string of
relationship names, like so:

```http request
GET /api/v2/brands/369?include=sector
```

This would result in the following response:

```json
{
  "data": {
    "id": 369,
    "name": "Microsoft",
    "sector": {
      "id": 13,
      "name": "Computer\/Electronics"
    },
    "created_at": "2020-03-02T10:05:01.000000Z",
    "updated_at": "2021-03-26T10:43:02.000000Z"
  }
}
```
