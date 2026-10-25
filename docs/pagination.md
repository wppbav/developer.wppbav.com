
# Pagination

All top-level API resources have a list method that you can use to get data in bulk. For example, you can list brands
and collections.

## Parameters

You can use these query parameters on list resources:

- `page` sets the current page.
- `per_page` sets the number of records on each page. The maximum is 1000. The default is 25. If you ask for more than
  1000 records on each page, you get a `400` error.

URL Example:

```http request
GET https://fount.wppbav.com/api/v2/brands?page=2&per_page=50
```

## Response

The API list response has this structure:

```json
{
  "data": [
    {
      ...
    }
    // Here's the specific request data for the resource.
  ],
  "links": {
    "first": "https://fount.wppbav.com/api/v2/brands?page=1",
    "last": "https://fount.wppbav.com/api/v2/brands?page=163",
    "prev": null,
    "next": "https://fount.wppbav.com/api/v2/brands?page=2"
  },
  "meta": {
    "current_page": 1,
    "from": 1,
    "last_page": 163,
    "links": [
      {
        "url": null,
        "label": "&laquo; Previous",
        "active": false
      },
      {
        "url": "https://fount.wppbav.com/api/v2/brands?page=1",
        "label": 1,
        "active": true
      },
      {
        "url": "https://fount.wppbav.com/api/v2/brands?page=2",
        "label": 2,
        "active": false
      },
      {
        "url": "https://fount.wppbav.com/api/v2/brands?page=3",
        "label": 3,
        "active": false
      },
      {
        "url": "https://fount.wppbav.com/api/v2/brands?page=4",
        "label": 4,
        "active": false
      },
      {
        "url": "https://fount.wppbav.com/api/v2/brands?page=5",
        "label": 5,
        "active": false
      },
      {
        "url": "https://fount.wppbav.com/api/v2/brands?page=6",
        "label": 6,
        "active": false
      },
      {
        "url": "https://fount.wppbav.com/api/v2/brands?page=7",
        "label": 7,
        "active": false
      },
      {
        "url": "https://fount.wppbav.com/api/v2/brands?page=8",
        "label": 8,
        "active": false
      },
      {
        "url": "https://fount.wppbav.com/api/v2/brands?page=9",
        "label": 9,
        "active": false
      },
      {
        "url": "https://fount.wppbav.com/api/v2/brands?page=10",
        "label": 10,
        "active": false
      },
      {
        "url": null,
        "label": "...",
        "active": false
      },
      {
        "url": "https://fount.wppbav.com/api/v2/brands?page=162",
        "label": 162,
        "active": false
      },
      {
        "url": "https://fount.wppbav.com/api/v2/brands?page=163",
        "label": 163,
        "active": false
      },
      {
        "url": "https://fount.wppbav.com/api/v2/brands?page=2",
        "label": "Next &raquo;",
        "active": false
      }
    ],
    "path": "https://fount.wppbav.com/api/v2/brands",
    "per_page": 15,
    "to": 15,
    "total": 2434
  }
}
```
