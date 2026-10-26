# Configurable fields

The BAV data and The Fount API are expansive, and endpoints contain a lot of data. Because of this, the API responses
can become large. This is a general disadvantage of REST APIs.

You do not have to get a full object with all the resource data. You can configure the request to get only specific
fields.

You can configure the response to include any fields. By default, all fields are included. If you include specific
fields, you must specify all the fields that you want to include. You cannot exclude fields.

You cannot configure the fields that you load through [includes](includes.md). The fields from these relations are
slimmed-down relation responses. The documentation for each endpoint contains the schema for the relationship response
and the full response.

Configurable fields are available on index endpoints and single resource endpoints.

## Making a request

To configure fields, add the `fields` query parameter with the snake-case name of the resource. Give a comma-separated
string of field names as the value, for example:

```http request
GET /api/v2/brands?fields[brands]=id,name
```

## Example: Getting a list of brands for a dropdown selection

For example, you want to get a list of brands to show in a dropdown where users select a brand. You need the brand ID
for the value and the name for the display label. You do not have to download the
full [Brands response](../brands/brands.md). You can configure the request to get only the columns that you need.

```http request
GET /api/v2/brands?fields[brands]=id,name
```

This request gives this lean response:

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