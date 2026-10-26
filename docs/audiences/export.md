---
sidebar_label: Export
---

# Exporting Audiences

[Audiences](../audiences/audiences.md) are the core of all our datasets. An audience defines the group of respondents
that we analyze data for. You can make the audiences that users create in The Fount available in your own systems. The
Audience Export Integration has this purpose.

## How it works

All audiences are available through the [Audiences API](audiences.md). You can also listen to data change events for
updated audiences through [Webhooks](../webhooks.md). But then you must always keep the full list of audiences in your
system. The Audience Export Integration solves this problem.

With the Audience Export Integration, The Fount adds your application as an export destination for an audience. Users
can export the audience at any time and select your application as the destination. The export sends a webhook event
with the audience data to your application.

You can then use this data to update your application with the latest audience data. The user can then access the
audience in your application immediately.

## Export formats

There are four formats for the audience export:

1. **Audience Definition**. This is the full audience definition with segments and metrics and their logic. Use this
   format if you want to create the audience again in your own system. This format is the same as the format in
   the [Audiences API](../audiences/audiences.md).
2. **BAV Respondent IDs**. A list of BAV Respondent IDs that are part of the
   audience. This format requires specific approval from BAV.
3. **Audience Origin Respondent IDs**. A list of AO IDs for each respondent that
   matches the audience definition. This format requires specific approval from Choreograph.
4. **Audience Origin Respondent Progressive Numbers**. A list of progressive
   number IDs for each respondent that matches the audience definition. The Italy Audience Creator is the
   primary user of these numbers. This format requires specific approval from Choreograph.

The format that you choose depends on your use case, the data you need and the studies that you work with. The first
format is always available for all datasets. The second format is available for all BAV studies. Formats 3 and
4 are available for all Audience Origin studies.

Formats 2, 3 and 4 are also available for all fused studies (the "AO+BAV Fused" study type). In these studies, BAV
data and Audience Origin data are fused together.

