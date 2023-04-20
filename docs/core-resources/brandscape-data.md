# Brandscape Data

## What is brandscape data?

A fundamental core concept of BAV is the "Brandscape" which is the set of brands in a given country for a given year.
The brandscape data is the collection of metrics and their respective values for the brandscape. You can, in practical
terms, see the brandscape data is the "BAV data".

The brandscape data endpoint gives you data by:

- [Study](studies.md)
- [Year](years.md)
- [Country](countries.md)
- [Audience](audiences.md)
- [Category](categories.md)

You can customize the response to include only the data you need, such as only specific metrics.

:::note Filtering is required
Please note that filtering is required on the brandscapa data endpoint to achieve quick response times. For best
performance, please use these combinations of filters:

- Study + Audience + Brand + Category
- Country + Year + Audience
- Brand + Audience + Country + Year

You should read these from left to right. A combination of "Study + Audience" works just as well as "Study + Audience +
Brand". However, "Category + Audience" will not.

You may filter on one or multiple of each type.
:::

## List all brandscape data

To list all of the brandscape data and browse them via the API, use the list endpoint:

```http request
GET /api/v2/brandscape-data
```

## Get a brandscape data

You may also directly retrieve a brandscape data's details if you already have its system ID.

```http request
GET /api/v2/brandscape-data/123
```

Where `123` is the system ID of the brandscape data.

## Schema

### Full response schema

The brandscape data schema is large (≈ 350 fields). For that reason we omit the full schema here. It is divided into:

- Metadata (for example: study, category, brand, audience information)
- Metric Data

The metric data field names are built up by the `import_name` of the [Brand Metrics](metrics.md) resource and a suffix
depending on the score type. Not all metrics have all score types. The metric resource will show the available score
types. Suffixes are:

- `_rank` for percentile rank scores.
- `_pct` for percentage scores.
- `_c` for construct scores.
- `_brandscape_index` for index scores against the entire brandscape.
- `_category_index` for index scores against the brand's category.
- No suffix for value scores, like base sizes.

In addition to this, there are two special fields:

- `is_duplicate` will be true if the brand is studied in multiple categories. All scores but the usage, preference and
  recommendation scores are category-agnostic which means that if you perform aggregate analysis (average, standard
  deviation etc) on these scores you want to remove duplicates first.
- `brand_name` is the local brand name that was asked in the survey. This can be different from the global brand name
  from the brands relationship. You should use this field in combination with the data when available as the brand name.

All fields are sortable, filterable and configurable.

## Additional Filters

In addition to the standard filters and all the fields, we have a set of helper filters to make querying the data easier
by reducing the need for lookups in our database. These are:

- `countries` - A comma-separated list of country IDs (for example: 1,2,3).
- `country_code`. A comma-separated list of ISO two letter country codes (for example: GB) which can take the place of
  a `country_id` filter.
- `years` - A comma-separated list of year IDs (for example: 1,2,3).
- `year_number`. A comma-separated of years by their numbers (for example: 2022) which can be used over a `year_id`
  filter.
- `brands` - A comma-separated list of brand IDs (for example: 1,2,3).
- `categories` - A comma-separated list of category IDs (for example: 1,2,3).
- `audiences` - A comma-separated list of audience IDs (for example: 1,2,3).
- `studies` - A comma-separated list of study IDs (for example: 1,2,3).
- `sectors` - A comma-separated list of sector IDs (for example: 1,2,3).
- `companies` - A comma-separated list of company IDs (for example: 1,2,3)
- `brand_name`. A text search on the brand name.

## Additional Column Customizations

In addition to the standard column customizations we have a helper parameter. This is used as a top-level query
parameter.

- `metric_keys` - A comma-separated list of metric keys (for example: `differentation,relevance`) which can be used to
  automatically get all the available score types for these metrics only without having to get each field specifically.

## Relationships & includes

By default, relationships apart from the sector are not included. See
the [includes section](../customizing/includes) for more information on how this works. The following relationships
are available:

- `study` - The [study](studies.md) for the brandscape data record.
- `year` - The [year](years.md) for the brandscape data record.
- `country` - The [country](countries.md) for the brandscape data record.
- `audiences` - The [audience](./audiences.md) for the brandscape data record.
- `brand` - The [brand](brands.md) for the brandscape data record.
- `category` - The [category](categories.md) for the brandscape data record.
- `sector` - The [sector](sectors.md) for the brandscape data record.
- `company` - The [company](companies.md) for the brandscape data record.
