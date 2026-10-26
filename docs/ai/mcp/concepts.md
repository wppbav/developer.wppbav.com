---
sidebar_label: Concepts for Agents
---

# Concepts for Agents

This page explains the BAV concepts that are most important when you build an agent on the
[BAV MCP server](./bav.md). The tool descriptions and responses already explain most of this to the model. But if you
know these concepts, you can write better system prompts. You can also understand why an agent does what it does.

## Studies, not markets and years

In BAV, we collect data in **studies**. A study is one market and one year (or period) of one **study type**. We
survey most markets one time a year at most. We usually survey the US three times a year. We survey some markets less
than one time a year.

More than one study type can include the same market and year. You cannot use one study type in place of another:

| Type         | What it is                                                                                                  |
|--------------|-------------------------------------------------------------------------------------------------------------|
| `syndicated` | The full, standard BAV study. It has the `recommended` mark. Use it unless the user asks for a different type. |
| `snap`       | SnapBAV. Covers fewer brands and is more volatile between waves.                                            |
| `fused`      | AO+BAV. A probabilistic model that makes Audience Origin audience targeting possible. You cannot compare it to the standard study. |
| `custom`     | A bespoke study with a tailored sample, brand set or questions.                                              |

Thus, the brand data tools select data by **study ID**, not by market and year. The usual procedure is:

1. Call `get-markets` to list the available studies. You can also give `countries` and `years`.
2. Select the study with the `recommended` mark, unless the user asked for a different type.
3. Call the data tool with that study ID in `studies`.

If an agent calls a data tool with only `countries` and `years`, the tool does not guess. It replies with a message
that starts with `NEEDS SELECTION` and lists the applicable studies. The agent then calls the tool again with the study
that it selected. This is a normal, successful response, not an error. Thus, the agent continues and does not stop.

Also remember these points:

- If a study has a `caveat`, the agent must tell the user which study it used. The agent must also give the caveat to
  the user.
- Each study has a `methodology` (the version of the BAV model, such as BAV 3). The calculation of metrics is different
  between versions. Thus, the agent must tell the user about comparisons across methodologies.
- Each data response starts with a `request` block that repeats the filters that the tool used. This block includes
  `studies_used` and an `assumed` list of all default values (such as the "All Adults" audience).
- AURA studies are separate. The brand data tools never return AURA data, and the AURA tools never return consumer
  data. `get-aura-studies` lists the AURA studies, not `get-markets`.

## Rank vs percentage scores

Most BAV metrics are available as more than one score type. The two types that an agent sees most frequently are:

- **Percentile rank** - A score from 0 to 100 (where 100 is best). It shows the position of the brand among all brands
  in the study. It is **not** a percentage. Never show it with a `%` sign. In responses, these keys end in
  `_percentile_rank`.
- **Percentage** - The percentage of respondents who rated the brand a certain way.

Give this guidance to your agent for ranks:

- A change in rank can occur because the brand changed, because other brands changed, or both.
- Ranks have an even distribution. Thus, changes from one year to the next are frequently larger in the mid-range
  (30-70). A change of about 20 ranks is important but not dramatic.
- As a rule of thumb, 75+ is great, 50-75 is good, 25-50 is not great and below 25 is very poor.

Tools that support both score types take a `score_type` parameter (`rank` or `percentage`). The default depends on the
data model and is stated in the tool's definition.

Some data models are **category-specific**. In these models, respondents saw the brand and the category of the
survey. Thus, include the category in all analysis. A brand can occur one time for each category in a study. Other data
models are **category-agnostic**. In these models, respondents saw only the brand name. Thus, you can examine the brand
in the full culture, not only in a narrow category. Each data response includes instructions that tell which type it is.

## Data generation

The system aggregates brand data on demand for each combination of study and audience. When a user asks for a
combination for the first time, the combination is possibly not available yet. In this case, the tool starts to
generate it. The tool replies with a message that starts with `DATA GENERATING`. This message tells the agent to inform
the user and to call the tool again soon with the same parameters. Generation usually takes one or two minutes.

There are two variants:

- **Pending** - No requested data is ready yet. The response contains only the generation notice.
- **Partial** - Some combinations are ready and some are not. The response contains the data that is ready. A notice
  at the start lists the combinations that are not ready yet.

Neither variant is an error. The agent must not tell the user that the data does not exist. A row with a `message` such
as "No data available for Brand X in Germany 2025" is different. That message means that the study did not include the
brand.

If your agent runs unattended, make sure that it tries again after a short wait and does not end the task.

## Brand names and variations

A brand can have different names, for example in different markets or languages. The brand data responses include
several name fields:

- `brand` - The brand's global name.
- `brand_variation` - The name variation that the study used for the brand.
- `local_name` - The brand's local name in that market, where there is one.
- `brand_name` - The name to show: the global, local or translated name depending on the user's brand name display
  setting, without qualifiers.

The response does not include empty fields. Thus, some rows do not have all of these fields.

When you search with `get-brands`, the names possibly do not match exactly. A good agent shows close matches and asks
the user before it includes them. When two different brands have the same name, the `qualifier` field identifies each
brand.

## Using the glossary

`get-glossary` returns definitions for three kinds of items, chosen with `type`:

- `metrics` - The computed brand metrics the data tools return, with their keys, groups and available score types.
- `measures` - The core survey questions that respondents answer about brands. You use them to build audiences.
- `questions` - The survey questions that respondents answer about themselves. You use them to build audiences and
  with `get-audience-question-data`.

Send `studies` when possible. Then the agent sees only the items that its studies measured.

The other tools use the metric keys from the glossary. For example, `metrics` on the brand data tools, the required
`metrics` on `get-toplist-data` and `driver_metrics` on `get-category-drivers-data` use these keys. Tell your agent to
find the definition of an unknown metric before it interprets the metric. The agent must not guess the meaning from
the key.
