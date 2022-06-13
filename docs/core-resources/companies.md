---
split: true
---

# Companies

Companies are legal entities that can own one or more brands. Companies have financial data tied to them and can be either public (listed on a stock exchange) or private.

The BAV API map brands to their parent companies for a variety of reasons. However, since we hold over 50 000 brands the mapping does not cover 100% of the dataset. Users can help with the mapping through each brand page, and if you want to help systemtically, please get in touch.

The API will provide you with financial data for all public companies that have at least one brand covered in BAV (which is mapped to the company).

## List Companies

To list all of the companies, use the list endpoint:

```http request
GET /api/v1/companies
```

The companies list response contains details about the company.

## Get a Company

You may also directly retrieve a company's details if you already have its system ID.

```http request
GET /api/v1/companies/123
```

Where `123` is the system ID of the company.

## Schema

| Key | Type | Description |
| --- | ---- | ----------- |
| `id` | integer | The system ID for the company. |
| `name` | string | The legal entity name of the company. |
| `isin` | string | If a listed company, the ISIN is the securities identification number. |
| `ipo_date` | string | The date the company was first listed on a stock exchange (IPO, initial public offering) |
| `fiscal_year_end` | string | The name of the month that the company ends its fiscal year in. Available only for public companies. |
| `description` | string | A description of what the company does. Typically available only for public companies. |
| `website_url` | string | The URL to the main company website. Typically available only for public companies. |
| `address` | object | An object with the address parts. A period below denotes a sub-item in this object. |
| `address.street_address` | string | The street address of the company's registered headquarters. Typically available only for public companies. |
| `address.city` | string | The city of the company's registered headquarters. Typically available only for public companies. |
| `address.postal_code` | string | The postal code of the company's registered headquarters. Typically available only for public companies. |
| `address.state` | string | The state of the company's registered headquarters. Typically available only for public companies. |
| `address.country` | object | A country relationship object of the company's registered headquarters. Typically only available for public companies. |
| `brand` | object | A brand relationship object of the primary brand for the company. That is if the company name itself is a brand that is studied by BAV. For example "Apple" is both a company name and a brand in itself. |
| `gics` | object | A GICS relationship object containing the GICS sector name, code and system ID. |
| `primary_listing` | object | A stock exchange relationship resource of the company's primary listing. |
| `latest_financial` | object | A company financial relationship object of the latest financial datapoint for the company. |
| `brands` | array | An array of brand relationship resources for all brands that belong to this company. |
| `listings` | array | An array of stock exchange relationship objects for all the stock exchange listings the company has. |

---

```json
{
  "data": {
    "id": 60,
    "name": "Apple Inc",
    "isin": "US0378331005",
    "ipo_date": "1980-12-12T00:00:00.000000Z",
    "fiscal_year_end": "September",
    "description": "Apple Inc. designs, manufactures, and markets smartphones, personal computers, tablets, wearables, and accessories worldwide. It also sells various related services. In addition, the company offers iPhone, a line of smartphones; Mac, a line of personal computers; iPad, a line of multi-purpose tablets; AirPods Max, an over-ear wireless headphone; and wearables, home, and accessories comprising AirPods, Apple TV, Apple Watch, Beats products, HomePod, and iPod touch. Further, it provides AppleCare support services; cloud services store services; and operates various platforms, including the App Store that allow customers to discover and download applications and digital content, such as books, music, video, games, and podcasts. Additionally, the company offers various services, such as Apple Arcade, a game subscription service; Apple Music, which offers users a curated listening experience with on-demand radio stations; Apple News+, a subscription news and magazine service; Apple TV+, which offers exclusive original content; Apple Card, a co-branded credit card; and Apple Pay, a cashless payment service, as well as licenses its intellectual property. The company serves consumers, and small and mid-sized businesses; and the education, enterprise, and government markets. It distributes third-party applications for its products through the App Store. The company also sells its products through its retail and online stores, and direct sales force; and third-party cellular network carriers, wholesalers, retailers, and resellers. Apple Inc. was incorporated in 1977 and is headquartered in Cupertino, California.",
    "website_url": "https:\/\/www.apple.com",
    "address": {
      "street_address": "One Apple Park Way",
      "city": "Cupertino",
      "state": "CA",
      "postal_code": null,
      "country": {
        "id": 50,
        "name": "USA",
        "code": "US",
        "region": {
          "id": 9,
          "name": "Americas"
        }
      }
    },
    "brand": {
      "id": 371,
      "name": "Apple",
      "bav_key": 168
    },
    "gics": {
      "id": 8,
      "name": "Information Technology",
      "code": 45
    },
    "primary_listing": {
      "id": 250,
      "name": "NASDAQ",
      "code": "NASDAQ",
      "suffix": null,
      "stock_ticker": "AAPL",
      "currency": null,
      "country": {
        "id": 50,
        "name": "USA",
        "code": "US",
        "region": {
          "id": 9,
          "name": "Americas"
        }
      }
    },
    "latest_financial": {
      "id": 1,
      "date": "2022-03-31T00:00:00.000000Z",
      "filing_date": "2022-04-29T00:00:00.000000Z",
      "currency": "USD",
      "total_assets": 350662000000,
      "intangible_assets": null,
      "current_liabilities": 127508000000,
      "total_liabilities": 283263000000,
      "market_cap": 2600445314141.7,
      "total_debt": 119981000000,
      "cash": 28098000000,
      "enterprise_value": 91883000000,
      "price_book_ratio": 38.58,
      "ebitda": 33567000000,
      "preferred_shares": null,
      "minority_interest": null
    },
    "brands": [
      {
        "id": 371,
        "name": "Apple",
        "bav_key": 168
      },
      // ...
    ],
    "listings": [
      {
        "id": 250,
        "name": "NASDAQ",
        "code": "NASDAQ",
        "suffix": null,
        "stock_ticker": "AAPL",
        "currency": null,
        "country": {
          "id": 50,
          "name": "USA",
          "code": "US",
          "region": {
            "id": 9,
            "name": "Americas"
          }
        }
      },
      // ...
    ]
  }
}
```

## Configurable Fields

If you only need some of the fields you can optimize the request for a leaner response (
see [Configurable Fields](../configurable-fields.md) for more information). The following fields can be toggled:

- `name`
- `isin`
- `ipo_date`
- `fiscal_year_end`
- `description`
- `website_url`
- `address`
- `brand`
- `gisc`
- `latest_financial`

## Expansions

To create a leaner response data related to brands are not included in the response by default. See
the [Expansions section](../expansions.md) for more information on how this works. The following relationships can be
expanded for the Companies API:

- `brands`
- `listings`

## Filters

- [Pagination](../pagination.md)
- [Searching](../filters.md) by company name.
- [Updated Since](../filters.md)

## Sorting

The following fields are [sortable](../filters.md):

- `id` (default)
- `name`
- `ipo_date`
- `fiscal_year_end`
- `description`
- `website_url`
