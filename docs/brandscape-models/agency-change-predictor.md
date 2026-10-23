# Agency Change Predictor

The Agency Change Predictor (ACP) analyzes brand vulnerability using ten weighted checks to determine the likelihood of
an agency change. It combines brand equity metrics with category comparisons to provide a vulnerability assessment for
each brand.

## Creating a query

The endpoint accepts both `GET` (with query parameters) and `POST` (with a JSON body) requests.

```http request
GET /api/v2/tools/agency-change-predictor
POST /api/v2/tools/agency-change-predictor
```

This endpoint requires the `bav:brand-data` scope and that your account has access to the Agency Change Predictor in
The Fount.

## Parameters

The ACP takes the same filters as the [brandscape models](index.md#parameters), apart from `benchmarks` and `format`.
The filters can be passed as arrays (`brands[]=148&brands[]=149`) or, for backwards compatibility, as comma-separated
lists (`brands=148,149`).

| Key           |          Required?             | Type    | Description                                                                                                         |
|---------------|:------------------------------:|---------|---------------------------------------------------------------------------------------------------------------------|
| `brands`      |        At least one*           | array   | [Brand](../brands/brands.md) IDs or names.                                                                          |
| `studies`     |        At least one*           | array   | [Study](../studies/studies.md) IDs or names.                                                                        |
| `countries`   |        At least one*           | array   | [Country](../metadata/countries.md) IDs, codes or names.                                                            |
| `years`       |        At least one*           | array   | [Year](../metadata/years.md) IDs or year numbers.                                                                   |
| `audiences`   |  :x: (defaults to All Adults)  | array   | [Audience](../audiences/audiences.md) IDs or names.                                                                 |
| `study_types` | :x: (defaults to `syndicated`) | array   | The kinds of study that a `countries` and `years` filter may resolve to. See [brandscape models](index.md#parameters). |
| `category`    |              :x:               | integer | Only include brands in this [category](../studies/categories.md) ID.                                                |
| `search`      |              :x:               | string  | Search brands by name.                                                                                              |
| `customWeights` |            :x:               | object  | Custom weights for the checks, keyed by check name. See [custom weights](#custom-weights).                          |
| `mustPass`    |              :x:               | array   | Checks the brand must pass, i.e. problems it must not have. Max 10.                                                 |
| `mustNotPass` |              :x:               | array   | Checks the brand must not pass, i.e. problems it must have. Max 10.                                                 |

\* At least one of `brands`, `studies`, `countries` or `years` is required.

## The checks

Each check names a problem, so a brand passes a check when it does not have that problem. Each check has a default
weight that is used in the standard vulnerability score.

| Check                                       | Weight | Name                                | Description                                                                                         |
|---------------------------------------------|:------:|-------------------------------------|-----------------------------------------------------------------------------------------------------|
| `is_vulnerable`                             |   3    | Eroded Brand Equity                 | `differentiation < relevance < esteem < knowledge`                                                  |
| `has_momentum_warning`                      |   1    | Low Growth Potential                | `brand_strength < brand_stature * 1.1`                                                              |
| `low_differentiation`                       |   1    | Low Differentiation                 | Differentiation rank below 30.                                                                      |
| `has_low_popularity_growth`                 |   1    | Low Momentum                        | Popularity rank below 30.                                                                           |
| `has_high_churn`                            |   3    | High Churn                          | Lapsed users outnumber current users.                                                               |
| `has_lower_differentation_than_category`    |   3    | Lower Differentiation vs Category   | Differentiation below the category average.                                                         |
| `has_lower_popularity_growth_than_category` |   3    | Weaker Popularity vs Category       | Popularity rank below the category average.                                                         |
| `has_bigger_churn_than_category`            |   2    | Greater Churn vs Category           | Churn ratio above the category average.                                                             |
| `has_advocacy_under_category`               |   2    | Lower Advocacy                      | Recommendation below the category average.                                                          |
| `has_lower_preference_than_category`        |   1    | Lower Preference                    | Preference below the category average.                                                              |

The popularity rank is the "gaining in popularity" rank on the classic BAV methodology and the "trendy" rank on the
2025 methodology. It is returned as `raw_metrics.popularity_rank`.

:::note Spelling
The check `has_lower_differentation_than_category` contains a legacy typo ("differentation" instead of
"differentiation"). It is kept for backwards compatibility.
:::

The category comparisons average every brand that the study measured in the category, regardless of which brands you
asked for. They are worked out per study, so a brand is always compared with its own market.

A check is `null` when a metric it needs is missing for the brand, for example when usage was not asked. A `null`
check counts as passed in the score, and neither `mustPass` nor `mustNotPass` on that check matches the brand.

### Filtering on checks

Use `mustPass` and `mustNotPass` to filter the brands by their check results. A check cannot be in both lists. For
example, to get brands that are not vulnerable and not churning, but are poorly differentiated:

```http request
GET /api/v2/tools/agency-change-predictor?studies[]=635&mustPass[]=is_vulnerable&mustPass[]=has_high_churn&mustNotPass[]=low_differentiation
```

### Custom weights

Use `customWeights` to calculate a second vulnerability score with your own weights. Each weight is an integer from 0
to 10, keyed by check name. A weight of `0` drops the check from the score. A check that you leave out keeps its default
weight. At least one weight must be greater than 0.

```http request
GET /api/v2/tools/agency-change-predictor?studies[]=635&customWeights[is_vulnerable]=5&customWeights[has_high_churn]=4
```

## Response

The response contains a `meta` object and a `data` array. Every brand matching the filters is returned, including
brands that pass every check and so score zero.

### Meta

| Key                    | Type    | Description                                                                                                                                       |
|------------------------|---------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| `source`               | string  | A source label naming the studies and audiences, suitable for captioning.                                                                         |
| `studies_used`         | array   | The studies the data came from. This is useful when you filter by `countries`, since the studies are then chosen for you. Each study includes its `study_id`, `name`, `country`, `year` and `type`, along with other details where available. |
| `is_category_specific` | boolean | Whether the data is category specific.                                                                                                            |

### Data

| Key               | Type   | Description                                                                         |
|-------------------|--------|-------------------------------------------------------------------------------------|
| `brand`           | object | The [brand](../brands/brands.md), with `id` and `name`.                             |
| `brand_variation` | object | The brand variation, with `id` and `name`.                                          |
| `sector`          | object | The [sector](../metadata/sectors.md), with `id` and `name`.                         |
| `category`        | object | The [category](../studies/categories.md), with `id` and `name`.                     |
| `study`           | object | The [study](../studies/studies.md), with `id` and `name`.                           |
| `country`         | object | The [country](../metadata/countries.md), with `id` and `name`.                      |
| `year`            | object | The [year](../metadata/years.md), with `id` and `name`.                             |
| `audience`        | object | The [audience](../audiences/audiences.md), with `id` and `name`.                    |
| `data`            | object | The vulnerability scores and check results. See below.                              |

The `data` object contains:

| Key                            | Type   | Description                                                                                                                                                                                         |
|--------------------------------|--------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `vulnerability_score_standard` | float  | The vulnerability score (0-100) using the default weights.                                                                                                                                          |
| `vulnerability_score_custom`   | float  | The vulnerability score (0-100) using your `customWeights`.                                                                           |
| `checks`                       | object | The result of each of the ten [checks](#the-checks), keyed by check name. `true` when the brand has the problem, `false` when it does not, and `null` when the check could not be evaluated.       |
| `category_comparisons`         | object | The category averages used by the comparison checks: `differentiation_average`, `gaining_in_popularity_average`, `one_i_prefer_average`, `recommendation_average` and `churn_ratio`.              |
| `raw_metrics`                  | object | The metric values used in the checks: `differentiation_rank`, `relevance_rank`, `esteem_rank`, `knowledge_rank`, `brand_strength_rank`, `brand_stature_rank`, `gaining_in_popularity_rank`, `popularity_rank`, `total_users_pct`, `lapsed_user_pct`, `churn_ratio`, `recommend_to_a_friend_pct` and `one_i_prefer_pct`. |
