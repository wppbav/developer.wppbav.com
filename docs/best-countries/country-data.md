# Country Data

The country data API contains details about how people perceive countries across the Best Countries metrics and factors. The Best Countries data has two levels:

- Raw/Respondent Level data.
- Calculated data.

For building on top of Best Countries, you typically want the calculated data as the respondent level data is put through a series of processing pipelines to arrive at the scores and ranks of Best Countries. We do not recommend that you calculate this yourself.

Country data has two types of data:

- **Attributes. (`attributes`)** The 74 imagery/perception attributes that respondents answer in the Best Countries survey.
- **Factors. (`factors`)** The 10 factors that contribute to GDP growth and is made up by a selection of the attributes. Included in the factors is the overall score that is a weighted average of all factors.

Country data has two types of scores:

- **Scores. (`scores`)** A normalized 100-point score where 100 is best and 0 is worst, scaled across the countries and calculated through a pipeline based on the responses.
- **Ranks. (`ranks`)** The 100-point score turned into a sorted simple rank against the other countries, where 1 is the best.

Any other data type or score type returns a `400 Bad Request` response.

## Creating a query

The endpoint HTTP query accepts dynamic parameters for the year, score type and data type as described above. In a generic case, the query looks like this:

```http
GET /api/v2/best-countries/countries/{year}/{dataType}/{scoreType}
```

Where `{year}` is either the system ID of the year or the calendar year (e.g. `2024`), `{dataType}` is `attributes` or
`factors` and `{scoreType}` is `scores` or `ranks`. A `404` is returned if the year has no Best Countries data.

This endpoint requires a token with the `bav:best-countries-data` scope.

For example, getting the factor ranks for 2024 would look like this:

```http
GET /api/v2/best-countries/countries/2024/factors/ranks
```

## Schema

The API response for the country data endpoint will give you an array of datapoint objects in a `data` key. The response is not paginated. Each object is a one-level object that contains a few metadata fields and a series of metrics. The meta fields are:

- `country`. The name of the country the datapoint relates to.
- `country_id`. The system ID of the country.
- `country_code`. The ISO 3166-1 alpha-2 two-letter country code.
- `year_id`. The system ID of the year.

The metric fields are made up by the metric or factor key and its corresponding value.

## Filters

For convenience, a set of filters allow you to further refine the data:

- `country_codes`. A comma-separated list of two-letter ISO country codes to include data from.
- `countries`. A comma-separated list of country system IDs to include data from.

When neither filter is given, every country is returned. Unlike most other endpoints, the filters are applied as plain
query parameters (not inside `filter[...]`) like this:

```http
GET /api/v2/best-countries/countries/2024/factors/ranks?country_codes=US
```

## Sorting

By default the data will be sorted by the country name. All fields returned by the endpoint are [sortable](../customizing/filters#sorting-results) using the `sort` query parameter, prefixed with `-` for descending order (e.g. `sort=-total`). Only one sort column is supported.
