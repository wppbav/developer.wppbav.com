# Configurable Fields

Since the BAV data and The Fount API is expansive and endpoints contain a lot of data the API responses can easily grow
in size. A downside of REST APIs in general.

To prevent forcing you to retrieve a full object with all resource data, you may configure to request only specific
fields. We call this throughout these docs configurable fields.

Generally all fields in an endpoint response, apart from the system ID, are configurable. At the same time, no fields
loaded via [expansions](./expansions.md) are configurable.

Configurable fields are available on both indexes and single resource endpoints.

Each resource documentation contains a list of fields and names that are configurable.

## Making a request

Configuring fields is done by adding the `fields` query parameter and passing a comma-separated string of field names,
like so:

```http request
GET /api/v1/brands?fields=name
```

## Example

Let's say you want to retrieve a list of brands and their logos. Two response fields. Instead of forcing you to download
the full [Brands API](./resources/brands.md) response, you may configure to only retrieve the columns you need.

```http request
GET /api/v1/brands/369?fields=name,logo_url
```

This request would result in the following lean response:

```json
{
    "data": {
        "id": 369,
        "name": "Microsoft",
        "logo_url": "https:\/\/wpp-fount-dev.s3.eu-west-2.amazonaws.com\/logos\/svg\/microsoft-logo-9-april-2020.svg"
    }
}
```
