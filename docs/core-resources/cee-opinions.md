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

## Relationships & includes

By default, relationships apart from the sector are not included. See
the [includes section](../customizing/includes) for more information on how this works. The following relationships
are available:

- `study` - The [study](./companies.md) .
- `country` - The [country](./countries.md) .
- `year` - The [year](./years.md) .
- `base` - The [base](./bases.md) .
