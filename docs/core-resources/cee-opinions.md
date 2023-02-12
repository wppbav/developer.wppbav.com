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

## Schema

### Full response schema

Because the schema is large we omit it here. It consists of both metadata columns (study details) and the opinion and
value columns. The values are in percent.

## Additional Filters

For convenience, we have a set of additional filters for brands that are not available in
the [default filters](../customizing/filters.md) or are part of the columns. These are:

- `years` - A comma-separated list of year IDs. This will filter the opinions to only those for the given years.
- `year_numbers` - A comma-separated list of year numbers. This will filter the opinions to only those
  for the given years.
- `studies` - A comma-separated list of study IDs. This will filter the opinions to only those for the given studies.
- `audiences` - A comma-separated list of audience IDs. This will filter the opinions to only those in the given
  audiences.
- `countries` - A comma-separated list of country IDs. This will filter the opinions to only those for the given
  countries.
- `country_codes` - A comma-separated list of two-letter ISO country codes. This will filter the opinions to only those
  for the given countries.

## Relationships & includes

By default, relationships apart from the sector are not included. See
the [includes section](../customizing/includes) for more information on how this works. The following relationships
are available:

- `study` - The [study](companies.md) .
- `country` - The [country](countries.md) .
- `year` - The [year](years.md) .
- `base` - The [base](./bases.md) .
