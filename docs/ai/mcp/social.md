---
sidebar_label: Social Data
---

# Social Data MCP Server

Our partner [Sightly](https://sightly.com) supplies the Social Data MCP Server. The server connects real-time data
listening and brand perception. It gives Model Context Protocol (MCP) tools that let clients add these capabilities to
their current data stack. With these tools, AI assistants and applications can get comprehensive brand profiles and
find cultural trends. They can also get real-time insights from news articles, social media posts, TikTok and YouTube.

:::info Availability
The Social Data MCP Server is available as a connector in WPP Open. To add it to your agents, refer to
[Connecting clients: WPP Open](./connecting-clients.md#wpp-open).
:::

This page is based on Sightly's MCP server documentation (version 1.36.0).

### Key Capabilities

- **Brand Intelligence**: Get detailed brand profiles, with values, mission, vision, and brand positioning
- **Cultural Trend Analysis**: Find macro cultural trends and patterns. The tools aggregate news moments and social media narratives to find them
- **Real-Time News Insights**: Find clustered news moments (day-to-day events) and search individual news articles
- **Social Media Intelligence**: Track social media narratives (day-to-day conversations) and analyze individual posts
- **TikTok Trend Discovery**: Get trending TikTok hashtags. Filter them by category, date range, country, and optional search terms
- **YouTube Intelligence**: Search YouTube videos and channels from a curated dataset. Filter by language, country, categories, and engagement metrics
- **YouTube Creator Discovery**: Find creators by topic or by their viewers. Get profiles of known channels, with audience demographics and partnership eligibility. Track how interest in a topic changes on YouTube
- **Audience Targeting**: Generate platform-specific audience targeting segments for ad campaigns on many platforms

### Data Hierarchy

The server puts data in a hierarchical structure:

- **Individual Level**: Articles and social media posts give detailed, granular content
- **Cluster Level**: Moments (news clusters) and Narratives (social media clusters) put related content in groups
- **Trend Level**: Trends aggregate moments and narratives to show long-term cultural patterns

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

- **Social Posts** → Clusters of posts are **Narratives** (day-to-day conversations)
- **Articles** → Clusters of articles are **Moments** (day-to-day news events)
- **Narratives + Moments** → Aggregates of these are **Trends** (long-term cultural patterns)

## Array Parameters

All parameters that this page shows as arrays also accept a string. This is for clients that cannot send real JSON
arrays:

- The server parses a JSON-encoded array, such as `"[\"Nike\", \"Adidas\"]"`, into the equivalent array.
- The server uses all other strings, such as `"Nike"`, as an array with one element.

But we recommend that you send a real array. The documented maximum item counts apply to arrays and strings. The server
never splits values at commas. Thus, `"Nike, Adidas"` is one value, not two.

## Tools

### get_brand_profile

Get the profile of a brand. The profile has the industry, business and mentality summaries, the mission, vision and
value statements, and key terms. It also has related entities, and the answers of the brand to opinion and scenario
questions.

**Note**: You must create and submit brand profiles in Sightly before this tool can get them. The tool returns only
profiles that your account or its child accounts own. The tool uses an approximate match for `brand_name`. Thus, close
variants of the profile name also find the profile.

**Parameters**:
- `brand_name` (string, required): Brand name

**Returns**: plain text, not JSON. It starts with a `BRAND NAME: <name>` line. Sections in brackets come after this
line. The response does not include empty sections:

- `[BRAND_INFORMATION]`: `Label: value` lines for industry, business summary, mentality summary, mission, vision and value statements, and key terms
- `[COMPANIES]`, `[INFLUENCERS]`, `[EVENTS]`, `[SOCIAL_CAUSES]`, `[PHILANTHROPIC_ORGANIZATIONS]`: one `name → relationship (type)` line for each related entity
- `[OPINION_QUESTIONS]`, `[SCENARIO_QUESTIONS]`: one `question → answer` line for each question

If the tool does not find an applicable profile, the response is the plain message `No profile found for <brand_name>`.

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

Find macro cultural trends (long-term patterns) in news and social media. This tool does not include YouTube. To see
how interest in a topic changes on YouTube, use `get_youtube_creator_insights` with `insight_type="trends"`.

**Parameters**:
- `search_terms` (array, 0-3 terms, optional): Search terms. If you do not send them, the tool returns the top trends, sorted by total article count (largest trends first). You cannot use it with `sort_by`
- `start_date` (string, optional): `YYYY-MM-DD` format, earliest `2026-01-01`
- `end_date` (string, optional): `YYYY-MM-DD` format, earliest `2026-01-01`
- `brand` (array, optional): Filter to trends that mention these brands (max 5, OR'd). A case-insensitive substring match against all brands on the trend, not only the 10 brands in `top_brands`
- `person` (array, optional): Filter to trends that mention these people (max 5, OR'd). A case-insensitive substring match against all people on the trend, not only the 10 people in `top_people`
- `sort_by` (string, optional): Valid only without search terms. Options: `"size"` (default, total article count - largest trends) or `"recency"` (most recent trends first)
- `limit` (int, optional): Results for each search term (default: 3, max: 5)
- `include_total_statistics` (bool, optional, default `true`): Include the `aggregate_stats` block. Set `false` to get only sample records. This is significantly faster

Each trend in `sample_trends` includes `title`, `overview`, `bullet_points`, `start_date`, `end_date`,
`total_moment_count`, `total_narrative_count`, `total_article_count`, `total_post_count`, `article_count_timeline` and
`post_count_timeline` (refer to [Timelines](#timelines)), `top_brands` and `top_people` (a maximum of 10 names each),
and `representative_moments` and `representative_narratives` (a maximum of 3 each).

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
- `search_terms` (array, 0-3 terms, optional): Search terms. If you do not send them, the tool returns the top moments, sorted by article count (largest story clusters first). You cannot use it with `sort_by`
- `start_date` (string, optional): UTC datetime `YYYY-MM-DDTHH:MM:SS`, earliest `2026-01-01T00:00:00`. Supports hour and minute precision. For a whole-day search, use `T00:00:00`
- `end_date` (string, optional): UTC datetime `YYYY-MM-DDTHH:MM:SS`, earliest `2026-01-01T00:00:00`. For a whole-day search, use `T23:59:59`
- `category` (array, optional): Filter by content categories (max 5)
- `entity` (array, optional): Filter by entity names (max 5)
- `sort_by` (string, optional): Valid only without search terms. Options: `"size"` (default, article count - largest clusters) or `"recency"` (most recent moments first)
- `limit` (int, optional): Results for each search term (default: 8, max: 20)
- `include_total_statistics` (bool, optional, default `true`): Include the `aggregate_stats` block. Set `false` to get only sample records. This is significantly faster

Each moment in `sample_news_moments` includes `title`, `summary`, `start_date`, `end_date`, `total_article_count`,
`article_count_timeline` (see [Timelines](#timelines)), and a `representative_article` with `title`, `url`,
`published_at`, `publisher_name`, `publisher_domain` and `publisher_location`.

**Sensitive topics**: each moment can include `sensitive_topics`. This field lists the brand-safety topics that are
an important part of the moment. The values come from this list: sex, drugs, crime, death, hacking, terrorism, tobacco,
alcohol, military conflict, politics, obscenity, conspiracy, guns, human rights, kids channel, racism. An empty list
means that Sightly examined the moment and found no sensitive topics. If Sightly did not examine a moment yet, the
moment does not have this field.

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
- `search_terms` (array, 0-3 terms, optional): Search terms. If you do not send them, the tool returns the top narratives, sorted by post count (most discussed first). You cannot use it with `sort_by`
- `start_date` (string, optional): `YYYY-MM-DD` format, earliest `2026-01-01`
- `end_date` (string, optional): `YYYY-MM-DD` format, earliest `2026-01-01`
- `sentiment` (string, optional): Filter by sentiment: `very_positive`, `positive`, `neutral`, `negative`, `very_negative`
- `platform` (array, optional): Filter by platforms (max 5): X, Reddit, Truth Social, Pinterest, Instagram, Bluesky, TikTok, Threads
- `theme` (array, optional): Filter by themes (max 5). Same theme list as [`get_social_media_posts`](#get_social_media_posts)
- `entity` (array, optional): Filter to narratives about a specific named person, brand, organization, product, event, or place (max 5), e.g. `["Messi", "Nike"]`. A case-insensitive substring match. Multiple values are OR'd. Includes only the narratives with a detected entity (about two-thirds). For broad topics or moods, use `search_terms`
- `min_likes` (int, optional): Return only narratives with posts that have this number of likes or more in total (must be ≥ 0). The tool does not return narratives with no like total
- `min_comments` (int, optional): Return only narratives with posts that have this number of comments or more in total (must be ≥ 0). The tool does not return narratives with no comment total
- `min_shares` (int, optional): Return only narratives with posts that have this number of shares/reposts or more in total (must be ≥ 0). Only some narratives have this data (about a quarter). Thus, for general engagement filters, we recommend `min_likes`/`min_comments`
- `country` (array, optional): Return only narratives with one or more posts from these countries, as ISO 3166-1 alpha-2 codes (max 5, OR'd, any case), e.g. `["gb", "au"]`. This filter checks for inclusion, not dominance. For example, a global narrative with one UK post matches `["gb"]`. To see the topics of conversation in a market, compare the `country_counts` entry of that country with `total_post_count` on each record. About a third of posts have no known country
- `sort_by` (string, optional): Valid only without search terms. Options: `"size"` (default, post count - most discussed) or `"recency"` (most recent narratives first)
- `limit` (int, optional): Results for each search term (default: 8, max: 20)
- `include_total_statistics` (bool, optional, default `true`): Include the `aggregate_stats` block. Set `false` to get only sample records. This is significantly faster
- `include_original_text` (bool, optional, default `false`): Add `original_text` to the `representative_post` of each narrative. This is the text of the post in its original language. Set `true` only when the source-language words are important. Posts that were already in English do not have this field

Each narrative in `sample_social_media_narratives` includes `title`, `summary`, `start_date`, `end_date`,
`total_post_count`, a `representative_post` (with `text`, `platform`, `post_publish_date` and, when available, `url` and
`author_name`), and `source_counts`. The `representative_post` text is always in English. A machine translates posts
that are not in English. Thus, quote the text as a translation, unless you request `include_original_text`.

Each narrative also includes:
- `sentiment_score`: the overall sentiment of the cluster, on a scale from -100 (most negative) to 100 (most positive). The `sentiment` filter puts this score in buckets: `very_negative` (below -75), `negative` (below -25), `neutral` (-25 to 25), `positive` (above 25), `very_positive` (above 75)
- `total_likes`, `total_comments`, `total_shares`: engagement totals for the cluster (not included when not available)
- `country_counts` and `country_unclassified_count`: the number of posts from each country (the top 10 countries, and an `other` entry for the remaining countries)

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
- `search_terms` (array, 0-3 terms, optional): Keep complete concepts together (e.g., `"renewable energy policy"` not `["renewable", "energy"]`). If you do not send them, the tool returns the most recent articles, sorted by publish date. Articles that are not in English have an English machine translation and the original text. Searches match both
- `start_date` (string, optional): UTC datetime `YYYY-MM-DDTHH:MM:SS`, earliest `2026-01-01T00:00:00`. For a whole-day search, use `T00:00:00`
- `end_date` (string, optional): UTC datetime `YYYY-MM-DDTHH:MM:SS`, earliest `2026-01-01T00:00:00`. For a whole-day search, use `T23:59:59`
- `publisher` (string, optional): Filter by publisher name
- `category` (array, optional): Filter by content categories (max 5). Do not put `news/` at the start of values
- `entity` (array, optional): Filter by entity names (max 5)
- `publisher_location` (string, optional): Filter by the country of the publisher, as one full English country name: United States, United Kingdom, Canada, Germany, Spain, Turkey, South Africa, Nigeria, China, India, Philippines, Thailand, Mexico, Brazil, Argentina, France, Italy, Netherlands, Australia, Poland, United Arab Emirates, Japan. Articles with no recorded publisher location never match
- `language_code` (array, optional): Filter by the original language of the article, as lowercase ISO 639-3 codes (max 5, OR'd), e.g. `["spa", "deu"]`. Supported: eng, spa, deu, fra, ita, pol, nld, ara, jpn, por, zho, hin, tur, tha, rus, kor, fas, vie. Only newer articles have a language code. Thus, use this filter to limit results by language, not to find all English articles
- `limit` (int, optional): Results for each search term (default: 10, max: 50)
- `include_total_statistics` (bool, optional, default `true`): Include the `aggregate_stats` block. Set `false` to get only sample records. This is significantly faster
- `include_full_body` (bool, optional, default `false`): Return the full body text of each article. By default, the tool truncates `body` to 2,000 characters. Articles that are not in English also have `original_title`/`original_body`. These fields are always truncated to about 500 characters, and this flag does not change them

Each article in `sample_news_articles` includes `title`, `body`, `url`, `published_at`, `publisher_name`,
`publisher_domain`, `publisher_location`, `categories`, `entities`, `scenarios`, and `language_code`. The response
does not include fields with no value.

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
- `search_terms` (array, 0-3 terms, optional): Keep complete concepts together. If you do not send them, the tool returns the most recent posts, sorted by publish date. Use it for topics, themes, concepts, or moods. Use `entity` for specific named people, brands, products, events or places. Use both to find a topic about a named entity
- `start_date` (string, optional): UTC datetime `YYYY-MM-DDTHH:MM:SS`, earliest `2026-01-01T00:00:00`. For a whole-day search, use `T00:00:00`
- `end_date` (string, optional): UTC datetime `YYYY-MM-DDTHH:MM:SS`, earliest `2026-01-01T00:00:00`. For a whole-day search, use `T23:59:59`
- `platform` (array, optional): Filter by platforms (max 5): X, Reddit, Truth Social, Pinterest, Instagram, Bluesky, TikTok, Threads
- `theme` (array, optional): Filter by themes (max 5): discounts, purchase, appearance, churn, cost, ads, experience, craftmanship, transaction, criminal, loyalty, stock, taste, temperature, ambiance, delivery, fit, injury, knowledge, leadership, comfort, access, illness, location, restrooms, speed, satisfaction, wait times, cleanliness, durability, friendliness, selection
- `entity` (array, optional): Filter to posts about a specific named person, brand, organization, product, event, or place (max 5), e.g. `"Messi"`, `"Nike"`, `"FIFA World Cup"`. A case-insensitive substring match (`"messi"` matches `"Lionel Messi"`). Multiple values are OR'd. Includes only the posts with a detected entity (about half). Use short, distinctive fragments
- `min_likes` (int, optional): Return only posts with this number of likes or more (must be ≥ 0). The tool does not return posts with no like count
- `min_comments` (int, optional): Return only posts with this number of comments or more (must be ≥ 0). The tool does not return posts with no comment count
- `min_shares` (int, optional): Return only posts with this number of shares/reposts or more (must be ≥ 0). Many platforms do not report shares. Thus, this filter can remove many results
- `min_author_followers` (int, optional): Return only posts from authors with this number of followers or more (must be ≥ 0). Use it for questions about influential or large accounts. The tool does not return posts with no follower count. Thus, it removes all posts from platforms that do not have followers (Reddit, Facebook, Tumblr)
- `country` (array, optional): Filter by the country of origin of the post, as ISO 3166-1 alpha-2 codes (max 5, OR'd, any case), e.g. `["us", "gb"]`. About half of all posts have a country. The countries with the most data: us, th, gb, in, br, fr, tr, mx
- `language_code` (array, optional): Filter by the detected language of the post, as lowercase ISO 639-1 codes (max 5, OR'd), e.g. `["en", "ja"]`. Values must be lowercase (`"JA"` matches nothing). Use it with `country` to get a language in a market
- `limit` (int, optional): Results for each search term (default: 10, max: 50)
- `include_total_statistics` (bool, optional, default `true`): Include the `aggregate_stats` block. Set `false` to get only sample records. This is significantly faster
- `include_full_body` (bool, optional, default `false`): Return the full text of each post. By default, the tool truncates post text to 2,000 characters
- `include_original_text` (bool, optional, default `false`): Add `original_text` to each post. This is the text of the post in its original language. Posts that were already in English do not have this field. Thus, if the field is present, the original was not in English

Each post in `sample_social_media_posts` includes `text`, `platform`, `url`, `post_publish_date`, `author_name`,
`themes`, `likes`, `comments`, `shares`, `author_followers`, `entities`, `country` and `language_code` (each field
only when available). Post text is always in English. When Sightly ingests a post that is not in English, a machine
translates it. The search uses keywords and semantics. Thus, a query in one language can find posts in a different
language. To limit results to an original language, use `language_code`.

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

Get trending TikTok hashtags. You can filter by search terms. You can also get top hashtags by category, date range
and country.

**Parameters**:
- `search_terms` (array, 0-3 terms, optional): Optional search terms to filter results. If you do not send them, the tool returns the top hashtags for the other parameters
- `category_name` (string, optional): Filter by TikTok category. If you do not send it, a query with search terms includes all categories. A query without search terms then uses the cross-category `"ALL"` leaderboard by default. Available categories: ALL, ACADEMIC_RESOURCES, ANIMATION_AND_COMICS, APPAREL_AND_ACCESSORIES, ART, AUTOMOTIVE, BABY_CARE, BABY_KIDS_AND_MATERNITY, BEAUTY, BEAUTY_AND_PERSONAL_CARE, BEAUTY_SERVICES, BUSINESS_AND_FINANCE, BUSINESS_SERVICES, CARD_AND_BOARD_GAMES, CAREER_AND_PROFESSIONAL_GROWTH, COLLEGE, COMEDY, COMMUNITY_UPDATES_AND_ISSUES, CONVENTIONAL_AND_MAINSTREAM_SPORTS, COOKING, CRAFTING_AND_CREATIONS, CULTURE, DANCE, DIARY_AND_VLOG, DRINKS, EATING_EXPERIENCES, EDUCATION, ENTERTAINMENT_AND_SPORTS_NEWS, ENVIRONMENT, EXERCISE_AND_FITNESS, EXTREME_AND_ADVENTURE_SPORTS, FAMILY, FINANCIAL_SERVICES, FOOD, FOOD_AND_BEVERAGE, FOOD_RECOMMENDATIONS, GADGETS_AND_INNOVATION, GAMES, GENERAL_TRAVEL, HAIR_CARE, HEALTH, HEALTH_AND_WELLNESS, HISTORY_AND_LITERATURE, HOME_AND_GARDEN, HOME_IMPROVEMENT, HOUSEHOLD_PRODUCTS, LEARNING_AND_DEVELOPMENT, LEISURE_AND_RECREATION_FACILITIES, LIFE_SERVICES, LIVESTOCK_AND_FARMING, MISCELLANEOUS_PERFORMANCES, MOVIES_AND_TV, MUSIC, NEWS_AND_ENTERTAINMENT, OTHER_BEAUTY, OTHER_FASHION, OTHER_TRANSPORTATION, OUTDOOR_RECREATION, OUTFITS, PERFORMING_ARTS, PERSONAL_PHOTOGRAPHY, PETS, PET_CARE_AND_ACCESSORIES, PHOTOGRAPHY, PRODUCTIVITY_AND_EFFICIENCY, ROMANCE, SCIENCE, SENSORY_EXPERIENCES, SHOWS_FESTIVALS_AND_EXHIBITIONS, SOFTWARE_AND_APPS, SPECIAL_EFFECTS, SPORTS, SPORTS_AND_OUTDOOR, SUPERNATURAL_AND_HORROR, TECHNOLOGY, TOYS_COLLECTIBLES_AND_MEMORABILIA, TRAVEL, VEHICLE_AND_TRANSPORTATION, VIDEO_GAMES, WILDLIFE_AND_EXOTIC_PETS
- `date_range` (string, optional): Filter by date range (default: `"1DAY"`). Available options: `"1DAY"`, `"7DAY"`, `"30DAY"`, `"120DAY"`
- `country` (array, optional): Filter by country, as uppercase ISO 3166-1 alpha-2 codes (max 5). Supported: US, GB, CA, DE, ES, TR, ZA, NG, CN, IN, PH, TH, MX, BR, AR, FR, IT, NL, PL, AU, AE, JP, PT, KR, VN. The tool accepts lowercase codes and changes them to uppercase. If you do not send it, the tool returns hashtags from all available countries
- `limit` (int, optional): Number of results for each search term, or total results if there is no search term (default: 50, max: 200)
- `include_total_statistics` (bool, optional, default `true`): If `false`, the response does not include `aggregate_stats`. In this tool, the statistics are for the returned rows only (not the full dataset). This is different from the other tools. Thus, if you disable them, the response is smaller, but the search is not faster

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

Generate audience targeting segments for specific ad platforms from an audience description.

**Parameters**:
- `audience_name` (string, required): The name of the audience to target (e.g., "Tech Enthusiasts", "Fitness Enthusiasts")
- `audience_description` (string, required): A description of the audience to target (e.g., "Young professionals interested in technology and innovation")
- `platform` (string, required): Which platform to target. Available platforms: `Programmatic`, `YouTube`, `Pinterest`, `LinkedIn`, `TikTok`, `Snapchat`, `Meta`, `X`, `Reddit`, `Spotify`, `Search`. The match is case-insensitive. All other values return an error. Always send `X` for Twitter

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

The tool writes keywords and hashtags for the audience. It does not select them from the published segment list of the
platform. The tool selects all other targeting types from that list.

**Returns**: a JSON object with two keys. The contents of both keys are different for each platform:
- `demographics`: age, gender, income, parental status and similar options. YouTube and Search use the same demographic options
- `segments`: one list for each targeting type above

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

Search individual YouTube videos by keyword and publish date, in the Sightly curated YouTube dataset. This tool
returns videos, not creator analysis. For audience, engagement or partnership questions, use
[`get_youtube_creator_insights`](#get_youtube_creator_insights).

**Parameters**:
- `search_terms` (array, 0-3 terms, optional): Search terms for video title/description. If you do not send them, the tool returns the top videos, sorted by view count (highest first). You cannot use it with `sort_by`
- `start_date` (string, optional): Start of the video publish date range (`YYYY-MM-DD`, earliest `2005-02-14`). When `include_total_statistics` is `true`, the range must not be more than 180 days. If you do not send it, the tool searches the 180 days that end at `end_date` (or today)
- `end_date` (string, optional): End of the video publish date range (`YYYY-MM-DD`, earliest `2005-02-14`)
- `language` (array, optional): Filter by language codes (e.g., `"en"`, `"es"`) - max 5
- `country` (array, optional): Filter by the channel's country as uppercase ISO 3166-1 alpha-2 codes (e.g., `"US"`, `"GB"`) - max 5. Case-sensitive: lowercase codes match nothing, and the code for the UK is `GB`, not `UK`
- `iab_category` (array, optional): Filter by IAB taxonomy category names (e.g., `"Sports"`, `"Music"`) - max 5. A case-insensitive substring match. Thus, `"Sports"` also matches more specific categories that contain it
- `is_short` (boolean, optional): Filter by video type: `true` for Shorts, `false` for long-form. Do not send it to get all videos
- `exclude_kids_content` (boolean, optional): Exclude kids content when `true`
- `min_views` (int, optional): Minimum view count threshold
- `min_channel_subscribers` (int, optional): Minimum channel subscriber count
- `sort_by` (string, optional): Valid only without search terms. Options: `"size"` (default, view count - most viewed) or `"recency"` (newest videos first)
- `limit` (int, optional): Results for each search term (default: 10, max: 50)
- `include_total_statistics` (bool, optional, default `true`): Include the `aggregate_stats` block. Set `false` to get only sample records. This is significantly faster and removes the 180-day cap

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

Search YouTube channels by keyword in their title or description, in the Sightly curated YouTube dataset. This tool
has no audience or engagement data. For a full profile, send the `channel_id` values from this tool to
[`get_youtube_creator_insights`](#get_youtube_creator_insights).

**Parameters**:
- `search_terms` (array, 0-3 terms, optional): Search terms for channel title/description. If you do not send them, the tool returns the top channels, sorted by subscriber count (highest first). You cannot use it with `sort_by`
- `start_date` (string, optional): Start of the latest-video publish date range (`YYYY-MM-DD`, earliest `2005-02-14`). When `include_total_statistics` is `true`, the range must not be more than 180 days. If you do not send it, the tool searches the 180 days that end at `end_date` (or today)
- `end_date` (string, optional): End of the latest-video publish date range (`YYYY-MM-DD`, earliest `2005-02-14`)
- `language` (array, optional): Filter by language codes (e.g., `"en"`, `"es"`) - max 5
- `country` (array, optional): Filter by the channel's country as uppercase ISO 3166-1 alpha-2 codes (e.g., `"US"`, `"GB"`) - max 5. Case-sensitive: lowercase codes match nothing, and the code for the UK is `GB`, not `UK`
- `exclude_kids_content` (boolean, optional): Exclude kids content when `true`
- `min_subscribers` (int, optional): Minimum subscriber count threshold
- `min_views` (int, optional): Minimum total view count threshold
- `min_video_count` (int, optional): Minimum video count on channel
- `sort_by` (string, optional): Valid only without search terms. Options: `"size"` (default, subscriber count - most popular) or `"recency"` (recently active channels first)
- `limit` (int, optional): Results for each search term (default: 10, max: 50)
- `include_total_statistics` (bool, optional, default `true`): Include the `aggregate_stats` block. Set `false` to get only sample records. This is significantly faster and removes the 180-day cap

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

Find and analyze YouTube creators, and track content trends, with the YouTube advertising data from Google. This tool
is different from `get_youtube_videos` and `get_youtube_channels`. Those tools search the curated corpus of Sightly by
keyword and date. Use those tools to search historical content. Use this tool to find creators and to examine
partnership suitability, audience composition and trend trajectories.

There are three creator modes. You can use only one mode at a time. Send exactly one of `topic`, `channel_ids`, or the
audience filters:

| Mode | Use when | Returns |
|------|----------|---------|
| `topic` | You want creators who make content about a subject | Creators ranked by relevance to that topic |
| `channel_ids` | You already know the channels | Full profiles. This is the only mode with audience demographics and top videos |
| Audience filters | You want creators with a specific type of viewer | Creators with viewers that match the profile |

**Parameters**:
- `insight_type` (string, optional, default `"creators"`): `"creators"` finds creators or gets their profiles. `"trends"` returns three years of monthly trend history for a topic, or the current trends for an audience
- `topic` (string, optional): A subject in plain words (e.g. `"electric vehicles"`, `"Nike"`). The tool matches it to a Google Knowledge Graph entity. The response gives the match as `resolved_topic`. Thus, you can examine an ambiguous term and try again
- `channel_ids` (array, optional, max 50): YouTube channel IDs such as `"UCX6OQ3DkcsbYNE6H8uQQuVA"`. You cannot use channel names here. First, get the IDs from `get_youtube_channels`. The tool gets profiles only for the first `limit` IDs (10 by default) and silently ignores the other IDs. Thus, if you send more than 10 IDs, increase `limit`. Not valid with `insight_type="trends"`
- `audience_age_ranges` (array, optional, max 5): Viewer age ranges: `18-24`, `25-34`, `35-44`, `45-54`, `55-64`, `65+`
- `audience_genders` (array, optional, max 5): Viewer genders: `male`, `female`
- `audience_interests` (array, optional, max 5): Viewer interests in plain words (e.g. `"cooking"`). This parameter tells the interests of the audience. `topic` tells the subject of the content of the creator. The tool matches each interest to a Google Knowledge Graph entity. If the tool cannot match an interest, it returns an error
- `country` (string, optional, default `"us"`): ISO 3166-1 alpha-2 code in any case (the UK is `gb`, Japan `jp`, India `in`). Creator results, audience data and trends are all specific to this country. Supports the 219 countries that Google Ads can target. These countries do not include Taiwan (`tw`), Hong Kong (`hk`), and Puerto Rico (`pr`). All other codes return an error
- `limit` (int, optional): The default is 15 for creator searches and 10 for channel profiles (max 50 for profiles, 100 for the other modes). The tool ignores it for trends, which return a maximum of 5
- `include_brand_sentiment` (bool, optional, default `false`): Applies only with `insight_type="trends"` and a `topic` that names a brand. Returns a maximum of 6 months of positive/neutral/negative view share. It also returns AI-written summaries of the causes of the positive and negative sentiment. These summaries come only from video content (never comments). Fails for topics that are not brands
- `include_top_videos` (bool, optional, default `true`): Applies only to channel profiles. If you need only channel metrics and audience demographics, set `false`. This makes the response about half the size

**Data sharing consent**: Google shows fields that are not public only if the creator gives consent. When
`data_sharing_consent` is `false`, the response for that creator does not have `engagement_rate`, the per-video
averages, `languages` and `audience`. These fields are absent, not zero. About a quarter of creators do not give
consent. Large official channels frequently do not give consent.

**No pagination**: Google returns about a thousand creators for each search, with no pages. `total_available` gives the
number of matches. Do not expect a second page. Increase `limit`.

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
- `country`: the country of the search
- `resolved_topic`: the Knowledge Graph entity that matches your topic text (`query`, `name`, `machine_id`, `description`). `other_matches` lists alternatives
- `total_available` / `returned`: the number of creators, channels or trends that matched, and the number that the tool returned
- `channels_not_found`: requested channel IDs that Google did not recognize
- `creators[]`: `name`, `channel_id`, `handle`, `channel_created`, `country`, `languages`, `relevance`, `data_sharing_consent`, `metrics`
- `profiles[]`: `name`, `channel_id`, `handle`, `channel_created`, `country`, `channel_type`, `languages`, `data_sharing_consent`, `metrics`, plus `audience` (viewer share by age range, gender, device and country), `content_topics`, and `top_videos` (up to 5). Profiles carry no relevance
- `trends[]`: `name`, trend direction, `views`, `views_indexed`, `audience_share`, `change_percent`, `history` (monthly), `brand_sentiment`
- `metrics`: subscribers, views, videos, likes, comments, Shorts views and videos, `engagement_rate`, per-video averages, whether the creator is an active Shorts or live stream creator, and `partnership_opportunities` (advertising products that the creator is eligible for)

**Reading trends**:
- Trend data is about two months late. The newest month is the latest month that Google published
- `change_percent` is a fraction (`0.19` = +19%). At the top level, it compares the latest month with the month three months before. In `history`, it compares each month with the month before
- `views_indexed` is 0-100, relative to the peak month of the topic. Thus, you cannot compare it between topics
- `views` is the absolute view count for the latest month only
- `history` includes 36 months, newest first, for topic trends only. Audience trends return `audience_share` in its place. This is the fraction of the requested audience that searched for or viewed the trend
- `brand_sentiment` shares are proportions of views, and their sum is 1 for each month. If Google does not have sufficient data for a month, that month has no shares

## Response Structure

### Output Format

All tools return their result as one text block:

- **Results found**: a short data context (guidance about how to interpret the payload), a blank line, then the payload. The payload is JSON for all tools except `get_brand_profile`, which returns plain text.
- **Nothing found**: a short plain-text message with no JSON, such as `No News Articles found for: <terms>. Try broader search terms or expand the date range.` This occurs when no search term returns a result, when no brand profile matches, and when `get_youtube_creator_insights` finds no creators, profiles, or trends. If one or more search terms return results, the terms without results have an empty `sample_*` list.
- **Invalid input**: a tool error that describes the problem. Examples are an unknown audience-targeting platform, `sort_by` sent with `search_terms`, or a YouTube date range of more than 180 days.

### Search Tool Payloads

`get_trends`, `get_news_moments`, `get_social_media_narratives`, `get_news_articles`, `get_social_media_posts`,
`get_youtube_videos`, and `get_youtube_channels` use one shape:

- `search_start_date` / `search_end_date`: the range that the tool searched. `YYYY-MM-DD` for trends, narratives, and the YouTube tools. `YYYY-MM-DDTHH:MM:SS` for moments, articles, and posts.
- `search_results`: one entry for each search term, or one entry if you browse without search terms. Each entry contains:
  - `search_term`: the term. Not included if you browse without search terms
  - `aggregate_stats`: population statistics. Not included when `include_total_statistics=false`
  - the sample list: `sample_trends`, `sample_news_moments`, `sample_social_media_narratives`, `sample_news_articles`, `sample_social_media_posts`, `sample_youtube_videos`, or `sample_youtube_channels`

`aggregate_stats.total_matches` is the number of records in the full database that match the query. The `sample_*`
list contains representative examples, with a maximum set by `limit`. The records do not include fields with no value.
The tools do not return these fields as null.

The other tools have their own shapes. Their sections describe these shapes:

- `get_tiktok_hashtags` returns `hashtags` rows, with statistics for those rows.
- `get_youtube_creator_insights` returns creators, profiles, or trends, with `total_available` and `returned`.
- `get_audience_targeting` returns `demographics` and `segments`.
- `get_brand_profile` returns plain text.

### Aggregate Statistics

The statistics include all records that match the query, not only the returned sample. The calculation of the
statistics takes much time. Thus, if you need only some example records, send `include_total_statistics=false`. The
search is then significantly faster. `get_youtube_creator_insights` has no `include_total_statistics` parameter.

- `get_social_media_posts`: `total_matches`, `platform_distribution`, `top_themes_distribution`, `language_distribution`, `date_distribution`, `likes_stats`, `comments_stats`, `shares_stats`
- `get_news_articles`: `total_matches`, `top_publishers_distribution`, `top_categories_distribution`, `top_iab_categories_distribution`, `publisher_location_distribution`, `language_code_distribution`, `date_distribution`
- `get_youtube_videos`: `total_matches`, `language_distribution`, `country_distribution`, `category_distribution`, `views_distribution`, `likes_distribution`, `date_distribution`
- `get_youtube_channels`: `total_matches`, `language_distribution`, `country_distribution`, `subscriber_distribution`, `date_distribution`
- `get_social_media_narratives`: `total_matches`, `total_post_count`, `sentiment_distribution` (negative, neutral, positive), `platform_distribution`, `country_distribution`, `narrative_size_distribution`, `narratives_per_day_date_distribution`, `total_likes_stats`, `total_comments_stats`, `total_shares_stats`
- `get_news_moments`: `total_matches`, `total_article_count`, `moment_size_distribution`, `moments_per_day_date_distribution`
- `get_trends`: `total_matches`, `total_article_count`, `total_post_count`, `top_brands_distribution`, `top_people_distribution`, `trends_per_day_date_distribution`
- `get_tiktok_hashtags`: `views_distribution`, `posts_distribution`, `rank_change_distribution`, `top_country_distribution`. The tool calculates these for the returned rows only, not for the full dataset

How to read these statistics:

- **Date distributions** are `{"interval": ..., "buckets": [{"date": ..., "count": ...}]}` with a maximum of 30 buckets. The tool automatically selects the interval (for example `1d`, `7d`, or `1M`) for the searched range. Thus, the `*_per_day_date_distribution` series are not always daily.
- **Cluster dates**: the `*_per_day_date_distribution` series count clusters, not their contents. The date is when a story started, when a conversation started, or when a trend ended. For article or post volume over time, use `get_news_articles` or `get_social_media_posts`.
- **Multi-valued fields** (the platforms of a narrative, the categories of an article) count a record in each bucket that applies to it. Thus, the sum of the buckets can be more than `total_matches`.
- **Truncation**: distributions by value (platforms, themes, languages, countries, publishers, categories, brands, people) list only the most frequent values. Thus, a missing key means zero or a value that is not in the top values. Range and date distributions list all buckets, also empty buckets.
- **Engagement stats**: each `*_stats` object has `count`, `min`, `max`, `avg`, and `sum`. `count` includes only records that have a value for that metric. To find how many records have the metric, compare `count` with `total_matches`.

### Timelines

`article_count_timeline` (trends and moments) and `post_count_timeline` (trends) show the volume of a record during
its full life. Records with 14 days of activity or less have one entry for each active day. Records with 15 to 90 days
have 7-day entries. Longer records have entries for calendar months.

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

- **Date-only format** (`YYYY-MM-DD`): for `get_trends` and `get_social_media_narratives`, earliest `2026-01-01`
- **UTC datetime format** (`YYYY-MM-DDTHH:MM:SS`): for `get_news_articles`, `get_news_moments`, and `get_social_media_posts`, earliest `2026-01-01T00:00:00`. Naive UTC. Do not include a timezone offset. For a whole-day search, use `T00:00:00` to `T23:59:59`
- **YouTube tools** (`get_youtube_videos`, `get_youtube_channels`): `YYYY-MM-DD`, earliest `2005-02-14`
- **Default**: if you do not send a start date, the start date is the earliest available date
- **180-day YouTube cap**: when `include_total_statistics` is `true` (the default), the YouTube tools search a maximum of 180 days. If you do not send `start_date`, the tools search the 180 days that end at `end_date` (or today). An explicit range of more than 180 days returns an error. To search the full history without population statistics, send `include_total_statistics: false`
- **What the range filters on**: the publish date of an article or post, the earliest article or post of a moment or narrative, the latest publish date of a trend, the publish date of a video, and the latest video publish date of a channel

### Countries

Each tool supports a different set of countries and uses its own code format:

| Tool | Parameter | Format | Supported countries |
|------|-----------|--------|---------------------|
| `get_social_media_posts` | `country` | ISO 3166-1 alpha-2, any case | Any country (about half of posts have one) |
| `get_social_media_narratives` | `country` | ISO 3166-1 alpha-2, any case | Any country |
| `get_news_articles` | `publisher_location` | Full English name, one value | The 22 countries listed under [`get_news_articles`](#get_news_articles) |
| `get_tiktok_hashtags` | `country` | ISO 3166-1 alpha-2, uppercase (the tool changes lowercase to uppercase) | US, GB, CA, DE, ES, TR, ZA, NG, CN, IN, PH, TH, MX, BR, AR, FR, IT, NL, PL, AU, AE, JP, PT, KR, VN |
| `get_youtube_videos` | `country` | ISO 3166-1 alpha-2, uppercase only | Any country |
| `get_youtube_channels` | `country` | ISO 3166-1 alpha-2, uppercase only | Any country |
| `get_youtube_creator_insights` | `country` (default `us`) | ISO 3166-1 alpha-2, any case | The 219 countries that Google Ads can target (not Taiwan, Hong Kong or Puerto Rico) |
| `get_trends`, `get_news_moments`, `get_audience_targeting`, `get_brand_profile` | None | | No country filter |

Two rules apply to all tools:

- The code for the UK is `gb` (or `GB`), never `uk`. A `uk` value matches nothing on the search tools. It returns an error on `get_tiktok_hashtags` and `get_youtube_creator_insights`.
- Some tools have a fixed list of countries (`get_news_articles`, `get_tiktok_hashtags`, `get_youtube_creator_insights`). A country that is not on the list returns an error. On the tools that accept all countries, an unknown code or a code with incorrect case returns no results, not an error.

### Search Terms

- 0-3 terms for each request (optional for all tools that accept them)
- If you send terms, the tool runs them in parallel
- For articles/posts: Keep complete concepts together
  - ✅ `["renewable energy policy"]`
  - ❌ `["renewable", "energy", "policy"]`
- **`sort_by` cannot be combined with `search_terms`**: some tools accept `sort_by` (`get_trends`, `get_news_moments`, `get_social_media_narratives`, `get_youtube_videos`, `get_youtube_channels`). If you send both parameters to these tools, they return an error. If you send search terms, the tools automatically rank results by relevance. Thus, do not send `sort_by`. Use `"recency"` only when the user explicitly wants chronological order
- **Without search terms**: Tools sort the results in a logical default order. You can change this order with the `sort_by` parameter:
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

The three YouTube tools have different functions. `get_youtube_videos` and `get_youtube_channels` search the curated
historical corpus of Sightly by keyword and date. Use them to find published content. `get_youtube_creator_insights`
uses the advertising data from Google. Use it to find creators, to examine partnership suitability, to see the viewers
of a channel, or to track the trajectory of a topic. Channel IDs go in one direction only. First, find a channel with
`get_youtube_channels`. Then send its ID to `get_youtube_creator_insights` to get the audience profile.

Call more than one of these tools for the same question only in two conditions. The first condition is when you send
channel IDs from one tool to the other, as above. The second condition is when the user asks for both sources.
`get_trends` includes news and social media, not YouTube. No tool ranks channels by growth or momentum. Thus, for a
request for "trending channels", use the one tool that is the best fit, and tell the user about this limit.
