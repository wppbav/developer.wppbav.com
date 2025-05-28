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
                'brand-data/archetypes',
                'brand-data/brand-personality-match',
                'brand-data/brand-vulnerability-map',
                'brand-data/brand-worth-map',
                'brand-data/category-worth-map',
                'brand-data/commitment-funnel',
                'brand-data/cost-of-entry',
                'brand-data/love-plus',
                'brand-data/partnership-exchange-map',
                'brand-data/swot',
                'brand-data/toplist-market',
                'brand-data/cee-opinions',
            ],
        },
        {
            type: 'category',
            label: 'Audiences',
            items: [
                'audiences/audiences',
                'audiences/audience-groups',
                'audiences/export',
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
            label: 'Metric Glossaries',
            items: [
                'metrics/metrics',
                'metrics/metric-groups',
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
        'ai/mcp-server'
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
