---
sidebar_label: AO Respondent IDs
---

# Audience Origin Respondent IDs

The Audience Origin Respondent ID (AO ID) is a unique identifier for each respondent in an audience. This ID is used to
link the
respondent to the data in the data warehouse. IDs take slightly different forms depending on the study but are most
recently v4 UUIDs.

:::warning Specific approval required
This export option is only available after approval from Choreograph.
:::

## Schema

When your application receives the webhook event for an audience export the payload will be a JSON object with the
following schema. This is a slimmed-down version of the full audience schema. For more details about each field, please
see the [Audience API schema](../core-resources/audiences).

```json
{
  "id": 1,
  "name": "My Audience",
  "description": "This is my audience",
  "is_active": true,
  "is_public": false,
  "is_standard": false,
  "deployed_at": "2021-01-01T00:00:00Z",
  "segments_updated_at": "2021-01-01T00:00:00Z",
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