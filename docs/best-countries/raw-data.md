# Raw Data

The raw data endpoint gives you the respondent-level Best Countries data for one year, with every stored answer. The
endpoint does not apply ranks or scores to the data. Each row is one respondent's answers about one country.

:::tip Use the calculated data where you can
A series of processing pipelines changes the respondent-level data into the Best Countries scores and ranks. To build
on top of Best Countries, you usually need the [country data](country-data.md) or the [models](models.md) instead. We do not recommend that you calculate the scores yourself.
:::

This endpoint requires the **Best Countries Data** (`bav:best-countries-data`) scope.

## Creating a query

```http request
GET /api/v2/best-countries/countries/raw/{year}
```

Where `{year}` is either the system ID of the [year](../metadata/years.md) or the calendar year, for example:

```http request
GET /api/v2/best-countries/countries/raw/2024
```

If the endpoint cannot find the year, or the year has no Best Countries data, the endpoint returns a `404`.

## Schema

The response is [paginated](../pagination.md). Each row contains:

| Key             | Type    | Sortable           | Configurable       | Description                                                                                                         |
|-----------------|---------|:------------------:|:------------------:|---------------------------------------------------------------------------------------------------------------------|
| `id`            | integer | :white_check_mark: | :white_check_mark: | The record ID.                                                                                                      |
| `respondent_id` | integer | :white_check_mark: | :white_check_mark: | The respondent ID. Rows with the same respondent ID are one person's answers about different countries.             |
| `year`          | object  |        :x:         |        :x:         | The [year](../metadata/years.md) the answers were collected, with `id` and `year`.                                  |
| `country`       | object  |        :x:         |        :x:         | The [country](../metadata/countries.md) the answers are about, with `id`, `name`, `region`, `code`, `code_alpha3` and `code_numeric`. |
| _metric keys_   | number  | :white_check_mark: | :white_check_mark: | One field per [best countries metric](metrics.md) asked about countries, with the respondent's answer.              |

The metric fields are named after the metric `key`, for example `familiarity`, `friendly`, `safe`,
`consider_visiting`, `consider_doing_business` or `has_top_universities`.

## Configurable fields

To limit the response to specific fields, use the `fields` parameter with a comma-separated list of field names. You
can use any column of the data. When you limit the fields, include `id`, `year_id` and `country_id` in the list. These
fields keep the record ID, the year and the country populated in the response.

```http request
GET /api/v2/best-countries/countries/raw/2024?fields=id,year_id,country_id,respondent_id,familiarity
```

## Sorting

You can [sort](../customizing/filters#sorting-results) on all data fields. You can also sort by the country
with `country.name`, `country.code`, `country.code_alpha3` and `country.code_numeric`.

```http request
GET /api/v2/best-countries/countries/raw/2024?sort=country.code,-familiarity
```
