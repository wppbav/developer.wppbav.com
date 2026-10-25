# Filters & Sorting

## Filters

Each resource has a set of filters, so you can get only the data that you need. Some filters are available for all
resources, and some filters are specific to a resource.

The documentation for each resource contains a list of the fields that you can filter on. Below is information about
the filters that are available for all resources.

Apply filters with query parameters on the request URL. Filters use the format `filter[field]=value`.

For example, to search for brands with the name "Facebook", use this request:

```http request
GET /api/v2/brands?filter[name]=Facebook
```

:::note
In general, all filters except ID filters use a like/contains search. This means that a search for "Facebook" also
returns "Facebook Messenger".
:::

## Sorting Results

You can sort all index resources to show data in a specific order. The default sort order is different for each
resource. You can find it in the documentation for the resource. Usually, resources are sorted by their `id` field in
ascending order.

Each resource also has a set of "sortable fields". The documentation for each endpoint lists the fields that are
sortable.

To set the sort order, set the `sort` parameter to the field that you want to sort on. To sort in descending order, put
a minus `-` sign before the column name.

A query that sorts brands by name can look like this:

```http request
# Sort in ascending order (A-Z).
GET /api/v2/brands?sort=name

# Sort in descending order (Z-A).
GET /api/v2/brands?sort=-name
```

## Updated Since

On an index request, you can get only the data that was updated after a specific date and time. To do this, use the
`updated_since` filter. This filter takes a date time value in the format `YYYY-MM-DD HH:II:SS`.

A request that shows only the brands that were updated after January 1, 2023 can look like this:

```http request
GET /api/v2/brands?filter[updated_since]=2023-01-01
```

Update times are usually shallow. For example, if the brandscape data of a brand is updated, the updated timestamp of
the brand itself does not change. But if the brand itself gets an update to its global brand name, the timestamp
changes.

## Pagination

For more information about pagination, see the [pagination section](../pagination.md) of the documentation.
