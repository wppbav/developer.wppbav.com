# Configurable fields

Since the BAV data and The Fount API is expansive and endpoints contain a lot of data the API responses can easily grow
in size. A downside of REST APIs in general.

To prevent forcing you to retrieve a full object with all resource data, you may configure to request only specific
fields.

You may choose to configure to include any fields in the response. By default all fields are included. If choose to
include specific fields you will need to specify all fields you want to include. There is no option to exclude fields.

Fields loaded via [includes](includes.md) are not configurable. The fields included via these relations are slimmed-down
relation responses. Each endpoint documentation includes the schema for the relationship response alongside the full
response.

Configurable fields are available on both indexes and single resource endpoints.

## Making a request

Configuring fields is done by adding the `fields` query parameter, the snake-case name of the resource, and passing a comma-separated string of field names,
like so:

```http request
GET /api/v2/brands?fields[brands]=id,name
```

## Example: Getting a list of brands for a dropdown selection

Let's say you want to retrieve a list of brands to show in a dropdown for users to select. You'll want the brand ID for
the value and the name for the display label. Instead of forcing you to download the
full [Brands response](../brand-data/brands.md), you may configure to only retrieve the columns you need.

```http request
GET /api/v2/brands?fields[brands]=id,name
```

This request would result in the following lean response:

```json
{
  "data": [
    {
      "id": 369,
      "name": "Microsoft"
    }
  ]
}
```