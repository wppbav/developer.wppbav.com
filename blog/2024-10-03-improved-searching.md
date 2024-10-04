---
slug: improved-searching
title: Improved Searching
authors: erikbernskiold
---

Previously you have been able to filter on any text fields returned by all endpoints. The problem with this type of
filter is that it relies on common "like" searches which are not quite as good at interpreting various linguistic
nuances as you would expect as a user.

To combat this we are introducing support for using our underlying search engine index in select API resources.

The search engine looks across multiple fields and interprets language better. It also prioritizes results, meaning that
the more likely result ends up higher.

Each endpoint documentation will show if it supports searching or not. Today the following endpoints have searching support:

- Audiences
- Audience Groups
- Brands
- Categories
- Countries
- Regions
- Sectors
- Studies
- Years

Using searching is as simple as adding the `search` query parameter to your request. For example on the brands endpoint:

```http request
GET https://fount.wppbav.com/api/v2/brands?search=Apple
```

Take a look at the [searching documentation](https://developer.wppbav.com/docs/2.x/customizing/searching) for more
details.
