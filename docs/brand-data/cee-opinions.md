# Consumer Equality Equation Opinions

## What are Consumer Equality Equation opinions?

The Consumer Equality Equation study is a study on minority ethnic groups in the UK. This endpoint gives you access to the
aggregated responses by ethnic group to several questions about opinions.

## List all opinions

To list all of the opinions and browse them through the API, use the list endpoint:

```http request
GET /api/v2/cee-opinions
```

## Get an opinion

If you already have the system ID of an opinion, you can also get its details directly.

```http request
GET /api/v2/cee-opinions/123
```

Where `123` is the system ID of the cee opinion.

The API returns opinion records only for studies that you have access to. The endpoints are read-only and require a token
with the `bav:brand-data` scope.

## Schema

### Full response schema

The schema is large, so this page does not show it. Each record is one study, market, year and audience. It contains
the `id`, `created_at` and `updated_at` columns and one column for each opinion. The values are in percent.

You can filter on, sort by and select every opinion column. To select columns, use [fields](../customizing/fields.md).
You can do the same with `id` (exact filter), `created_at` and `updated_at`.

## Additional Filters

These filters do not match a column, but you use them with the same `filter[name]=value` format as the
[default filters](../customizing/filters.md):

- `years` - A comma-separated list of year IDs. This filters the opinions to only those for the given years.
- `year_number` - A comma-separated list of year numbers. This filters the opinions to only those for the given
  years.
- `studies` - A comma-separated list of study IDs. This filters the opinions to only those for the given studies.
- `audiences` - A comma-separated list of audience IDs. This filters the opinions to only those in the given
  audiences.
- `countries` - A comma-separated list of country IDs. This filters the opinions to only those for the given
  countries.
- `country_code` - A comma-separated list of two-letter ISO country codes. This filters the opinions to only those
  for the given countries.
- `updated_since` - A date. Include only records updated on or after this date.

:::note

Unlike most other endpoints, the year number and country code filters on this endpoint are singular: `year_number` and
`country_code`.

:::

## Relationships & includes

By default, the API does not include relationships. For more information, see the
[includes section](../customizing/includes). The following relationships are available:

- `study` - The [study](../studies/studies.md) the opinions were measured in.
- `country` - The [country](../metadata/countries.md) the opinions were measured in.
- `year` - The [year](../metadata/years.md) the opinions were measured in.
- `audience` - The [audience](../audiences/audiences.md) the opinions are for.
