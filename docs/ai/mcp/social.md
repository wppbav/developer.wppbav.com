---
sidebar_label: Social Data
---

# Social Data MCP Server

The Social Data MCP Server, provided by our partner [Sightly](https://sightly.com), enables the intersection of
real-time data listening and brand perception. The server provides Model Context Protocol (MCP) tools that allow
clients to add these capabilities in conjunction with their existing data stack, enabling AI assistants and
applications to access comprehensive brand profiles, discover cultural trends, and gather real-time insights from news
articles, social media posts, TikTok and YouTube.

:::info Availability
The Social Data MCP Server is available as a connector in WPP Open. See
[Connecting clients: WPP Open](./connecting-clients.md#wpp-open) for how to add it to your agents.
:::

This page is based on Sightly's MCP server documentation (version 1.36.0).

### Key Capabilities

- **Brand Intelligence**: Access detailed brand profiles including values, mission, vision, and brand positioning
- **Cultural Trend Analysis**: Discover macro cultural trends and patterns by aggregating news moments and social media narratives
- **Real-Time News Insights**: Find clustered news moments (day-to-day events) and search individual news articles
- **Social Media Intelligence**: Track social media narratives (day-to-day conversations) and analyze individual posts
- **TikTok Trend Discovery**: Get trending TikTok hashtags filtered by category, date range, country, and optional search terms
- **YouTube Intelligence**: Search YouTube videos and channels from a curated dataset with filtering by language, country, categories, and engagement metrics
- **YouTube Creator Discovery**: Find creators by topic or by who watches them, profile known channels including audience demographics and partnership eligibility, and track how interest in a topic is moving on YouTube
- **Audience Targeting**: Generate platform-specific audience targeting segments for ad campaigns across multiple platforms

### Data Hierarchy

The server organizes data in a hierarchical structure:

- **Individual Level**: Articles and social media posts provide detailed, granular content
- **Cluster Level**: Moments (news clusters) and Narratives (social media clusters) group related content
- **Trend Level**: Trends aggregate moments and narratives to reveal long-term cultural patterns

---

## Data Model Relationships

```
     Social Posts ──► Narratives ──┐
                                   │
                                   ├──► Trends
                                   │
      Articles ──► Moments ────────┘
```

**Hierarchy**:

- **Social Posts** → Clustered into **Narratives** (day-to-day conversations)
- **Articles** → Clustered into **Moments** (day-to-day news events)
- **Narratives + Moments** → Aggregated into **Trends** (long-term cultural patterns)

## Array Parameters

Every parameter documented as an array below also accepts a string, for clients that cannot send real JSON arrays:

- A JSON-encoded array, such as `"[\"Nike\", \"Adidas\"]"`, is parsed into the equivalent array.
- Any other string, such as `"Nike"`, is treated as a single-element array.

Sending a real array is still preferred. The documented maximum item counts apply either way, and values are never
split on commas, so `"Nike, Adidas"` is one value rather than two.

## Tools

### get_brand_profile

Get a brand's profile: industry, business and mentality summaries, mission, vision and value statements, key terms,
related entities, and the brand's answers to opinion and scenario questions.

**Note**: Brand profiles must be created and submitted in Sightly before they can be retrieved via this tool.
Only profiles owned by your account or its child accounts are returned. `brand_name` is matched approximately, so close
variants of the profile name still find it.

**Parameters**:
- `brand_name` (string, required): Brand name

**Returns**: plain text, not JSON. It opens with a `BRAND NAME: <name>` line followed by bracketed sections, each
omitted when empty:

- `[BRAND_INFORMATION]`: `Label: value` lines for industry, business summary, mentality summary, mission, vision and value statements, and key terms
- `[COMPANIES]`, `[INFLUENCERS]`, `[EVENTS]`, `[SOCIAL_CAUSES]`, `[PHILANTHROPIC_ORGANIZATIONS]`: one `name → relationship (type)` line per related entity
- `[OPINION_QUESTIONS]`, `[SCENARIO_QUESTIONS]`: one `question → answer` line per question

When no matching profile is found, the response is the plain message `No profile found for <brand_name>`.

**Example**:
```json
{
  "tool": "get_brand_profile",
  "arguments": {
    "brand_name": "Nike"
  }
}
```

### get_trends

Discover macro cultural trends (long-term patterns) from news and social media. Does not cover YouTube; for how
interest in a topic is moving on YouTube, use `get_youtube_creator_insights` with `insight_type="trends"`.

**Parameters**:
- `search_terms` (array, 0-3 terms, optional): Search terms. If not provided, returns top trends sorted by total article count (biggest trends first). Cannot be combined with `sort_by`
- `start_date` (string, optional): `YYYY-MM-DD` format, earliest `2026-01-01`
- `end_date` (string, optional): `YYYY-MM-DD` format, earliest `2026-01-01`
- `brand` (array, optional): Filter to trends that mention these brands (max 5, OR'd). Case-insensitive substring match against every brand on the trend, not only the 10 listed in `top_brands`
- `person` (array, optional): Filter to trends that mention these people (max 5, OR'd). Case-insensitive substring match against every person on the trend, not only the 10 listed in `top_people`
- `sort_by` (string, optional): Only valid without search terms. Options: `"size"` (default, total article count - biggest trends) or `"recency"` (most recent trends first)
- `limit` (int, optional): Results per search term (default: 3, max: 5)
- `include_total_statistics` (bool, optional, default `true`): Include the `aggregate_stats` block. Set `false` for sample records only, which is significantly faster

Each trend in `sample_trends` includes `title`, `overview`, `bullet_points`, `start_date`, `end_date`,
`total_moment_count`, `total_narrative_count`, `total_article_count`, `total_post_count`, `article_count_timeline` and
`post_count_timeline` (see [Timelines](#timelines)), `top_brands` and `top_people` (up to 10 names each), and
`representative_moments` and `representative_narratives` (up to 3 each).

**Example with search terms**:
```json
{
  "tool": "get_trends",
  "arguments": {
    "search_terms": ["AI", "automation"],
    "brand": ["Microsoft", "Google"],
    "limit": 5
  }
}
```

**Example without search terms** (browse top trends):
```json
{
  "tool": "get_trends",
  "arguments": {
    "start_date": "2026-09-01",
    "end_date": "2026-09-30",
    "limit": 5
  }
}
```

### get_news_moments

Find clustered news articles about topics (day-to-day events).

**Parameters**:
- `search_terms` (array, 0-3 terms, optional): Search terms. If not provided, returns top moments sorted by article count (biggest story clusters first). Cannot be combined with `sort_by`
- `start_date` (string, optional): UTC datetime `YYYY-MM-DDTHH:MM:SS`, earliest `2026-01-01T00:00:00`. Supports hour/minute precision; for a whole-day search use `T00:00:00`
- `end_date` (string, optional): UTC datetime `YYYY-MM-DDTHH:MM:SS`, earliest `2026-01-01T00:00:00`. For a whole-day search use `T23:59:59`
- `category` (array, optional): Filter by content categories (max 5)
- `entity` (array, optional): Filter by entity names (max 5)
- `sort_by` (string, optional): Only valid without search terms. Options: `"size"` (default, article count - biggest clusters) or `"recency"` (most recent moments first)
- `limit` (int, optional): Results per search term (default: 8, max: 20)
- `include_total_statistics` (bool, optional, default `true`): Include the `aggregate_stats` block. Set `false` for sample records only, which is significantly faster

Each moment in `sample_news_moments` includes `title`, `summary`, `start_date`, `end_date`, `total_article_count`,
`article_count_timeline` (see [Timelines](#timelines)), and a `representative_article` with `title`, `url`,
`published_at`, `publisher_name`, `publisher_domain` and `publisher_location`.

**Sensitive topics**: each moment may include `sensitive_topics`, the brand-safety topics the moment substantially
involves. Values come from: sex, drugs, crime, death, hacking, terrorism, tobacco, alcohol, military conflict, politics,
obscenity, conspiracy, guns, human rights, kids channel, racism. An empty list means the moment was evaluated and none
were flagged; the field is omitted for moments that have not been evaluated yet.

**Example with search terms**:
```json
{
  "tool": "get_news_moments",
  "arguments": {
    "search_terms": ["climate change"],
    "start_date": "2026-09-01T00:00:00",
    "end_date": "2026-09-30T23:59:59",
    "category": ["environment"],
    "limit": 10
  }
}
```

**Example narrowing to a specific hour band**:
```json
{
  "tool": "get_news_moments",
  "arguments": {
    "search_terms": ["breaking news"],
    "start_date": "2026-05-13T08:00:00",
    "end_date": "2026-05-13T10:00:00",
    "limit": 10
  }
}
```

**Example without search terms** (browse top moments):
```json
{
  "tool": "get_news_moments",
  "arguments": {
    "start_date": "2026-09-01T00:00:00",
    "end_date": "2026-09-30T23:59:59",
    "limit": 10
  }
}
```

### get_social_media_narratives

Find clustered social media posts about topics (day-to-day conversations).

**Parameters**:
- `search_terms` (array, 0-3 terms, optional): Search terms. If not provided, returns top narratives sorted by post count (most discussed first). Cannot be combined with `sort_by`
- `start_date` (string, optional): `YYYY-MM-DD` format, earliest `2026-01-01`
- `end_date` (string, optional): `YYYY-MM-DD` format, earliest `2026-01-01`
- `sentiment` (string, optional): Filter by sentiment: `very_positive`, `positive`, `neutral`, `negative`, `very_negative`
- `platform` (array, optional): Filter by platforms (max 5): X, Reddit, Truth Social, Pinterest, Instagram, Bluesky, TikTok, Threads
- `theme` (array, optional): Filter by themes (max 5). Same theme list as [`get_social_media_posts`](#get_social_media_posts)
- `entity` (array, optional): Filter to narratives about a specific named person, brand, organization, product, event, or place (max 5), e.g. `["Messi", "Nike"]`. Case-insensitive substring match; multiple values are OR'd. Covers the roughly two-thirds of narratives where an entity was detected. For broad topics or moods, use `search_terms` instead
- `min_likes` (int, optional): Only return narratives whose posts have at least this many likes in total (must be ≥ 0). Narratives with no like total are excluded
- `min_comments` (int, optional): Only return narratives whose posts have at least this many comments in total (must be ≥ 0). Narratives with no comment total are excluded
- `min_shares` (int, optional): Only return narratives whose posts have at least this many shares/reposts in total (must be ≥ 0). Coverage is partial (roughly a quarter of narratives), so prefer `min_likes`/`min_comments` for general engagement filtering
- `country` (array, optional): Only return narratives with at least one post from these countries, as ISO 3166-1 alpha-2 codes (max 5, OR'd, any case), e.g. `["gb", "au"]`. This is an inclusion filter, not a dominance filter: a global narrative with a single UK post matches `["gb"]`. To see what a market is talking about, compare that country's `country_counts` entry against `total_post_count` on each record. Roughly a third of posts have no known country
- `sort_by` (string, optional): Only valid without search terms. Options: `"size"` (default, post count - most discussed) or `"recency"` (most recent narratives first)
- `limit` (int, optional): Results per search term (default: 8, max: 20)
- `include_total_statistics` (bool, optional, default `true`): Include the `aggregate_stats` block. Set `false` for sample records only, which is significantly faster
- `include_original_text` (bool, optional, default `false`): Add `original_text` to each narrative's `representative_post`, i.e. the post's text in the language it was written in. Set `true` only when the source-language wording matters. Absent for posts that were already English

Each narrative in `sample_social_media_narratives` includes `title`, `summary`, `start_date`, `end_date`,
`total_post_count`, a `representative_post` (with `text`, `platform`, `post_publish_date` and, when available, `url` and
`author_name`), and `source_counts`. The `representative_post` text is always English: non-English posts are
machine-translated, so quote it as a translation unless you request `include_original_text`.

Each narrative also includes:
- `sentiment_score`: the cluster's overall sentiment on a -100 (most negative) to 100 (most positive) scale. The `sentiment` filter buckets this score: `very_negative` (below -75), `negative` (below -25), `neutral` (-25 to 25), `positive` (above 25), `very_positive` (above 75)
- `total_likes`, `total_comments`, `total_shares`: cluster-level engagement totals (omitted when unavailable)
- `country_counts` and `country_unclassified_count`: a per-country breakdown of where the posts come from (top 10 countries, with the remainder folded into an `other` entry)

**Example with search terms**:
```json
{
  "tool": "get_social_media_narratives",
  "arguments": {
    "search_terms": ["AI"],
    "start_date": "2026-09-01",
    "end_date": "2026-09-30",
    "sentiment": "positive",
    "platform": ["X", "Reddit"]
  }
}
```

**Example without search terms** (browse top narratives in a market):
```json
{
  "tool": "get_social_media_narratives",
  "arguments": {
    "start_date": "2026-10-01",
    "end_date": "2026-10-07",
    "country": ["gb"],
    "limit": 10
  }
}
```

### get_news_articles

Search individual news articles (detailed content).

**Parameters**:
- `search_terms` (array, 0-3 terms, optional): Keep complete concepts together (e.g., `"renewable energy policy"` not `["renewable", "energy"]`). If not provided, returns most recent articles sorted by publish date. Non-English articles carry an English machine translation alongside the original text, and searches match both
- `start_date` (string, optional): UTC datetime `YYYY-MM-DDTHH:MM:SS`, earliest `2026-01-01T00:00:00`. For a whole-day search use `T00:00:00`
- `end_date` (string, optional): UTC datetime `YYYY-MM-DDTHH:MM:SS`, earliest `2026-01-01T00:00:00`. For a whole-day search use `T23:59:59`
- `publisher` (string, optional): Filter by publisher name
- `category` (array, optional): Filter by content categories (max 5). Do not prefix values with `news/`
- `entity` (array, optional): Filter by entity names (max 5)
- `publisher_location` (string, optional): Filter by the publisher's country, as one full English country name: United States, United Kingdom, Canada, Germany, Spain, Turkey, South Africa, Nigeria, China, India, Philippines, Thailand, Mexico, Brazil, Argentina, France, Italy, Netherlands, Australia, Poland, United Arab Emirates, Japan. Articles with no recorded publisher location never match
- `language_code` (array, optional): Filter by the article's original language as lowercase ISO 639-3 codes (max 5, OR'd), e.g. `["spa", "deu"]`. Supported: eng, spa, deu, fra, ita, pol, nld, ara, jpn, por, zho, hin, tur, tha, rus, kor, fas, vie. Coverage is partial (only newer articles carry a language code), so use it to narrow by language rather than to find all English coverage
- `limit` (int, optional): Results per search term (default: 10, max: 50)
- `include_total_statistics` (bool, optional, default `true`): Include the `aggregate_stats` block. Set `false` for sample records only, which is significantly faster
- `include_full_body` (bool, optional, default `false`): Return each article's full body text. By default `body` is truncated to 2,000 characters. Non-English articles also carry `original_title`/`original_body` (pre-truncated to roughly 500 characters, unaffected by this flag)

Each article in `sample_news_articles` includes `title`, `body`, `url`, `published_at`, `publisher_name`,
`publisher_domain`, `publisher_location`, `categories`, `entities`, `scenarios`, and `language_code`. Fields with no
value are omitted.

**Example with search terms**:
```json
{
  "tool": "get_news_articles",
  "arguments": {
    "search_terms": ["renewable energy policy"],
    "publisher_location": "United States",
    "limit": 20
  }
}
```

**Example narrowing to a specific hour band**:
```json
{
  "tool": "get_news_articles",
  "arguments": {
    "search_terms": ["product launch"],
    "start_date": "2026-05-13T08:00:00",
    "end_date": "2026-05-13T10:00:00",
    "limit": 20
  }
}
```

**Example without search terms** (browse recent articles):
```json
{
  "tool": "get_news_articles",
  "arguments": {
    "publisher_location": "United States",
    "category": ["technology"],
    "limit": 20
  }
}
```

### get_social_media_posts

Search individual social media posts (detailed content).

**Parameters**:
- `search_terms` (array, 0-3 terms, optional): Keep complete concepts together. If not provided, returns most recent posts sorted by publish date. Use for topics, themes, concepts, or moods; use `entity` for specific named people, brands, products, events or places. Combine both to find a topic about a named entity
- `start_date` (string, optional): UTC datetime `YYYY-MM-DDTHH:MM:SS`, earliest `2026-01-01T00:00:00`. For a whole-day search use `T00:00:00`
- `end_date` (string, optional): UTC datetime `YYYY-MM-DDTHH:MM:SS`, earliest `2026-01-01T00:00:00`. For a whole-day search use `T23:59:59`
- `platform` (array, optional): Filter by platforms (max 5): X, Reddit, Truth Social, Pinterest, Instagram, Bluesky, TikTok, Threads
- `theme` (array, optional): Filter by themes (max 5): discounts, purchase, appearance, churn, cost, ads, experience, craftmanship, transaction, criminal, loyalty, stock, taste, temperature, ambiance, delivery, fit, injury, knowledge, leadership, comfort, access, illness, location, restrooms, speed, satisfaction, wait times, cleanliness, durability, friendliness, selection
- `entity` (array, optional): Filter to posts about a specific named person, brand, organization, product, event, or place (max 5), e.g. `"Messi"`, `"Nike"`, `"FIFA World Cup"`. Case-insensitive substring match (`"messi"` matches `"Lionel Messi"`); multiple values are OR'd. Only covers the roughly half of posts where an entity was detected. Use short, distinctive fragments
- `min_likes` (int, optional): Only return posts with at least this many likes (must be ≥ 0). Posts with no like count are excluded
- `min_comments` (int, optional): Only return posts with at least this many comments (must be ≥ 0). Posts with no comment count are excluded
- `min_shares` (int, optional): Only return posts with at least this many shares/reposts (must be ≥ 0). Many platforms do not report shares, so this can sharply narrow results
- `min_author_followers` (int, optional): Only return posts whose author has at least this many followers (must be ≥ 0). Use for questions about influential or large accounts. Posts with no follower count are excluded, which drops platforms without a follower concept (Reddit, Facebook, Tumblr) entirely
- `country` (array, optional): Filter by the post's country of origin as ISO 3166-1 alpha-2 codes (max 5, OR'd, any case), e.g. `["us", "gb"]`. About half of all posts carry a country. Best-covered countries: us, th, gb, in, br, fr, tr, mx
- `language_code` (array, optional): Filter by the post's detected language as lowercase ISO 639-1 codes (max 5, OR'd), e.g. `["en", "ja"]`. Values must be lowercase (`"JA"` matches nothing). Pair with `country` to get a language within a market
- `limit` (int, optional): Results per search term (default: 10, max: 50)
- `include_total_statistics` (bool, optional, default `true`): Include the `aggregate_stats` block. Set `false` for sample records only, which is significantly faster
- `include_full_body` (bool, optional, default `false`): Return each post's full text. By default post text is truncated to 2,000 characters
- `include_original_text` (bool, optional, default `false`): Add `original_text` to each post, i.e. its text in the language it was written in. Absent for posts that were already English, so its presence signals a non-English original

Each post in `sample_social_media_posts` includes `text`, `platform`, `url`, `post_publish_date`, `author_name`,
`themes`, `likes`, `comments`, `shares`, `author_followers`, `entities`, `country` and `language_code` (each omitted
when unavailable). Post text is always English: non-English posts are machine-translated on ingestion. Search is both
keyword and semantic, so a query in one language retrieves posts written in another; use `language_code` to restrict
results to an original language.

**Example with search terms**:
```json
{
  "tool": "get_social_media_posts",
  "arguments": {
    "search_terms": ["climate action"],
    "platform": ["X"],
    "theme": ["experience"],
    "limit": 25
  }
}
```

**Example without search terms** (browse recent posts):
```json
{
  "tool": "get_social_media_posts",
  "arguments": {
    "platform": ["Reddit"],
    "theme": ["experience"],
    "limit": 25
  }
}
```

**Example filtering by entity and engagement**:
```json
{
  "tool": "get_social_media_posts",
  "arguments": {
    "entity": ["Nike"],
    "search_terms": ["product recall"],
    "min_likes": 100,
    "min_comments": 10,
    "limit": 25
  }
}
```

**Example filtering by market and language** (Japanese-language posts from Japan):
```json
{
  "tool": "get_social_media_posts",
  "arguments": {
    "search_terms": ["product launch"],
    "country": ["jp"],
    "language_code": ["ja"],
    "limit": 25
  }
}
```

### get_tiktok_hashtags

Get trending TikTok hashtags. Can optionally filter by search terms or get top hashtags by category, date range and
country.

**Parameters**:
- `search_terms` (array, 0-3 terms, optional): Optional search terms to filter results. If not provided, returns top hashtags according to other parameters
- `category_name` (string, optional): Filter by TikTok category. When omitted, a query with search terms spans all categories, while a query without search terms defaults to the cross-category `"ALL"` leaderboard. Available categories: ALL, ACADEMIC_RESOURCES, ANIMATION_AND_COMICS, APPAREL_AND_ACCESSORIES, ART, AUTOMOTIVE, BABY_CARE, BABY_KIDS_AND_MATERNITY, BEAUTY, BEAUTY_AND_PERSONAL_CARE, BEAUTY_SERVICES, BUSINESS_AND_FINANCE, BUSINESS_SERVICES, CARD_AND_BOARD_GAMES, CAREER_AND_PROFESSIONAL_GROWTH, COLLEGE, COMEDY, COMMUNITY_UPDATES_AND_ISSUES, CONVENTIONAL_AND_MAINSTREAM_SPORTS, COOKING, CRAFTING_AND_CREATIONS, CULTURE, DANCE, DIARY_AND_VLOG, DRINKS, EATING_EXPERIENCES, EDUCATION, ENTERTAINMENT_AND_SPORTS_NEWS, ENVIRONMENT, EXERCISE_AND_FITNESS, EXTREME_AND_ADVENTURE_SPORTS, FAMILY, FINANCIAL_SERVICES, FOOD, FOOD_AND_BEVERAGE, FOOD_RECOMMENDATIONS, GADGETS_AND_INNOVATION, GAMES, GENERAL_TRAVEL, HAIR_CARE, HEALTH, HEALTH_AND_WELLNESS, HISTORY_AND_LITERATURE, HOME_AND_GARDEN, HOME_IMPROVEMENT, HOUSEHOLD_PRODUCTS, LEARNING_AND_DEVELOPMENT, LEISURE_AND_RECREATION_FACILITIES, LIFE_SERVICES, LIVESTOCK_AND_FARMING, MISCELLANEOUS_PERFORMANCES, MOVIES_AND_TV, MUSIC, NEWS_AND_ENTERTAINMENT, OTHER_BEAUTY, OTHER_FASHION, OTHER_TRANSPORTATION, OUTDOOR_RECREATION, OUTFITS, PERFORMING_ARTS, PERSONAL_PHOTOGRAPHY, PETS, PET_CARE_AND_ACCESSORIES, PHOTOGRAPHY, PRODUCTIVITY_AND_EFFICIENCY, ROMANCE, SCIENCE, SENSORY_EXPERIENCES, SHOWS_FESTIVALS_AND_EXHIBITIONS, SOFTWARE_AND_APPS, SPECIAL_EFFECTS, SPORTS, SPORTS_AND_OUTDOOR, SUPERNATURAL_AND_HORROR, TECHNOLOGY, TOYS_COLLECTIBLES_AND_MEMORABILIA, TRAVEL, VEHICLE_AND_TRANSPORTATION, VIDEO_GAMES, WILDLIFE_AND_EXOTIC_PETS
- `date_range` (string, optional): Filter by date range (default: `"1DAY"`). Available options: `"1DAY"`, `"7DAY"`, `"30DAY"`, `"120DAY"`
- `country` (array, optional): Filter by country, as uppercase ISO 3166-1 alpha-2 codes (max 5). Supported: US, GB, CA, DE, ES, TR, ZA, NG, CN, IN, PH, TH, MX, BR, AR, FR, IT, NL, PL, AU, AE, JP, PT, KR, VN. Lowercase codes are accepted and upcased. When omitted, returns hashtags across all available countries
- `limit` (int, optional): Number of results per search term, or total results if no search term (default: 50, max: 200)
- `include_total_statistics` (bool, optional, default `true`): When `false`, omits `aggregate_stats`. Unlike the other tools, these statistics are computed over the returned rows (not the full dataset), so disabling them reduces response size but does not speed up the search

Each row in `hashtags` includes `hashtag_name`, `rank_position`, `rank_change` (`"NEW"` or a signed position change),
`posts`, `posts_global_lifetime`, `views`, `views_global_lifetime`, `category_name`, `country_code`, `date_range`,
`created_at`, `top_country_list`, `audience_ages`, and `trending_history`.

**Example**:
```json
{
  "tool": "get_tiktok_hashtags",
  "arguments": {
    "search_terms": ["fitness"],
    "category_name": "EXERCISE_AND_FITNESS",
    "date_range": "7DAY",
    "limit": 20
  }
}
```

**Example without search terms** (top beauty hashtags in the UK):
```json
{
  "tool": "get_tiktok_hashtags",
  "arguments": {
    "category_name": "BEAUTY",
    "date_range": "1DAY",
    "country": ["GB"],
    "limit": 15
  }
}
```

### get_audience_targeting

Generate audience targeting segments for specific ad platforms based on an audience description.

**Parameters**:
- `audience_name` (string, required): The name of the audience to target (e.g., "Tech Enthusiasts", "Fitness Enthusiasts")
- `audience_description` (string, required): A description of the audience to target (e.g., "Young professionals interested in technology and innovation")
- `platform` (string, required): Which platform to target. Available platforms: `Programmatic`, `YouTube`, `Pinterest`, `LinkedIn`, `TikTok`, `Snapchat`, `Meta`, `X`, `Reddit`, `Spotify`, `Search`. Matched case-insensitively; any other value returns an error. Always pass `X` for Twitter

**Platform-Specific Targeting Types**:

- **YouTube**: detailed_demographics, life_events, affinity_audiences, in_market_audiences, topics, keywords
- **Programmatic**: categories, genres, ctv_segments, olv_segments
- **TikTok**: interests, video_interactions, creator_interactions, hashtags
- **Meta**: detailed_demographics, interests, behaviors
- **Snapchat**: lifestyles, shoppers, visitors
- **LinkedIn**: company_industries, member_interests, member_traits
- **X**: interests, keywords, hashtags
- **Pinterest**: interests, keywords
- **Spotify**: interests, music_genres, playlist_themes, podcast_topics
- **Reddit**: interest_groups, keywords
- **Search**: keywords

Keywords and hashtags are written for the audience rather than chosen from the platform's published segment list. Every
other targeting type is chosen from that list.

**Returns**: a JSON object with two keys, both varying by platform:
- `demographics`: age, gender, income, parental status and similar options. YouTube and Search share the same demographic options
- `segments`: one list per targeting type above

**Example**:
```json
{
  "tool": "get_audience_targeting",
  "arguments": {
    "audience_name": "Tech Enthusiasts",
    "audience_description": "Young professionals aged 25-35 interested in technology, innovation, and startups",
    "platform": "Meta"
  }
}
```

**Example for YouTube**:
```json
{
  "tool": "get_audience_targeting",
  "arguments": {
    "audience_name": "Fitness Enthusiasts",
    "audience_description": "Adults interested in fitness, health, and wellness",
    "platform": "YouTube"
  }
}
```

### get_youtube_videos

Search individual YouTube videos by keyword and publish date, from the Sightly curated YouTube dataset. Returns
videos, not creator analysis; for audience, engagement or partnership questions, use
[`get_youtube_creator_insights`](#get_youtube_creator_insights).

**Parameters**:
- `search_terms` (array, 0-3 terms, optional): Search terms for video title/description. If not provided, returns top videos sorted by view count (highest first). Cannot be combined with `sort_by`
- `start_date` (string, optional): Start of the video publish date range (`YYYY-MM-DD`, earliest `2005-02-14`). While `include_total_statistics` is `true` the range may not exceed 180 days; omit this to search the 180 days ending at `end_date` (or today)
- `end_date` (string, optional): End of the video publish date range (`YYYY-MM-DD`, earliest `2005-02-14`)
- `language` (array, optional): Filter by language codes (e.g., `"en"`, `"es"`) - max 5
- `country` (array, optional): Filter by the channel's country as uppercase ISO 3166-1 alpha-2 codes (e.g., `"US"`, `"GB"`) - max 5. Case-sensitive: lowercase codes match nothing, and the UK's code is `GB`, not `UK`
- `iab_category` (array, optional): Filter by IAB taxonomy category names (e.g., `"Sports"`, `"Music"`) - max 5. Case-insensitive substring match, so `"Sports"` also matches more specific categories that contain it
- `is_short` (boolean, optional): Filter by video type: `true` for Shorts, `false` for long-form, omit for all
- `exclude_kids_content` (boolean, optional): Exclude kids content when `true`
- `min_views` (int, optional): Minimum view count threshold
- `min_channel_subscribers` (int, optional): Minimum channel subscriber count
- `sort_by` (string, optional): Only valid without search terms. Options: `"size"` (default, view count - most viewed) or `"recency"` (newest videos first)
- `limit` (int, optional): Results per search term (default: 10, max: 50)
- `include_total_statistics` (bool, optional, default `true`): Include the `aggregate_stats` block. Set `false` for sample records only, which is significantly faster and removes the 180-day cap

Each video in `sample_youtube_videos` includes `title`, `description`, `video_id`, `url`, `published`, `views`, `likes`,
`duration` (seconds), `is_short`, `language`, `country`, `categories`, `channel_id`, `channel_title`, and
`channel_subscribers`.

**Example with search terms**:
```json
{
  "tool": "get_youtube_videos",
  "arguments": {
    "search_terms": ["tech reviews"],
    "language": ["en"],
    "country": ["US"],
    "min_views": 10000,
    "limit": 20
  }
}
```

**Example with subscriber filter** (videos from larger channels):
```json
{
  "tool": "get_youtube_videos",
  "arguments": {
    "search_terms": ["weight loss treatments"],
    "min_channel_subscribers": 100000,
    "limit": 20
  }
}
```

**Example without search terms** (browse top videos):
```json
{
  "tool": "get_youtube_videos",
  "arguments": {
    "iab_category": ["Sports"],
    "is_short": false,
    "exclude_kids_content": true,
    "limit": 25
  }
}
```

### get_youtube_channels

Search YouTube channels by keyword in their title or description, from the Sightly curated YouTube dataset.
Carries no audience or engagement data; pass `channel_id` values from here to
[`get_youtube_creator_insights`](#get_youtube_creator_insights) for a full profile.

**Parameters**:
- `search_terms` (array, 0-3 terms, optional): Search terms for channel title/description. If not provided, returns top channels sorted by subscriber count (highest first). Cannot be combined with `sort_by`
- `start_date` (string, optional): Start of the latest-video publish date range (`YYYY-MM-DD`, earliest `2005-02-14`). While `include_total_statistics` is `true` the range may not exceed 180 days; omit this to search the 180 days ending at `end_date` (or today)
- `end_date` (string, optional): End of the latest-video publish date range (`YYYY-MM-DD`, earliest `2005-02-14`)
- `language` (array, optional): Filter by language codes (e.g., `"en"`, `"es"`) - max 5
- `country` (array, optional): Filter by the channel's country as uppercase ISO 3166-1 alpha-2 codes (e.g., `"US"`, `"GB"`) - max 5. Case-sensitive: lowercase codes match nothing, and the UK's code is `GB`, not `UK`
- `exclude_kids_content` (boolean, optional): Exclude kids content when `true`
- `min_subscribers` (int, optional): Minimum subscriber count threshold
- `min_views` (int, optional): Minimum total view count threshold
- `min_video_count` (int, optional): Minimum video count on channel
- `sort_by` (string, optional): Only valid without search terms. Options: `"size"` (default, subscriber count - most popular) or `"recency"` (recently active channels first)
- `limit` (int, optional): Results per search term (default: 10, max: 50)
- `include_total_statistics` (bool, optional, default `true`): Include the `aggregate_stats` block. Set `false` for sample records only, which is significantly faster and removes the 180-day cap

Each channel in `sample_youtube_channels` includes `title`, `description`, `channel_id`, `url`, `subscribers`,
`video_count`, `total_views`, `latest_video_published`, `language`, `country`, and `categories`.

**Example with search terms**:
```json
{
  "tool": "get_youtube_channels",
  "arguments": {
    "search_terms": ["cooking recipes"],
    "language": ["en"],
    "min_views": 1000000,
    "limit": 15
  }
}
```

**Example with subscriber filter** (larger channels only):
```json
{
  "tool": "get_youtube_channels",
  "arguments": {
    "search_terms": ["personal finance"],
    "country": ["US"],
    "language": ["en"],
    "min_subscribers": 5000,
    "limit": 20
  }
}
```

**Example without search terms** (browse top channels):
```json
{
  "tool": "get_youtube_channels",
  "arguments": {
    "country": ["US"],
    "exclude_kids_content": true,
    "min_video_count": 50,
    "limit": 20
  }
}
```

### get_youtube_creator_insights

Discover and analyse YouTube creators, and track content trends, using Google's YouTube advertising data. This is
distinct from `get_youtube_videos` and `get_youtube_channels`, which search Sightly's own curated corpus by keyword and
date. Use those for historical content search; use this one for creator discovery, partnership suitability, audience
composition and trend trajectories.

There are three creator modes, which are mutually exclusive. Provide exactly one of `topic`, `channel_ids`, or the
audience filters:

| Mode | Use when | Returns |
|------|----------|---------|
| `topic` | Finding creators who cover a subject | Creators ranked by relevance to that topic |
| `channel_ids` | You already know the channels | Full profiles; the only mode with audience demographics and top videos |
| Audience filters | Finding creators by who watches them | Creators whose viewers match the profile |

**Parameters**:
- `insight_type` (string, optional, default `"creators"`): `"creators"` finds or profiles creators; `"trends"` returns three years of monthly trend history for a topic, or what is trending for an audience
- `topic` (string, optional): A subject in plain words (e.g. `"electric vehicles"`, `"Nike"`). Matched internally to a Google Knowledge Graph entity; the match is returned as `resolved_topic` so an ambiguous term can be checked and retried
- `channel_ids` (array, optional, max 50): YouTube channel IDs such as `"UCX6OQ3DkcsbYNE6H8uQQuVA"`. Channel names cannot be looked up here; get IDs from `get_youtube_channels` first. Only the first `limit` IDs are profiled (10 by default) and the rest are silently dropped, so raise `limit` when passing more than 10. Not valid with `insight_type="trends"`
- `audience_age_ranges` (array, optional, max 5): Viewer age ranges: `18-24`, `25-34`, `35-44`, `45-54`, `55-64`, `65+`
- `audience_genders` (array, optional, max 5): Viewer genders: `male`, `female`
- `audience_interests` (array, optional, max 5): Viewer interests in plain words (e.g. `"cooking"`). Describes the audience's interests, whereas `topic` describes what the creator makes content about. Each interest is matched to a Google Knowledge Graph entity; an interest that cannot be matched returns an error
- `country` (string, optional, default `"us"`): ISO 3166-1 alpha-2 code in any case (the UK is `gb`, Japan `jp`, India `in`). Creator results, audience data and trends are all specific to this country. Supports the 219 countries Google Ads can target, which excludes Taiwan (`tw`), Hong Kong (`hk`), and Puerto Rico (`pr`); any other code returns an error
- `limit` (int, optional): Defaults to 15 for creator searches and 10 for channel profiles (max 50 for profiles, 100 otherwise). Ignored for trends, which return at most 5
- `include_brand_sentiment` (bool, optional, default `false`): Only applies with `insight_type="trends"` and a `topic` naming a brand. Returns up to 6 months of positive/neutral/negative view share plus AI-written summaries of what drove the positive and negative sentiment, derived from video content only (never comments). Fails for non-brand topics
- `include_top_videos` (bool, optional, default `true`): Only applies to channel profiles. Set `false` to roughly halve the response when you need only channel metrics and audience demographics

**Data sharing consent**: Google gates non-public fields behind each creator's consent. When `data_sharing_consent` is
`false`, `engagement_rate`, the per-video averages, `languages` and `audience` are absent (not zero) for that creator.
Roughly a quarter of creators withhold consent, and large official channels often do.

**No pagination**: Google returns roughly a thousand creators per search with no paging. `total_available` reports how
many matched; raise `limit` rather than expecting a second page.

**Example - find creators covering a topic**:
```json
{
  "tool": "get_youtube_creator_insights",
  "arguments": {
    "topic": "electric vehicles",
    "country": "us"
  }
}
```

**Example - profile known channels** (the only way to get audience demographics):
```json
{
  "tool": "get_youtube_creator_insights",
  "arguments": {
    "channel_ids": ["UCX6OQ3DkcsbYNE6H8uQQuVA"],
    "include_top_videos": true
  }
}
```

**Example - find creators by their audience**:
```json
{
  "tool": "get_youtube_creator_insights",
  "arguments": {
    "audience_age_ranges": ["25-34", "35-44"],
    "audience_interests": ["sustainable fashion"],
    "country": "gb"
  }
}
```

**Example - brand sentiment on YouTube**:
```json
{
  "tool": "get_youtube_creator_insights",
  "arguments": {
    "insight_type": "trends",
    "topic": "Nike",
    "include_brand_sentiment": true
  }
}
```

**Response fields**:
- `country`: the country searched
- `resolved_topic`: the Knowledge Graph entity your topic text matched (`query`, `name`, `machine_id`, `description`), with `other_matches` listing alternatives
- `total_available` / `returned`: how many creators, channels or trends matched, versus how many were returned
- `channels_not_found`: requested channel IDs Google did not recognise
- `creators[]`: `name`, `channel_id`, `handle`, `channel_created`, `country`, `languages`, `relevance`, `data_sharing_consent`, `metrics`
- `profiles[]`: `name`, `channel_id`, `handle`, `channel_created`, `country`, `channel_type`, `languages`, `data_sharing_consent`, `metrics`, plus `audience` (viewer share by age range, gender, device and country), `content_topics`, and `top_videos` (up to 5). Profiles carry no relevance
- `trends[]`: `name`, trend direction, `views`, `views_indexed`, `audience_share`, `change_percent`, `history` (monthly), `brand_sentiment`
- `metrics`: subscribers, views, videos, likes, comments, Shorts views and videos, `engagement_rate`, per-video averages, whether the creator is an active Shorts or live stream creator, and `partnership_opportunities` (advertising products the creator is eligible for)

**Reading trends**:
- Trend data lags by roughly two months; the newest month is the latest Google has published
- `change_percent` is a fraction (`0.19` = +19%). At the top level it compares the latest month with three months earlier; within `history`, each month compares with the month before
- `views_indexed` is 0-100 against the topic's own peak month, so it cannot be compared across topics
- `views` is the absolute view count for the latest month only
- `history` covers 36 months, newest first, for topic trends only. Audience trends return `audience_share` instead: the fraction of the requested audience that searched for or viewed the trend
- `brand_sentiment` shares are proportions of views and sum to 1 per month. Months Google lacks enough data for carry no shares

## Response Structure

### Output Format

Every tool returns its result as a single text block:

- **Results found**: a short data context (guidance on how to interpret the payload), a blank line, then the payload. The payload is JSON for every tool except `get_brand_profile`, which returns plain text.
- **Nothing found**: a short plain-text message with no JSON, such as `No News Articles found for: <terms>. Try broader search terms or expand the date range.` This happens when no search term returns a result, when no brand profile matches, and when `get_youtube_creator_insights` finds no creators, profiles, or trends. When at least one search term returns results, the terms without any come back with an empty `sample_*` list instead.
- **Invalid input**: a tool error describing the problem, such as an unknown audience-targeting platform, `sort_by` sent with `search_terms`, or a YouTube date range wider than 180 days.

### Search Tool Payloads

`get_trends`, `get_news_moments`, `get_social_media_narratives`, `get_news_articles`, `get_social_media_posts`,
`get_youtube_videos`, and `get_youtube_channels` share one shape:

- `search_start_date` / `search_end_date`: the range actually searched. `YYYY-MM-DD` for trends, narratives, and the YouTube tools; `YYYY-MM-DDTHH:MM:SS` for moments, articles, and posts.
- `search_results`: one entry per search term, or a single entry when browsing without search terms. Each entry holds:
  - `search_term`: the term, omitted when browsing without search terms
  - `aggregate_stats`: population statistics, omitted when `include_total_statistics=false`
  - the sample list: `sample_trends`, `sample_news_moments`, `sample_social_media_narratives`, `sample_news_articles`, `sample_social_media_posts`, `sample_youtube_videos`, or `sample_youtube_channels`

`aggregate_stats.total_matches` is the number of records matching the query in the whole database, while the
`sample_*` list holds representative examples capped by `limit`. Fields with no value are omitted from records rather
than returned as null.

The other tools have their own shapes, described in their sections: `get_tiktok_hashtags` returns `hashtags` rows with
statistics over those rows, `get_youtube_creator_insights` returns creators, profiles, or trends with
`total_available` and `returned`, `get_audience_targeting` returns `demographics` and `segments`, and
`get_brand_profile` returns plain text.

### Aggregate Statistics

Statistics cover every record matching the query, not just the returned sample. They are expensive to compute, so pass
`include_total_statistics=false` when you only need a few example records; the search is then significantly faster.
`get_youtube_creator_insights` has no `include_total_statistics` parameter.

- `get_social_media_posts`: `total_matches`, `platform_distribution`, `top_themes_distribution`, `language_distribution`, `date_distribution`, `likes_stats`, `comments_stats`, `shares_stats`
- `get_news_articles`: `total_matches`, `top_publishers_distribution`, `top_categories_distribution`, `top_iab_categories_distribution`, `publisher_location_distribution`, `language_code_distribution`, `date_distribution`
- `get_youtube_videos`: `total_matches`, `language_distribution`, `country_distribution`, `category_distribution`, `views_distribution`, `likes_distribution`, `date_distribution`
- `get_youtube_channels`: `total_matches`, `language_distribution`, `country_distribution`, `subscriber_distribution`, `date_distribution`
- `get_social_media_narratives`: `total_matches`, `total_post_count`, `sentiment_distribution` (negative, neutral, positive), `platform_distribution`, `country_distribution`, `narrative_size_distribution`, `narratives_per_day_date_distribution`, `total_likes_stats`, `total_comments_stats`, `total_shares_stats`
- `get_news_moments`: `total_matches`, `total_article_count`, `moment_size_distribution`, `moments_per_day_date_distribution`
- `get_trends`: `total_matches`, `total_article_count`, `total_post_count`, `top_brands_distribution`, `top_people_distribution`, `trends_per_day_date_distribution`
- `get_tiktok_hashtags`: `views_distribution`, `posts_distribution`, `rank_change_distribution`, `top_country_distribution`, computed over the returned rows rather than the full dataset

Notes on reading these:

- **Date distributions** are `{"interval": ..., "buckets": [{"date": ..., "count": ...}]}` with up to 30 buckets. The interval (for example `1d`, `7d`, or `1M`) is chosen automatically to fit the searched range, so the `*_per_day_date_distribution` series are not always daily.
- **Cluster dates**: the `*_per_day_date_distribution` series count clusters (when stories broke, conversations started, or trends concluded), not their contents. For article or post volume over time, use `get_news_articles` or `get_social_media_posts`.
- **Multi-valued fields** (a narrative's platforms, an article's categories) count a record in every bucket it belongs to, so buckets can sum to more than `total_matches`.
- **Truncation**: distributions keyed by value (platforms, themes, languages, countries, publishers, categories, brands, people) list only the most frequent values, so a missing key means zero or a value outside the top ones. Range and date distributions list every bucket, including empty ones.
- **Engagement stats**: each `*_stats` object has `count`, `min`, `max`, `avg`, and `sum`. `count` reflects only records that have a value for that metric, so compare it to `total_matches` to gauge coverage.

### Timelines

`article_count_timeline` (trends and moments) and `post_count_timeline` (trends) show a record's own volume over its
lifetime. Records with 14 or fewer days of activity get one entry per active day; records with 15 to 90 days are
grouped into 7-day entries, and longer ones into calendar months.

### Example Response Structure

A `get_social_media_posts` response:

```json
{
  "search_start_date": "2026-05-01T00:00:00",
  "search_end_date": "2026-05-31T23:59:59",
  "search_results": [
    {
      "search_term": "AI",
      "aggregate_stats": {
        "total_matches": 15420,
        "platform_distribution": {"X": 8500, "Reddit": 4200, "TikTok": 2720},
        "top_themes_distribution": {"experience": 3200, "knowledge": 2800},
        "language_distribution": {"en": 12100, "es": 1450, "ja": 980},
        "date_distribution": {"interval": "1d", "buckets": [{"date": "2026-05-01T00:00:00", "count": 520}, ...]},
        "likes_stats": {"count": 14200, "min": 0, "max": 84210, "avg": 312.5, "sum": 4437500},
        "comments_stats": {"count": 13980, "min": 0, "max": 9120, "avg": 27.4, "sum": 383052},
        "shares_stats": {"count": 1120, "min": 0, "max": 4300, "avg": 18.2, "sum": 20384}
      },
      "sample_social_media_posts": [
        { "text": "...", "platform": "X", "url": "...", "post_publish_date": "...", "likes": 1280, "comments": 64, "shares": 22, "entities": ["Lionel Messi", "FIFA World Cup"], ... }
      ]
    }
  ]
}
```

## Common Rules

### Dates

- **Date-only format** (`YYYY-MM-DD`): used by `get_trends` and `get_social_media_narratives`, earliest `2026-01-01`
- **UTC datetime format** (`YYYY-MM-DDTHH:MM:SS`): used by `get_news_articles`, `get_news_moments`, and `get_social_media_posts`, earliest `2026-01-01T00:00:00`. Naive UTC; do not include a timezone offset. For a whole-day search use `T00:00:00` to `T23:59:59`
- **YouTube tools** (`get_youtube_videos`, `get_youtube_channels`): `YYYY-MM-DD`, earliest `2005-02-14`
- **Default**: if not provided, the start date is the earliest available date
- **180-day YouTube cap**: while `include_total_statistics` is `true` (the default), the YouTube tools search at most 180 days. An omitted `start_date` defaults to the 180 days ending at `end_date` (or today), and an explicit range wider than 180 days returns an error. Send `include_total_statistics: false` to search the full history without population statistics
- **What the range filters on**: an article's or post's publish date, a moment's or narrative's earliest article or post, a trend's latest publish date, a video's publish date, and a channel's latest video publish date

### Countries

Each tool supports a different set of countries and expects its own code format:

| Tool | Parameter | Format | Supported countries |
|------|-----------|--------|---------------------|
| `get_social_media_posts` | `country` | ISO 3166-1 alpha-2, any case | Any country (about half of posts carry one) |
| `get_social_media_narratives` | `country` | ISO 3166-1 alpha-2, any case | Any country |
| `get_news_articles` | `publisher_location` | Full English name, one value | The 22 countries listed under [`get_news_articles`](#get_news_articles) |
| `get_tiktok_hashtags` | `country` | ISO 3166-1 alpha-2, uppercase (lowercase is upcased) | US, GB, CA, DE, ES, TR, ZA, NG, CN, IN, PH, TH, MX, BR, AR, FR, IT, NL, PL, AU, AE, JP, PT, KR, VN |
| `get_youtube_videos` | `country` | ISO 3166-1 alpha-2, uppercase only | Any country |
| `get_youtube_channels` | `country` | ISO 3166-1 alpha-2, uppercase only | Any country |
| `get_youtube_creator_insights` | `country` (default `us`) | ISO 3166-1 alpha-2, any case | The 219 countries Google Ads can target (not Taiwan, Hong Kong or Puerto Rico) |
| `get_trends`, `get_news_moments`, `get_audience_targeting`, `get_brand_profile` | None | | No country filter |

Two rules apply everywhere:

- The UK's code is `gb` (or `GB`), never `uk`. A `uk` value matches nothing on the search tools and returns an error on `get_tiktok_hashtags` and `get_youtube_creator_insights`.
- A country outside a tool's fixed list (`get_news_articles`, `get_tiktok_hashtags`, `get_youtube_creator_insights`) returns an error. On the tools that accept any country, an unknown or wrongly cased code returns no results rather than an error.

### Search Terms

- 0-3 terms per request (optional for every tool that accepts them)
- Terms run in parallel when provided
- For articles/posts: Keep complete concepts together
  - ✅ `["renewable energy policy"]`
  - ❌ `["renewable", "energy", "policy"]`
- **`sort_by` cannot be combined with `search_terms`**: for the tools that accept `sort_by` (`get_trends`, `get_news_moments`, `get_social_media_narratives`, `get_youtube_videos`, `get_youtube_channels`), sending both returns an error. When search terms are provided, results are ranked by relevance automatically, so omit `sort_by`. Use `"recency"` only when chronological ordering is explicitly wanted
- **Without search terms**: Tools return results sorted by a logical default, customizable with the `sort_by` parameter:
  - Trends: default "size" (biggest trends), optional "recency" (most recent trends)
  - Moments: default "size" (biggest story clusters), optional "recency" (most recent moments)
  - Narratives: default "size" (most discussed), optional "recency" (most recent narratives)
  - Articles: sorted by publish date (most recent)
  - Posts: sorted by publish date (most recent)
  - TikTok Hashtags: sorted by rank position
  - YouTube Videos: default "size" (highest view count), optional "recency" (newest videos)
  - YouTube Channels: default "size" (highest subscriber count), optional "recency" (recently active channels)

### Tool Selection

- Brand info → `get_brand_profile`
- Long-term trends in news and social media → `get_trends`
- News clusters → `get_news_moments`
- Social clusters → `get_social_media_narratives`
- Individual articles → `get_news_articles`
- Individual posts → `get_social_media_posts`
- Trending TikTok hashtags → `get_tiktok_hashtags`
- YouTube videos matching a keyword → `get_youtube_videos`
- YouTube channels matching a keyword → `get_youtube_channels`
- Audience targeting segments → `get_audience_targeting`
- YouTube creators to partner with, their audience, or YouTube topic trends → `get_youtube_creator_insights`

The three YouTube tools cover different ground. `get_youtube_videos` and `get_youtube_channels` search Sightly's curated
historical corpus by keyword and date; use them to find content that was published. `get_youtube_creator_insights` uses
Google's advertising data; use it to discover creators, judge partnership suitability, see who watches a channel, or
track a topic's trajectory. Channel IDs flow one way: look a channel up with `get_youtube_channels`, then pass its ID to
`get_youtube_creator_insights` for the audience profile.

Call more than one of these tools for the same question only when chaining channel IDs as above, or when the user asks
for both sources. `get_trends` covers news and social media, not YouTube. No tool ranks channels by growth or momentum,
so a request for "trending channels" is answered by the single best-fitting tool, with that limitation stated.
