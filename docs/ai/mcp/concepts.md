---
sidebar_label: Concepts for Agents
---

# Concepts for Agents

This page explains the handful of BAV concepts that matter most when you build an agent on top of the
[BAV MCP server](./bav.md). The tool descriptions and responses already explain most of this to the model, but knowing
it yourself makes it much easier to write good system prompts and to understand why an agent behaves the way it does.

## Studies, not markets and years

In BAV, data is collected in **studies**. A study is one market and one year (or period) of one **study type**. Most
markets are surveyed at most once a year, the US is generally surveyed three times a year, and some markets less often
than yearly.

A market and year can be covered by more than one study type, and they are not interchangeable:

| Type         | What it is                                                                                                  |
|--------------|-------------------------------------------------------------------------------------------------------------|
| `syndicated` | The full, standard BAV study. Marked as `recommended`, and the one to use unless the user asks for something else. |
| `snap`       | SnapBAV. Covers fewer brands and is more volatile between waves.                                            |
| `fused`      | AO+BAV. Probabilistically modelled to enable Audience Origin audience targeting. Not comparable to the standard study. |
| `custom`     | A bespoke study with a tailored sample, brand set or questions.                                              |

Because of this, the brand data tools select data by **study ID**, not by market and year. The typical flow is:

1. Call `get-markets` (optionally with `countries` and `years`) to list the available studies.
2. Pick the study marked `recommended`, unless the user asked for a different kind.
3. Call the data tool with that study ID in `studies`.

If an agent calls a data tool with only `countries` and `years`, the tool does not guess. It replies with a message
starting `NEEDS SELECTION`, listing the matching studies, and the agent calls the tool again with the study it chose.
This is a normal, successful response rather than an error, so the agent keeps going instead of giving up.

A few more things to keep in mind:

- If a study carries a `caveat`, the agent should tell the user which study was used and relay the caveat.
- Each study has a `methodology` (the version of the BAV model, such as BAV 3). Metrics are calculated differently
  between versions, so comparisons across methodologies should be flagged.
- Every data response starts with a `request` block that echoes the filters used, including `studies_used` and an
  `assumed` list of anything that was defaulted (such as the "All Adults" audience).
- AURA studies are kept separate. The brand data tools never return AURA data, and the AURA tools never return consumer
  data. AURA studies are listed by `get-aura-studies`, not `get-markets`.

## Rank vs percentage scores

Most BAV metrics can be reported as more than one score type. The two an agent will meet most often are:

- **Percentile rank** - A score from 0 to 100 (where 100 is best) showing where the brand sits among all brands in the
  study. It is **not** a percentage and should never be shown with a `%` sign. In responses, these keys end in
  `_percentile_rank`.
- **Percentage** - The percentage of respondents who rated the brand a certain way.

Some guidance worth passing on to your agent when it reads ranks:

- A change in rank can come from the brand changing, from other brands changing, or both.
- Ranks are evenly distributed, so year-to-year moves are often bigger in the mid-range (30-70). A change of around 20
  ranks is noteworthy but not dramatic.
- As a rule of thumb, 75+ is great, 50-75 is good, 25-50 is not great and below 25 is very poor.

Tools that support both score types take a `score_type` parameter (`rank` or `percentage`). The default depends on the
data model and is stated in the tool's definition.

Some data models are **category-specific**: respondents saw both the brand and the category it was surveyed in, so the
category should be part of any analysis, and a brand can appear once per category in a study. Others are
**category-agnostic**: respondents only saw the brand name, which lets you look at the brand in culture as a whole
rather than within a narrow category. Each data response includes instructions that say which kind it is.

## Data generation

Brand data is aggregated on demand for each combination of study and audience. The first time anyone asks for a
combination, it may not have been built yet. When that happens the tool starts generating it and replies with a
message starting `DATA GENERATING`, telling the agent to let the user know and to call the tool again shortly with the
same parameters. Generation usually takes a minute or two.

There are two variants:

- **Pending** - Nothing that was asked for is ready yet. The response only contains the generating notice.
- **Partial** - Some combinations are ready and some are not. The response contains the data that is ready, with a
  notice in front listing the combinations that are still generating.

Neither is an error, and the agent should not tell the user that the data does not exist. This is different from a row
with a `message` such as "No data available for Brand X in Germany 2025", which means the brand was not covered in that
study.

If your agent runs unattended, make sure it retries after a short wait rather than ending the task.

## Brand names and variations

A brand can be known by different names, for example in different markets or languages. The brand data responses
include several name fields:

- `brand` - The brand's global name.
- `brand_variation` - The name variation the brand was surveyed under in that study.
- `local_name` - The brand's local name in that market, where there is one.
- `brand_name` - The name to show: the global, local or translated name depending on the user's brand name display
  setting, without qualifiers.

Empty fields are left out of the response, so not every row carries all of these.

When searching with `get-brands`, names may not match exactly. A good agent offers close matches and asks the user
before including them. When two different brands share a name, the `qualifier` field tells them apart.

## Using the glossary

`get-glossary` returns definitions for three kinds of items, chosen with `type`:

- `metrics` - The computed brand metrics the data tools return, with their keys, groups and available score types.
- `measures` - The core survey questions respondents answer about brands. Used to build audiences.
- `questions` - The survey questions respondents answer about themselves. Used to build audiences and with
  `get-audience-question-data`.

Pass `studies` whenever you can, so the agent only sees what was actually measured in the studies it is working with.

The metric keys from the glossary are what the other tools expect, for example in `metrics` on the brand data tools,
the required `metrics` on `get-toplist-data` and `driver_metrics` on `get-category-drivers-data`. Encourage your agent to
look up a definition before interpreting an unfamiliar metric, rather than inferring its meaning from the key.
