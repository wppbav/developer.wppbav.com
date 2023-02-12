
# Versioning

When new backwards-incompatible changes are made to the API, a new version is released. These docs are always versioned
to each major version. You can switch between the versions in the header.

The current API version is: `2`.

The version is part of the API URL: `/api/v2/RESOURCE`.

:::caution Actively supported versions
Please not that we only actively support the current major version of the API. While we don't actively break an older
version, we suggest that you update to the latest version if you are using an older version. We try and make upgrades as
easy as possible.
:::

## Upgrading from version 1

Version 2 contains breaking changes from version 1 of the API. We suggest that you review all calls and responses for
any changes.

At a high-level, these are the changes that will affect you:

- There are no removed resources but several new ones.
- Some fields have been given new names, a select few have been removed.
- Filtering now has a new, consistent format (see [filtering](customizingers.md)).
- Sorting now has a new, simplified format (see [sorting](customizingers.md)).
- Expansions are now includes (see [includes](customizingudes.md)).
