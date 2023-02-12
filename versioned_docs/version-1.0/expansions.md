# Expansions

The BAV The Fount API is expansive and contains many relationships. Loading all of these for every request by default would make the request larger than necessary. Instead, we allow you to select which relationships you want to include using the expansions feature.

Expansions are available on both indexes and single resource endpoints.

Each resource documentation contains a list of relationships and names that can be expanded.

Expanded resources only contain a subset of the data that the relationship resource has to make the response leaner. If you need the full data, please make a second query using the system ID to the respective endpoint.

## Making a request

Adding an expansion is done by adding the `expand` query parameter, and passing a comma-separated string of relationship names, like so:

```http request
GET /api/v1/brands?expand=studies
```

This would result in the following response:

```json
{
  "data": {
    "id": 369,
    "bav_id": 177,
    "name": "Microsoft",
    "sector": {
      "id": 13,
      "name": "Computer\/Electronics"
    },
    "stock_ticker": "MSFT.US",
    "logo_url": "https:\/\/wpp-fount-dev.s3.eu-west-2.amazonaws.com\/logos\/svg\/microsoft-logo-9-april-2020.svg",
    "stock_exchange": "NASDAQ",
    "parent": null,
    "primary_logo": { // cut for brevity },
    "studies": [
      {
        "id": 3,
        "name": "Argentina - Adults 2005",
        "year": 2005,
        "country": "Argentina"
      },
      // ... list of all studies.
    ],
    "created_at": "2020-03-02T10:05:01.000000Z",
    "updated_at": "2021-03-26T10:43:02.000000Z"
  }
}
```
