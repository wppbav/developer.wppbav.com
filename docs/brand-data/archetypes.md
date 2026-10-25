# Archetypes

Archetypes show how strongly a brand is associated with each of the twelve BAV brand archetypes, such as Inventor,
Expert and Rebel. Each archetype has a percentile rank and a construct score.

There are two types of archetypes data:

- Cultural archetypes
- Competitive archetypes

A cultural archetype is the score of each archetype "in culture", that is, against all the other brands in a study (
market + year). A competitive archetype is the score of each archetype against a specific set of brands (the competitive
set). A collection or a category can define a competitive set.

## Creating a query

```http request
GET /api/v2/tools/archetypes
```

## Parameters

The Archetypes endpoint has two kinds of parameters: filter parameters and comparison parameters. The filter parameters
filter the data. The comparison parameters create competitive archetypes.

| Key           |          Required?           | Type    | Description                                                                                       |
|---------------|:----------------------------:|---------|---------------------------------------------------------------------------------------------------|
| `brands`      |             :x:              | integer | Filter parameter. A single Brand ID.                                                              |
| `studies`     |      :white_check_mark:      | integer | Filter parameter. A single Study ID.                                                              |
| `audiences`   | :x: (defaults to All Adults) | integer | Filter parameter. A single Audience ID.                                                           |
| `categories`  |             :x:              | integer | Comparison parameter. A single Category ID to compare against. You can combine it with `collections`. |
| `collections` |             :x:              | integer | Comparison parameter. A single Collection ID to compare against. You can combine it with `categories`. |

## Response

The response contains a `data` array with one entry per brand. Each entry has `brand` (with `id`, `name` and
`local_name`), `brand_variation`, `sector`, `category`, `study`, `country`, `year` and `audience` objects. Each entry also has a
`data` object keyed by archetype (`inventor`, `expert`, `leader`, `innocent`, `enticer`, `fashion_forward`,
`adventurer`, `rebel`, `entertainer`, `companion`, `nurturer` and `trusted_friend`). Each archetype has a `rank` and a
`construct`.
