# Raw Data

The raw data endpoint gives you the respondent-level Best Countries data for one year, with every stored answer and no
ranking or scoring applied. Each row is one respondent's answers about one country.

:::tip Use the calculated data where you can
The respondent-level data is put through a series of processing pipelines to arrive at the Best Countries scores and
ranks. For building on top of Best Countries, you typically want the [country data](country-data.md) or
the [models](models.md) instead. We do not recommend that you calculate the scores yourself.
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

The endpoint returns a `404` if the year cannot be found or has no Best Countries data.

:::note Cities and Origin Index
The equivalent raw data endpoints for cities (`/api/v2/best-countries/cities/raw/{year}`) and the Origin Index
(`/api/v2/best-countries/origin-index/raw/{year}`) are not available and return a `400` response.
:::

## Schema

The response is [paginated](../pagination.md). Each row contains:

| Key             | Type    | Sortable           | Configurable       | Description                                                                                                         |
|-----------------|---------|:------------------:|:------------------:|---------------------------------------------------------------------------------------------------------------------|
| `id`            | integer | :white_check_mark: | :white_check_mark: | The record ID.                                                                                                      |
| `respondent_id` | integer | :white_check_mark: | :white_check_mark: | The respondent ID. Rows with the same respondent ID are one person's answers about different countries.             |
| `year`          | object  |        :x:         |        :x:         | The [year](../metadata/years.md) the answers were collected, with `id` and `year`.                                  |
| `country`       | object  |        :x:         |        :x:         | The [country](../metadata/countries.md) the answers are about, with `id`, `name`, `region`, `code`, `code_alpha3` and `code_numeric`. |
| _metric keys_   | number  | :white_check_mark: | :white_check_mark: | One field per [best countries metric](metrics.md) asked about countries, holding the respondent's answer.           |

The metric fields are named after the metric `key`, for example `familiarity`, `friendly`, `safe`,
`consider_visiting`, `consider_doing_business` or `has_top_universities`.

## Configurable fields

You may limit the response to specific fields with the `fields` parameter, passing a comma-separated list of field
names. Any column of the data can be used. When you limit the fields, include `id`, `year_id` and `country_id` in the
list to keep the record ID, the year and the country populated in the response.

```http request
GET /api/v2/best-countries/countries/raw/2024?fields=id,year_id,country_id,respondent_id,familiarity
```

## Sorting

All data fields can be [sorted](../customizing/filters#sorting-results) on. In addition, you can sort by the country
using `country.name`, `country.code`, `country.code_alpha3` and `country.code_numeric`.

```http request
GET /api/v2/best-countries/countries/raw/2024?sort=country.code,-familiarity
```
