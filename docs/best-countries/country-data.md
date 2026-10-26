# Country Data

The country data API contains details about how people perceive countries across the Best Countries metrics and factors. The Best Countries data has two levels:

- Raw/Respondent Level data.
- Calculated data.

To build on top of Best Countries, you usually need the calculated data. A series of processing pipelines changes the respondent-level data into the scores and ranks of Best Countries. We do not recommend that you calculate this yourself.

Country data has two types of data:

- **Attributes. (`attributes`)** The 74 imagery/perception attributes that respondents answer in the Best Countries survey.
- **Factors. (`factors`)** The 10 factors that contribute to GDP growth. The factors are made from a selection of the attributes. The factors also include the overall score, which is a weighted average of all factors.

Country data has two types of scores:

- **Scores. (`scores`)** A normalized 100-point score where 100 is best and 0 is worst. The score is scaled across the countries. A pipeline calculates the score from the responses.
- **Ranks. (`ranks`)** The 100-point score, changed into a simple sorted rank against the other countries, where 1 is the best.

Any other data type or score type returns a `400 Bad Request` response.

## Creating a query

The endpoint HTTP query accepts dynamic parameters for the year, score type and data type, as described above. The general form of the query is:

```http
GET /api/v2/best-countries/countries/{year}/{dataType}/{scoreType}
```

Where `{year}` is either the system ID of the year or the calendar year (for example `2024`), `{dataType}` is `attributes` or
`factors` and `{scoreType}` is `scores` or `ranks`. If the year has no Best Countries data, the endpoint returns a `404`.

This endpoint requires a token with the `bav:best-countries-data` scope.

For example, to get the factor ranks for 2024, send this request:

```http
GET /api/v2/best-countries/countries/2024/factors/ranks
```

## Schema

The response of the country data endpoint gives you an array of datapoint objects in a `data` key. The response is not paginated. Each object is a one-level object with some metadata fields and a series of metrics. The metadata fields are:

- `country`. The name of the country the datapoint relates to.
- `country_id`. The system ID of the country.
- `country_code`. The ISO 3166-1 alpha-2 two-letter country code.
- `year_id`. The system ID of the year.

Each metric field contains the metric or factor key and its related value.

## Filters

For convenience, you can use a set of filters to refine the data more:

- `country_codes`. A comma-separated list of two-letter ISO country codes to include data from.
- `countries`. A comma-separated list of country system IDs to include data from.

If you do not give a filter, the endpoint returns every country. Unlike most other endpoints, you send the filters as
plain query parameters (not inside `filter[...]`), as in this example:

```http
GET /api/v2/best-countries/countries/2024/factors/ranks?country_codes=US
```

## Sorting

By default, the endpoint sorts the data by the country name. You can [sort](../customizing/filters#sorting-results) on all fields that the endpoint returns. Use the `sort` query parameter. For descending order, put `-` before the field name (for example `sort=-total`). You can sort on only one column.
