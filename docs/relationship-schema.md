# Relationship Objects Schema

When loading in expansions, the relationship objects are a slimmer version of the full resource objects. You may find
their schema in the list below.

### Parent Brand

| Key | Type | Description |
| --- | ---- | ----------- |
| `id` | integer | The system ID for the brand. |
| `name` | string | The global name of the brand in English. |

## Primary Logo

| Key | Type | Description |
| --- | ---- | ----------- |
| `id` | integer | The system ID for the logo. |
| `name` | string | The descriptive name for the logo. |
| `formats` | object | An object with URLs to the respective logo formats available: "eps", "hires-png", "lores-png", "jpg" and "svg". |
| `created_at` | string | A datetime string when this logo was first created. |
| `updated_at` | string | A datetime string when this logo was last updated. |

## Sectors

| Key | Type | Description |
| --- | ---- | ----------- |
| `id` | integer | The system ID for the sector. |
| `name` | string | The name of the sector in English. |