You can also get formats 3 and 4 directly from the API for a given audience and study. See
[Fetching respondents from the API](#fetching-respondents-from-the-api).

## Access control

As part of the integration, you can control which users can export audiences to your application. You can give
access at the operating company level or to each user separately. We can also give you a method to send us a list of
these users programmatically. This list identifies the users by their e-mail address.

## Getting started

Before you start with the Audience Export Integration, learn about:

- The different types of supported formats for the audience export.
- The [Audiences API](audiences.md) and how to use it to read audiences, and
  [Managing audiences](managing-audiences.md) for how to create and manage them.
- The [Webhooks](../webhooks.md) and how to listen to audience export events.

When you start to plan how to use the Audience Export Integration, [contact us](mailto:bavsupport@wpp.com). We can
then plan the integration tasks on The Fount side that make your application visible as an export destination.

We want to make the integration as smooth as possible for you and your users.

## Export Types

### Audience Definition

The Audience Definition is the full audience with its definitions, segments and metrics. Use it to create the audience
again in your own system. This export option is available for all datasets.

#### Schema

The payload uses the [full response schema](audiences.md#full-response-schema) of the Audiences API. It is the same
object that the [Webhooks](../webhooks.md) send for audience data changes. The payload includes these relationships:

- `group` - The [audience group](audience-groups.md).
- `user` - The owner, with their `operating_company`.
- `definitions` - The [definitions](audiences.md#definition-schema), with their `segments`. Each segment includes its
  `metrics`.

The payload does not include a `respondents` key.

### BAV Respondent IDs

The BAV Respondent ID is a unique identifier for each respondent in an audience. This ID links the respondent to each
of the respondent-level data points. The ID is a V4 UUID and is unique across all studies.

:::warning Specific approval required
This export option is available only after approval from BAV.
:::

#### Schema

When your application receives the webhook event for an audience export, the payload is a JSON object with the
schema below. This schema is a smaller version of the full audience schema. For more details about each field, see
the [Audience API schema](audiences.md).

```json
{
  "id": 1,
  "name": "My Audience",
  "description": "This is my audience",
  "is_active": true,
  "is_public": false,
  "is_standard": false,
  "deployed_at": "2021-01-01T00:00:00Z",
  "definitions_updated_at": "2021-01-01T00:00:00Z",
  "created_at": "2021-01-01T00:00:00Z",
  "updated_at": "2021-01-01T00:00:00Z",
  "group": {
    "id": 1,
    "name": "My Group"
  },
  "user": {
    "id": 1,
    "name": "Jane Doe",
    "email": "jane.doe@wpp.com",
    "operating_company": {
      "id": 1,
      "name": "WPP"
    }
  },
  "respondents": [
    "00000000-0000-0000-0000-000000000000"
  ]
}
```

### Audience Origin Respondent IDs

The Audience Origin Respondent ID (AO ID) is a unique identifier for each respondent in an audience. This ID links the respondent to the data in the data warehouse. The form of the IDs is slightly different for each
study, but the most recent IDs are v4 UUIDs.

:::warning Specific approval required
This export option is available only after approval from Choreograph.
:::

#### Schema

When your application receives the webhook event for an audience export, the payload is a JSON object with the
schema below. This schema is a smaller version of the full audience schema. For more details about each field, see
the [Audience API schema](audiences.md).

```json
{
  "id": 1,
  "name": "My Audience",
  "description": "This is my audience",
  "is_active": true,
  "is_public": false,
  "is_standard": false,
  "deployed_at": "2021-01-01T00:00:00Z",
  "definitions_updated_at": "2021-01-01T00:00:00Z",
  "created_at": "2021-01-01T00:00:00Z",
  "updated_at": "2021-01-01T00:00:00Z",
  "group": {
    "id": 1,
    "name": "My Group"
  },
  "user": {
    "id": 1,
    "name": "Jane Doe",
    "email": "jane.doe@wpp.com",
    "operating_company": {
      "id": 1,
      "name": "WPP"
    }
  },
  "respondents": [
    "00000000-0000-0000-0000-000000000000"
  ]
}
```

### Audience Origin Progressive Numbers

The Audience Origin progressive number is an alternative ID. The Italy Audience Creator is its primary user. GroupM in Italy uses this tool.

:::warning Specific approval required
This export option is available only after approval from Choreograph.
:::

#### Schema

When your application receives the webhook event for an audience export, the payload is a JSON object with the
schema below. This schema is a smaller version of the full audience schema. For more details about each field, see
the [Audience API schema](audiences.md).

```json
{
  "id": 1,
  "name": "My Audience",
  "description": "This is my audience",
  "is_active": true,
  "is_public": false,
  "is_standard": false,
  "deployed_at": "2021-01-01T00:00:00Z",
  "definitions_updated_at": "2021-01-01T00:00:00Z",
  "created_at": "2021-01-01T00:00:00Z",
  "updated_at": "2021-01-01T00:00:00Z",
  "group": {
    "id": 1,
    "name": "My Group"
  },
  "user": {
    "id": 1,
    "name": "Jane Doe",
    "email": "jane.doe@wpp.com",
    "operating_company": {
      "id": 1,
      "name": "WPP"
    }
  },
  "respondents": [
    "808_2x_4",
    "809_2x_4",
    "810_2x_4"
  ]
}
```

## Fetching respondents from the API

You can also get the Audience Origin respondent IDs and progressive numbers for an audience directly from the API.
Get them for one study at a time.

### Audience Origin Respondent IDs

```http request
GET /api/v2/audiences/{audienceId}/respondents/ao-ids/{studyId}
```

Returns the Audience Origin IDs of the respondents in the audience for the given study. The response does not include
respondents without an Audience Origin ID.

### Audience Origin Progressive Numbers

```http request
GET /api/v2/audiences/{audienceId}/respondents/ao-progressive-numbers/{studyId}
```

Returns the Audience Origin progressive numbers of the respondents in the audience for the given study. The response
does not include respondents without a progressive number.

### Requirements

Both endpoints require:

- A token with the `bav:audience-origin-data` scope.
- Access to both the audience and the study.
- The user's permission to export Audience Origin IDs (`ao-ids`) or Audience Origin progressive numbers
  (`ao-progressive-numbers`), for the related endpoint. This permission requires specific approval.

If the audience or study does not exist, the API returns a `404`. If you do not have permission to access them or to
export, the API returns a `403`.

### Response

The response is not paginated. It contains a single `data` key with an array of identifiers:

```json
{
  "data": [
    "808_2x_4",
    "809_2x_4",
    "810_2x_4"
  ]
}
```
