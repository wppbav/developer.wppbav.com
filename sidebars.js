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
        'authentication',
        'rate-limiting',
        'errors',
        'pagination',
        'versioning',
        {
            type: 'category',
            label: 'Customizing responses',
            items: [
                'customizing/fields',
                'customizing/filters',
                'customizing/includes',
            ],
        },
        {
            type: 'category',
            label: 'Core Resources',
            items: [
                'core-resources/audiences',
                'core-resources/audience-groups',
                'core-resources/brands',
                'core-resources/metrics',
                'core-resources/metric-groups',
                'core-resources/brandscape-data',
                'core-resources/categories',
                'core-resources/cee-opinions',
                'core-resources/collections',
                'core-resources/companies',
                'core-resources/countries',
                'core-resources/cities',
                'core-resources/gics-sectors',
                'core-resources/operating-companies',
                'core-resources/regions',
                'core-resources/sectors',
                'core-resources/stock-exchanges',
                'core-resources/stock-prices',
                'core-resources/studies',
                'core-resources/years',
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
            label: 'Tools / TurboPitch',
            items: [
                'tools/index',
                'tools/brand-personality-match',
                'tools/brand-vulnerability-map',
                'tools/brand-worth-map',
                'tools/category-worth-map',
                'tools/commitment-funnel',
                'tools/cost-of-entry',
                'tools/love-plus',
                'tools/partnership-exchange-map',
                'tools/swot',
                'tools/toplist-market',
            ],
        }
    ],
    embedSidebar: [
        'embed/intro',
        'embed/implementation',
        'embed/display-options'
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
                {
                    type: 'category',
                    label: 'Endpoints',
                    items: [
                        'developer-tools/python/endpoints/index',
                        'developer-tools/python/endpoints/audiences',
                        'developer-tools/python/endpoints/brands',
                        'developer-tools/python/endpoints/brandscape-data',
                        'developer-tools/python/endpoints/studies',
                    ],
                }
            ],
        }
    ],
};

module.exports = sidebars;
