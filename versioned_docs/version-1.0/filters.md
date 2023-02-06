# Filters & Sorting

To allow you to retrieve only the data that you need each resource comes with a set of filters. Some filters are globally available throughout all resources, while some are resource-specific.

Each resource documentation contains a list of filters that can be applied. Below you'll find information for the globally available filters.

Filters are applied via query parameters to the request URL. For example, to search the brands index for a brand name, you'd perform the following request:

```http request
GET /api/v1/brands?s=Facebook
```

## Searching
Most resources contain searching options, but not all. Please refer to the list for each resource. Where available, the searching works in the same way using the `s` query parameter, followed by your search string.

```http request
GET /api/v1/brands?s=Facebook
```

## Sorting Results
All index resources can be sorted to present data in a specific order. Default sorting varies by resource and can be found in the respective resource documentation.

Each resource also has a set number of "sortable fields" which is listed in the resource documentation.

Sorting is done in two steps, by defining the field you want to sort by (`order_by` query parameter), as well as which order you want to sort (`order` query parameter).

- `asc` is used as value for ascending order.
- `desc` is used as value for descending order.

A sorting query to show brands in ascending order by name (A-Z) may look like this:

```http request
GET /api/v1/brands?order_by=name&order=asc
```

## Updated Since
You may choose to retrieve data on an index request that has been updated after a specific date and time. This is done via the `updated_since` query parameter. This takes a date time value of `YYYY-MM-DD HH:II:SS`.

A request to show brands that have been updated only after January 1, 2021 may look like this:

```http request
GET /api/v1/brands?updated_since=2021-01-01
```

## Pagination
Please refer to the [pagination section](./pagination.md) of the documentation for more information on pagination.
