---
sidebar_label: Overview
---

# Measures & Questions

When BAV studies brands, it asks respondents a set of questions. The API exposes these questions in different ways.
Select the one that you need:

- **[Brand metrics](../metrics/metrics.md).** The calculated metrics that make up the BAV data, such as
  Differentiation and Esteem. These are the columns in the [brandscape data](../brand-data/brandscape-data.md).
- **[Brand measures](brand-measures.md).** The brand-level measures in a study. These are asked for each brand in the
  survey, or calculated afterwards. Brand measures are organized in [brand measure groups](brand-measure-groups.md).
- **[BAV questions](bav-questions.md).** The respondent-level questions, such as demographics, opinions and behaviors.
  [Audiences](../audiences/audiences.md) are defined from these questions. BAV questions are organized
  in [BAV question groups](bav-question-groups.md).

Not every measure or question is asked in every study, and the answer options can differ between studies. Use
the [study catalog](study-catalog.md) endpoints to see what a specific study contains.

## Access

All of the endpoints in this section require the `bav:brand-data` scope.

## Building audiences

You can use brand measures and BAV questions as conditions when
[building your own audiences](../audiences/managing-audiences.md). Use the `bav-study-measure` metric type for a brand
measure and `bav-study-question` for a BAV question.
