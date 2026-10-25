# Country Indicators

## What are country indicators?

Country indicators are yearly macroeconomic and demographic figures for each [country](countries.md), such as
population, GDP and inflation. There is one set of indicators per country and [year](years.md).

## List the indicators for a country

To list all years of indicators for a country, use the list endpoint:

```http request
GET /api/v2/countries/123/indicators
```

Where `123` is the system ID of the country. You can also use the country's two-letter (ISO 3166-1 alpha-2) or
three-letter (ISO 3166-1 alpha-3) code instead of the ID:

```http request
GET /api/v2/countries/GB/indicators
```

## Get the indicators for a year

If you already have the system ID of the [year](years.md), you can also get the indicators of a country for a single
year directly.

```http request
GET /api/v2/countries/123/indicators/45
```

Where `123` is the system ID or ISO code of the country and `45` is the system ID of the year.

## Schema

| Key          | Type    | Description                                                                 |
|--------------|---------|-----------------------------------------------------------------------------|
| `id`         | integer | The system ID of the country indicator record.                              |
| `year`       | object  | The [year](years.md) the indicators are for, with its `id` and `year`.      |
| `indicators` | array   | The indicators for the year, sorted by key. See below.                      |
| `created_at` | string  | A datetime string when this record was first created.                       |
| `updated_at` | string  | A datetime string when this record was last updated.                        |

Each item in `indicators` contains:

- `key` - The key of the indicator. See the list below.
- `value` - The value of the indicator. Null if the figure is not available.
- `detailed_description` - A detailed description of the indicator, with its unit.
- `simple_description` - A short description of the indicator.
- `axis_label` - A label to use for the indicator on a chart axis.

```json
{
    "key": "gdp_capita",
    "value": 46125.26,
    "detailed_description": "GDP per capita (Current US$)",
    "simple_description": "GDP per capita",
    "axis_label": "Current US$"
}
```

### Available indicators

| Key                                         | Description                                                                 |
|---------------------------------------------|-----------------------------------------------------------------------------|
| `agriculture_value_added_percent_gdp`       | Agriculture, forestry, and fishing, value added (% of GDP)                  |
| `co2_emissions_tons_per_capita`             | CO2 emissions (metric tons per capita)                                      |
| `debt_percent_gdp`                          | Debt in percent of GDP (annual %)                                           |
| `exports_of_goods_services_percent_gdp`     | Exports of goods and services (% of GDP)                                    |
| `fertility_rate`                            | Fertility rate, total (births per woman)                                    |
| `gdp`                                       | GDP (Current US$)                                                           |
| `gdp_capita`                                | GDP per capita (Current US$)                                                |
| `gdp_growth_annual`                         | GDP growth (annual %)                                                       |
| `gini`                                      | Gini index                                                                  |
| `gni`                                       | GNI, Atlas method (current US$)                                             |
| `gni_capita`                                | GNI per capita, Atlas method (current US$)                                  |
| `high_technology_exports_percent_total`     | High-technology exports (% of manufactured exports)                         |
| `imports_of_goods_services_percent_gdp`     | Imports of goods and services (% of GDP)                                    |
| `income_share_highest_twenty`               | Income share held by highest 20%                                            |
| `income_share_lowest_twenty`                | Income share held by lowest 20%                                             |
| `industry_value_added_percent_gdp`          | Industry (including construction), value added (% of GDP)                   |
| `inflation_consumer_prices_annual`          | Inflation, consumer prices (annual %)                                       |
| `internet_users_pct`                        | Individuals using the Internet (% of population)                            |
| `life_expectancy`                           | Life expectancy at birth, total (years)                                     |
| `market_cap_domestic_companies_percent_gdp` | Market capitalization of listed domestic companies (% of GDP)               |
| `mobile_subscriptions_per_hundred`          | Mobile cellular subscriptions (per 100 people)                              |
| `net_migration`                             | Net migration                                                               |
| `net_trades_goods_services`                 | Net trade in goods and services (BoP, current US$)                          |
| `population`                                | Population, total                                                           |
| `population_growth_annual`                  | Population growth (annual %)                                                |
| `poverty_poverty_lines_percent_population`  | Poverty headcount ratio at national poverty lines (% of population)         |
| `prevalence_hiv_total`                      | Prevalence of HIV, total (% of population ages 15-49)                       |
| `real_interest_rate`                        | Real interest rate (%)                                                      |
| `revenue_excluding_grants_percent_gdp`      | Revenue, excluding grants (% of GDP)                                        |
| `services_value_added_percent_gdp`          | Services, value added (% of GDP)                                            |

## Filtering & sorting

The list endpoint supports the following filters:

- `year_id` - A comma-separated list of [year](years.md) IDs.
- `updated_since` - Only return records updated on or after this date.
  See [filters](../customizing/filters.md).

You can sort by `id`, `created_at`, `updated_at`, any of the indicator keys, or by the year with `year.year`. For
example, to get the most recent year first:

```http request
GET /api/v2/countries/GB/indicators?sort=-year.year
```
