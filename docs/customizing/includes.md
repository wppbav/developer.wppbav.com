# Includes

The BAV The Fount API is expansive and contains many relationships. The API does not load all of these for every
request by default, because this makes the request larger than necessary. Instead, you can use the includes feature to
select the relationships that you want to include.

Includes are available on both index and single resource endpoints.

The documentation for each resource contains a list of relationships and names that you can include.

To make the response leaner, included resources contain only a subset of the data of the relationship resource. If you
need the full data, make a second query to the applicable endpoint with the system ID. Each endpoint shows both the
full response schema and the slim relationship schema.

:::note Relationships are excluded by default
When you query an endpoint that has relationships, the API does not load these relationships by default. For example,
if you want to get the sector for a brand (a relationship), you must request it explicitly with the `include`
parameter.
:::

## Making a request

To add an include, add the `include` query parameter with a comma-separated string of relationship names, for example:

```http request
GET /api/v2/brands/369?include=sector
```

This request gives this response:

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