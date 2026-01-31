# Social Data MCP Server

The social data MCP Server enables the intersection of real-time data listening and brand perception with data from our partner [Sightly](htps://sightly.com). The server provides Model Context Protocol (MCP) tools that allow clients to add these capabilities in conjunction with their existing data stack, enabling AI assistants and applications to access comprehensive brand profiles, discover cultural trends, and gather real-time insights from news articles and social media posts.

### Key Capabilities

- **Brand Intelligence**: Access detailed brand profiles including values, mission, vision, and brand positioning
- **Cultural Trend Analysis**: Discover macro cultural trends and patterns by aggregating news moments and social media narratives
- **Real-Time News Insights**: Find clustered news moments (day-to-day events) and search individual news articles
- **Social Media Intelligence**: Track social media narratives (day-to-day conversations) and analyze individual posts
- **TikTok Trend Discovery**: Get trending TikTok hashtags filtered by category, date range, and optional search terms
- **YouTube Intelligence**: Search YouTube videos and channels from a curated dataset with filtering by language, country, categories, and engagement metrics
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

## Tools

### get_trends

Discover macro cultural trends (long-term patterns).

**Parameters**:
- `search_terms` (array, 0-3 terms, optional): Search terms. If not provided, returns top trends sorted by total article count (biggest trends first)
- `start_date` (string, optional): YYYY-MM-DD format, max 60 days old
- `end_date` (string, optional): YYYY-MM-DD format, max 60 days old
- `brand` (array, optional): Filter by brand names in top 10 brands (max 5)
- `person` (array, optional): Filter by person names in top 10 people (max 5)
- `sort_by` (string, optional): Sort order when no search terms provided. Options: "size" (total article count - biggest trends) or "recency" (earliest article date - most recent trends). Only valid without search terms
- `limit` (int, optional): Results per search term (default: 3, max: 5)

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
    "start_date": "2024-11-01",
    "end_date": "2024-11-30",
    "limit": 5
  }
}
```

### get_news_moments

Find clustered news articles about topics (day-to-day events).

**Parameters**:
- `search_terms` (array, 0-3 terms, optional): Search terms. If not provided, returns top moments sorted by article count (biggest story clusters first)
- `start_date` (string, optional): YYYY-MM-DD format, max 60 days old
- `end_date` (string, optional): YYYY-MM-DD format, max 60 days old
- `category` (array, optional): Filter by content categories (max 5)
- `entity` (array, optional): Filter by entity names (max 5)
- `sort_by` (string, optional): Sort order when no search terms provided. Options: "size" (article count - biggest clusters) or "recency" (earliest article date - most recent moments). Only valid without search terms
- `limit` (int, optional): Results per search term (default: 8, max: 20)

**Example with search terms**:
```json
{
  "tool": "get_news_moments",
  "arguments": {
    "search_terms": ["climate change"],
    "start_date": "2024-01-01",
    "end_date": "2024-01-31",
    "category": ["environment"],
    "limit": 10
  }
}
```

**Example without search terms** (browse top moments):
```json
{
  "tool": "get_news_moments",
  "arguments": {
    "start_date": "2024-01-01",
    "end_date": "2024-01-31",
    "limit": 10
  }
}
```

### get_social_media_narratives

Find clustered social media posts about topics (day-to-day conversations).

**Parameters**:
- `search_terms` (array, 0-3 terms, optional): Search terms. If not provided, returns top narratives sorted by post count (most discussed first)
- `start_date` (string, optional): YYYY-MM-DD format, max 60 days old
- `end_date` (string, optional): YYYY-MM-DD format, max 60 days old
- `sentiment` (string, optional): Filter by sentiment: `very_positive`, `positive`, `neutral`, `negative`, `very_negative`
- `platform` (array, optional): Filter by platforms (max 5): Twitter, Reddit, Truth Social, Pinterest, Instagram, Bluesky, TikTok, Threads
- `sort_by` (string, optional): Sort order when no search terms provided. Options: "size" (post count - most discussed) or "recency" (earliest post date - most recent narratives). Only valid without search terms
- `limit` (int, optional): Results per search term (default: 8, max: 20)

**Example with search terms**:
```json
{
  "tool": "get_social_media_narratives",
  "arguments": {
    "search_terms": ["AI"],
    "start_date": "2024-01-01",
    "end_date": "2024-01-31",
    "sentiment": "positive",
    "platform": ["Twitter", "Reddit"]
  }
}
```

**Example without search terms** (browse top narratives):
```json
{
  "tool": "get_social_media_narratives",
  "arguments": {
    "start_date": "2024-01-01",
    "end_date": "2024-01-31",
    "platform": ["Twitter"],
    "limit": 10
  }
}
```

### get_news_articles

Search individual news articles (detailed content).

**Parameters**:
- `search_terms` (array, 0-3 terms, optional): Keep complete concepts together (e.g., "renewable energy policy" not ["renewable", "energy"]). If not provided, returns most recent articles sorted by publish date
- `start_date` (string, optional): YYYY-MM-DD format, max 60 days old
- `end_date` (string, optional): YYYY-MM-DD format, max 60 days old
- `publisher` (string, optional): Filter by publisher name
- `category` (array, optional): Filter by content categories (max 5)
- `entity` (array, optional): Filter by entity names (max 5)
- `publisher_location` (string, optional): Filter by country: United States, United Kingdom, Canada
- `limit` (int, optional): Results per search term (default: 10, max: 50)

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
- `search_terms` (array, 0-3 terms, optional): Keep complete concepts together. If not provided, returns most recent posts sorted by publish date
- `start_date` (string, optional): YYYY-MM-DD format, max 60 days old
- `end_date` (string, optional): YYYY-MM-DD format, max 60 days old
- `platform` (array, optional): Filter by platforms (max 5): Twitter, Reddit, Truth Social, Pinterest, Instagram, Bluesky, TikTok, Threads
- `theme` (array, optional): Filter by themes (max 5): discounts, purchase, appearance, churn, cost, ads, experience, craftmanship, transaction, criminal, loyalty, stock, taste, temperature, ambiance, delivery, fit, injury, knowledge, leadership, comfort, access, illness, location, restrooms, speed, satisfaction, wait times, cleanliness, durability, friendliness, selection
- `limit` (int, optional): Results per search term (default: 10, max: 50)

**Example with search terms**:
```json
{
  "tool": "get_social_media_posts",
  "arguments": {
    "search_terms": ["climate action"],
    "platform": ["Twitter"],
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

### get_tiktok_hashtags

Get trending TikTok hashtags. Can optionally filter by search terms or get top hashtags by category and date range.

**Parameters**:
- `search_terms` (array, 0-3 terms, optional): Optional search terms to filter results. If not provided, returns top hashtags according to other parameters
- `category_name` (string, optional): Filter by TikTok category (default: "ALL"). Available categories: ALL, ACADEMIC_RESOURCES, ANIMATION_AND_COMICS, APPAREL_AND_ACCESSORIES, ART, AUTOMOTIVE, BABY_CARE, BABY_KIDS_AND_MATERNITY, BEAUTY, BEAUTY_AND_PERSONAL_CARE, BEAUTY_SERVICES, BUSINESS_AND_FINANCE, BUSINESS_SERVICES, CARD_AND_BOARD_GAMES, CAREER_AND_PROFESSIONAL_GROWTH, COLLEGE, COMEDY, COMMUNITY_UPDATES_AND_ISSUES, CONVENTIONAL_AND_MAINSTREAM_SPORTS, COOKING, CRAFTING_AND_CREATIONS, CULTURE, DANCE, DIARY_AND_VLOG, DRINKS, EATING_EXPERIENCES, EDUCATION, ENTERTAINMENT_AND_SPORTS_NEWS, ENVIRONMENT, EXERCISE_AND_FITNESS, EXTREME_AND_ADVENTURE_SPORTS, FAMILY, FINANCIAL_SERVICES, FOOD, FOOD_AND_BEVERAGE, FOOD_RECOMMENDATIONS, GADGETS_AND_INNOVATION, GAMES, GENERAL_TRAVEL, HAIR_CARE, HEALTH, HEALTH_AND_WELLNESS, HISTORY_AND_LITERATURE, HOME_AND_GARDEN, HOME_IMPROVEMENT, HOUSEHOLD_PRODUCTS, LEARNING_AND_DEVELOPMENT, LEISURE_AND_RECREATION_FACILITIES, LIFE_SERVICES, LIVESTOCK_AND_FARMING, MISCELLANEOUS_PERFORMANCES, MOVIES_AND_TV, MUSIC, NEWS_AND_ENTERTAINMENT, OTHER_BEAUTY, OTHER_FASHION, OTHER_TRANSPORTATION, OUTDOOR_RECREATION, OUTFITS, PERFORMING_ARTS, PERSONAL_PHOTOGRAPHY, PETS, PET_CARE_AND_ACCESSORIES, PHOTOGRAPHY, PRODUCTIVITY_AND_EFFICIENCY, ROMANCE, SCIENCE, SENSORY_EXPERIENCES, SHOWS_FESTIVALS_AND_EXHIBITIONS, SOFTWARE_AND_APPS, SPECIAL_EFFECTS, SPORTS, SPORTS_AND_OUTDOOR, SUPERNATURAL_AND_HORROR, TECHNOLOGY, TOYS_COLLECTIBLES_AND_MEMORABILIA, TRAVEL, VEHICLE_AND_TRANSPORTATION, VIDEO_GAMES, WILDLIFE_AND_EXOTIC_PETS
- `date_range` (string, optional): Filter by date range (default: "1DAY"). Available options: "1DAY", "7DAY", "30DAY", "120DAY"
- `limit` (int, optional): Number of results per search term or total results if no search term (default: 10, max: 50)

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

**Example without search terms**:
```json
{
  "tool": "get_tiktok_hashtags",
  "arguments": {
    "category_name": "BEAUTY",
    "date_range": "1DAY",
    "limit": 15
  }
}
```

### get_audience_targeting

Generate audience targeting segments for specific ad platforms based on an audience description.

**Parameters**:
- `audience_name` (string, required): The name of the audience to target (e.g., "Tech Enthusiasts", "Fitness Enthusiasts")
- `audience_description` (string, required): A description of the audience to target (e.g., "Young professionals interested in technology and innovation")
- `platform` (string, required): Which platform to target. Available platforms: `Programmatic`, `YouTube`, `Pinterest`, `LinkedIn`, `TikTok`, `Snapchat`, `Meta`, `X`, `Reddit`, `Spotify`

**Platform-Specific Targeting Types**:

- **YouTube**: detailed_demographics, life_events, affinity_audiences, in_market_audiences, topics, keywords
- **Programmatic**: categories, genres, ctv_segments, olv_segments
- **TikTok**: interests, video_interactions, creator_interactions, hashtags
- **Meta**: detailed_demographics, interests, behaviors
- **Snapchat**: lifestyle, shoppers, visitors
- **LinkedIn**: company_industries, member_interests, member_traits
- **X**: interests, keywords, hashtags
- **Pinterest**: interests, keywords
- **Spotify**: interests, music_genres, playlist_themes, podcast_topics
- **Reddit**: interest_groups, keywords

**Returns**: Platform-specific targeting segments organized by demographics and targeting types. The response structure varies by platform but includes:
- Demographics (age, gender, income, parental status, etc.) - varies by platform
- Targeting segments (interests, behaviors, keywords, etc.) - varies by platform
- Audience name and platform identifier

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

Search YouTube videos from the Brand Mentality curated YouTube dataset.

**Parameters**:
- `search_terms` (array, 0-3 terms, optional): Search terms for video title/description. If not provided, returns top videos sorted by view count (highest first)
- `start_date` (string, optional): Start date for video publish date filtering (YYYY-MM-DD format)
- `end_date` (string, optional): End date for video publish date filtering (YYYY-MM-DD format)
- `language` (array, optional): Filter by language codes (e.g., "en", "es") - max 5
- `country` (array, optional): Filter by channel country codes (e.g., "US", "UK") - max 5
- `iab_category` (array, optional): Filter by IAB taxonomy category names (e.g., "Sports", "Music") - max 5
- `is_short` (boolean, optional): Filter by video type: true for Shorts, false for long-form, omit for all
- `exclude_kids_content` (boolean, optional): Exclude kids content when true
- `min_views` (int, optional): Minimum view count threshold
- `min_channel_subscribers` (int, optional): Minimum channel subscriber count
- `sort_by` (string, optional): Sort order when no search terms provided. Options: "size" (view count - most viewed) or "recency" (publish date - newest videos). Only valid without search terms
- `limit` (int, optional): Results per search term (default: 10, max: 50)

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

Search YouTube channels from the Brand Mentality curated YouTube dataset.

**Parameters**:
- `search_terms` (array, 0-3 terms, optional): Search terms for channel title/description. If not provided, returns top channels sorted by subscriber count (highest first)
- `start_date` (string, optional): Start date for latest video publish date filtering (YYYY-MM-DD format)
- `end_date` (string, optional): End date for latest video publish date filtering (YYYY-MM-DD format)
- `language` (array, optional): Filter by language codes (e.g., "en", "es") - max 5
- `country` (array, optional): Filter by country codes (e.g., "US", "UK") - max 5
- `exclude_kids_content` (boolean, optional): Exclude kids content when true
- `min_subscribers` (int, optional): Minimum subscriber count threshold
- `min_views` (int, optional): Minimum total view count threshold
- `min_video_count` (int, optional): Minimum video count on channel
- `sort_by` (string, optional): Sort order when no search terms provided. Options: "size" (subscriber count - most popular) or "recency" (latest video date - recently active channels). Only valid without search terms
- `limit` (int, optional): Results per search term (default: 10, max: 50)

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

## Response Structure

All search tools return results with clear distinction between total matches and sample results:

### Field Naming Convention
- `total_matches`: Total number of matching records in the database
- `sample_*`: The subset of example records returned (e.g., `sample_social_media_posts`, `sample_news_articles`)

This distinction helps clarify that `total_matches` represents the full scope of data matching your query, while the `sample_*` list contains representative examples limited by the `limit` parameter.

### Aggregate Statistics

**Social Media Posts**, **News Articles**, **YouTube Videos**, and **YouTube Channels** return full aggregate statistics per search term:

- `get_social_media_posts`: `total_matches`, `platform_distribution`, `top_themes_distribution`, `date_distribution`
- `get_news_articles`: `total_matches`, `top_publishers_distribution`, `top_categories_distribution`, `publisher_location_distribution`, `date_distribution`
- `get_youtube_videos`: `total_matches`, `language_distribution`, `country_distribution`, `category_distribution`, `views_distribution`, `likes_distribution`, `date_distribution`
- `get_youtube_channels`: `total_matches`, `language_distribution`, `country_distribution`, `subscriber_distribution`, `date_distribution`

**News Moments**, **Social Media Narratives**, and **Trends** return `total_matches` count per search term.

### Example Response Structure

```json
{
  "search_start_date": "2024-10-01",
  "search_end_date": "2024-12-01",
  "search_results": [
    {
      "search_term": "AI",
      "aggregate_stats": {
        "total_matches": 15420,
        "platform_distribution": {"Twitter": 8500, "Reddit": 4200, "TikTok": 2720},
        "top_themes_distribution": {"experience": 3200, "knowledge": 2800},
        "date_distribution": [{"date": "2024-11-01", "count": 520}, ...]
      },
      "sample_social_media_posts": [
        { "post_id": "...", "text": "...", ... }
      ]
    }
  ]
}
```

**Note**: Distribution fields prefixed with `top_` (e.g., `top_themes_distribution`) return the most frequent values, not exhaustive lists.

## Common Rules

### Dates
- Format: `YYYY-MM-DD` (e.g., `"2024-01-15"`)
- Max age: 60 days from today
- Default: If not provided, uses 60-day lookback

### Search Terms
- 0-3 terms per request (optional for all tools)
- Terms run in parallel when provided
- For articles/posts: Keep complete concepts together
  - ✅ `["renewable energy policy"]`
  - ❌ `["renewable", "energy", "policy"]`
- **Without search terms**: Tools return results sorted by a logical default, customizable with `sort_by` parameter:
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
- Long-term trends → `get_trends`
- News clusters → `get_news_moments`
- Social clusters → `get_social_media_narratives`
- Individual articles → `get_news_articles`
- Individual posts → `get_social_media_posts`
- Trending TikTok hashtags → `get_tiktok_hashtags`
- YouTube videos → `get_youtube_videos`
- YouTube channels → `get_youtube_channels`
- Audience targeting segments → `get_audience_targeting`
