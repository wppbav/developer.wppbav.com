/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    apiSidebar: [
        'intro',
        {
            type: 'category',
            label: 'Getting Started',
            items: [
                'authentication',
                'rate-limiting',
                'errors',
                'pagination',
                'versioning',
            ],
        },
        {
            type: 'category',
            label: 'Customizing responses',
            items: [
                'customizing/fields',
                'customizing/searching',
                'customizing/filters',
                'customizing/includes',
            ],
        },
        {
            type: 'category',
            label: 'Brands',
            items: [
                'brands/brands',
                'brands/collections',
                'brands/brand-tags',
                'brands/brand-variations',
            ],
        },
        {
            type: 'category',
            label: 'Studies',
            items: [
                'studies/studies',
                'studies/categories',
            ],
        },
        {
            type: 'category',
            label: 'Brand Data',
            items: [
                'brand-data/index',
                'brand-data/brandscape-data',
                'brand-data/data-models',
                'brand-data/agency-change-predictor',
                'brand-data/archetypes',
                'brand-data/brand-personality-match',
                'brand-data/brand-vulnerability-map',
                'brand-data/brand-worth',
                'brand-data/brand-worth-map',
                'brand-data/category-worth-map',
                'brand-data/cee-opinions',
                'brand-data/commitment-funnel',
                'brand-data/cost-of-entry',
                'brand-data/imagery',
                'brand-data/influence',
                'brand-data/love-plus',
                'brand-data/partnership-exchange-map',
                'brand-data/personality',
                'brand-data/pillars',
                'brand-data/powergrid',
                'brand-data/preferences',
                'brand-data/recommendation',
                'brand-data/super-cx',
                'brand-data/swot',
                'brand-data/toplist-market',
                'brand-data/usage',
            ],
        },
        {
            type: 'category',
            label: 'Audiences',
            items: [
                'audiences/audiences',
                'audiences/audience-groups',
                'audiences/managing-audiences',
                'audiences/export',
            ],
        },
        {
            type: 'category',
            label: 'Audience Origin',
            items: [
                'audience-origin/index',
                'audience-origin/metrics',
                'audience-origin/metric-groups',
                'audience-origin/touchpoints',
                'audience-origin/frequencies',
                'audience-origin/query',
            ],
        },
        {
            type: 'category',
            label: 'Best Countries',
            items: [
                'best-countries/index',
                'best-countries/metrics',
                'best-countries/metric-groups',
                'best-countries/factors',
                'best-countries/country-data',
                'best-countries/models',
                'best-countries/raw-data',
            ],
        },
        {
            type: 'category',
            label: 'Company Data',
            items: [
                'company-data/companies',
                'company-data/stock-prices',
            ],
        },
        {
            type: 'category',
            label: 'Market Share',
            items: [
                'market-share/index',
                'market-share/catalog',
                'market-share/brand-shares',
                'market-share/company-shares',
            ],
        },
        {
            type: 'category',
            label: 'Metric Glossaries',
            items: [
                'metrics/metrics',
                'metrics/metric-groups',
            ],
        },
        {
            type: 'category',
            label: 'Measures & Questions',
            items: [
                'measures/index',
                'measures/brand-measure-groups',
                'measures/brand-measures',
                'measures/bav-question-groups',
                'measures/bav-questions',
                'measures/study-catalog',
            ],
        },
        {
            type: 'category',
            label: 'Other Metadata',
            items: [
                'metadata/operating-companies',
                'metadata/regions',
                'metadata/sectors',
                'metadata/years',
                'metadata/gics-sectors',
                'metadata/stock-exchanges',
                'metadata/countries',
                'metadata/country-indicators',
                'metadata/cities',
            ],
        },
        'health-check',
        'webhooks',
    ],
    embedSidebar: [
        'embed/intro',
        'embed/implementation',
        'embed/display-options'
    ],
    aiSidebar: [
        'ai/intro',
        'ai/agents',
        {
            type: 'category',
            label: 'MCP Connectors',
            items: [
                'ai/mcp/intro',
                'ai/mcp/concepts',
                'ai/mcp/access-authorization',
                'ai/mcp/connecting-clients',
                'ai/mcp/mcp-apps',
                'ai/mcp/bav',
                'ai/mcp/best-countries',
                'ai/mcp/financial-data',
                'ai/mcp/market-share',
                'ai/mcp/social'
            ],
        }
    ],
    toolsSidebar: [
        'developer-tools/index',
        {
            type: 'category',
            label: 'Python SDK',
            items: [
                'developer-tools/python/index',
                'developer-tools/python/installation',
                'developer-tools/python/authentication',
                'developer-tools/python/reference-classes',
                'developer-tools/python/basic-usage',
                'developer-tools/python/advanced-usage',
                'developer-tools/python/tools',
                {
                    type: 'category',
                    label: 'Endpoints',
                    items: [
                        'developer-tools/python/endpoints/index',
                        'developer-tools/python/endpoints/audiences',
                        'developer-tools/python/endpoints/audience-groups',
                        'developer-tools/python/endpoints/brand-metric-groups',
                        'developer-tools/python/endpoints/brand-metrics',
                        'developer-tools/python/endpoints/brands',
                        'developer-tools/python/endpoints/brandscape-data',
                        'developer-tools/python/endpoints/categories',
                        'developer-tools/python/endpoints/cities',
                        'developer-tools/python/endpoints/collections',
                        'developer-tools/python/endpoints/companies',
                        'developer-tools/python/endpoints/countries',
                        'developer-tools/python/endpoints/regions',
                        'developer-tools/python/endpoints/sectors',
                        'developer-tools/python/endpoints/studies',
                        'developer-tools/python/endpoints/years',
                    ],
                }
            ],
        }
    ],
};

module.exports = sidebars;
