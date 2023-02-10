---
displayed_sidebar: apiSidebar
---

# Pagination

All top-level API resources have support for fetching data in bulk via a list method. You can, for example, list brands
and collections.

## Parameters

You may use the following query parameters on list resources:

- `page` will let you set the currently active page.
- `per_page` will let you set how many records you want to retrieve per page. Maximum of 1000. Default is 25.

URL Example:

```http request
GET https://fount.wppbav.com/api/v2/brands?page=2&per_page=50
```

## Response

The structure of the API list response is as follows:

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
```
