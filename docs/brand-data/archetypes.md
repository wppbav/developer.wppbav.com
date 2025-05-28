# Archetypes

Archetypes data are split across two types:

- Cultural archetypes
- Competitive archetypes

A cultural archetype is the score of each archetype "in culture", meaning against all the other brands in a study (
market + year). A competitive archetype is the score of each archetype against a specific set of brands (the competitive
set). A competitive set can be defined either by a collection or a category.

## Creating a query

```http request
GET /api/v2/tools/archetypes
```

## Parameters

When you query the Archetypes endpoint the parameters are split between filtering parameters and comparison parameters.
The filter parameters filter down the data, while the comparison parameters are used to create competitive archetypes.

| Key           |          Required?           | Type          | Description                                                     |
|---------------|:----------------------------:|---------------|-----------------------------------------------------------------|
| `brands`      |             :x:              | numeric array | Filter parameter. A comma-separated list of Brand IDs.          |
| `studies`     |      :white_check_mark:      | numeric array | Filter parameter. A comma-separated list of Study IDs.          |
| `audiences`   | :x: (defaults to All Adults) | numeric array | Filter parameter. A comma-separated list of Audience IDs.       |
| `collections` |             :x:              | numeric array | Comparison parameter. A comma-separated list of Collection IDs. |
| `categories`  |             :x:              | numeric array | Comparison parameter. A comma-separated list of Category IDs.   |