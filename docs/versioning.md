# Versioning

When we make backwards-incompatible changes to the API, we release a new version. These docs always have a version for
each major version. You can switch between the versions in the header.

The current API version is: `2`.

The version is part of the API URL: `/api/v2/RESOURCE`.

:::caution Actively supported versions
We actively support only the current major version of the API. We do not actively break an older version. But if you
use an older version, we recommend that you update to the latest version. We try to make upgrades as easy as possible.
:::

## Upgrading from version 1

Version 2 contains breaking changes from version 1 of the API. We recommend that you examine all calls and responses
for changes.

These are the high-level changes that will affect you:

- No resources were removed, and there are several new resources.
- Some fields have new names, and a small number of fields were removed.
- Filtering now has a new, consistent format (see [filtering](customizing/filters.md)).
- Sorting now has a new, simplified format (see [sorting](customizing/filters.md#sorting-results)).
- Expansions are now includes (see [includes](customizing/includes.md)).
