---
sidebar_label: AO Progressive Numbers
---

# Audience Origin Progressive Numbers

The Audience Origin progressive numbers is an alternative ID used primarily by the GroupM Italy Audience Creator.

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
    "808_2x_4",
    "809_2x_4",
    "810_2x_4"
  ]
}
```