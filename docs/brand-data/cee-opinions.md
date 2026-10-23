# Consumer Equality Equation Opinions

## What are Consumer Equality Equation opinions?

The Consumer Equality Equation study is a study on minority ethnic groups in the UK. This endpoint lets you access the
aggregated responses by ethnic group on a number of questions around opinions.

## List all opinions

To list all of the opinions and browse them via the API, use the list endpoint:

```http request
GET /api/v2/cee-opinions
```

## Get an opinion

You may also directly retrieve an opinion's details if you already have its system ID.

```http request
GET /api/v2/cee-opinions/123
```

Where `123` is the system ID of the cee opinion.

The opinion records are only returned for studies you have access to. The endpoints are read-only and require a token
with the `bav:brand-data` scope.

## Schema

### Full response schema

Because the schema is large we omit it here. Each record is one study, market, year and audience. It consists of the
`id`, `created_at` and `updated_at` columns plus one column per opinion. The values are in percent.

Every opinion column can be filtered on, sorted by and selected with [fields](../customizing/fields.md), as can `id`
(exact filter), `created_at` and `updated_at`.

## Additional Filters

For convenience, we have a set of additional filters for opinions that are not available in
the [default filters](../customizing/filters.md) or are part of the columns. These are:

- `years` - A comma-separated list of year IDs. This will filter the opinions to only those for the given years.
- `year_number` - A comma-separated list of year numbers. This will filter the opinions to only those for the given
  years.
- `studies` - A comma-separated list of study IDs. This will filter the opinions to only those for the given studies.
- `audiences` - A comma-separated list of audience IDs. This will filter the opinions to only those in the given
  audiences.
- `countries` - A comma-separated list of country IDs. This will filter the opinions to only those for the given
  countries.
- `country_code` - A comma-separated list of two-letter ISO country codes. This will filter the opinions to only those
  for the given countries.
- `updated_since` - A date. Only include records updated on or after this date.

:::note

Unlike most other endpoints, the year number and country code filters on this endpoint are singular: `year_number` and
`country_code`.

:::

## Relationships & includes

By default, relationships are not included. See the [includes section](../customizing/includes) for more information
on how this works. The following relationships are available:

- `study` - The [study](../studies/studies.md) the opinions were measured in.
- `country` - The [country](../metadata/countries.md) the opinions were measured in.
- `year` - The [year](../metadata/years.md) the opinions were measured in.
- `audience` - The [audience](../audiences/audiences.md) the opinions are for.
