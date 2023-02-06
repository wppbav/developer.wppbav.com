# Filters & Sorting

## Filters

To allow you to retrieve only the data that you need each resource comes with a set of filters. Some filters are
globally available throughout all resources, while some are resource-specific.

Each resource documentation contains a list of which fields are filterable. Below you'll find information for the
globally available filters.

Filters are applied via query parameters to the request URL. They are built up on the format: `filter[field]=value`.

For example, to search for brands with the name "Facebook" you would use the following request:

```http request
GET /api/v2/brands?filter[name]=Facebook
```

:::note
In general all filters apart from ID filters are applied using a like/contains search. This means that a search for "
Facebook" will also return "Facebook Messenger".
:::

## Sorting Results

All index resources can be sorted to present data in a specific order. Default sorting varies by resource and can be
found in the respective resource documentation. Generally resources are sorted by their `id` field in ascending order.

Each resource also has a set number of "sortable fields". Each endpoint documentation will list which fields are
sortable.

You define the sort order by setting the `sort` parameter and the field you want to sort on. To sort in descending order
you prefix the column with a minus `-` sign.

A sorting query to show brands by name may look like this:

```http request
# Sort in ascending order (A-Z).
GET /api/v2/brands?sort=name

# Sort in descending order (Z-A).
GET /api/v2/brands?sort=-name
```

## Updated Since

You may choose to retrieve data on an index request that has been updated after a specific date and time. This is done
via the `updated_since` filter. This takes a date time value of `YYYY-MM-DD HH:II:SS`.

A request to show brands that have been updated only after January 1, 2023 may look like this:

```http request
GET /api/v2/brands?filter[updated_since]=2023-01-01
```

Please note that update times are generally shallow. For example, if a brand's brandscape data is updated, the updated
timestamp for the brand itself does not change. However, if the brand itself receives an update to its global brand
name, the timestamp is changed.

## Pagination

Please refer to the [pagination section](../pagination.md) of the documentation for more information on pagination.
