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
    docsSidebar: [
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
                'core-resources/brands',
                'core-resources/categories',
                'core-resources/collections',
                'core-resources/countries',
                'core-resources/metric-groups',
                'core-resources/metrics',
                'core-resources/operating-companies',
                'core-resources/regions',
                'core-resources/sectors',
                'core-resources/studies',
                'core-resources/years',
            ],
        },
        {
            type: 'category',
            label: 'Query Endpoints',
            items: [
                'query/index',
                'query/brandscape-data',
                'query/best-countries',
            ],
        },
    ],
};

module.exports = sidebars;
