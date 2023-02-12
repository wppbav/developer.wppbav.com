// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'BAV@WPP Developer Docs',
    tagline: 'Developer documentation for BAV@WPP and its API and suite of tools.',
    url: 'https://developer.wppbav.com',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.png',
    organizationName: 'wppbav', // Usually your GitHub org/user name.
    projectName: 'developer.wppbav.com', // Usually your repo name.
    deploymentBranch: 'gh-pages',
    trailingSlash: false,
    staticDirectories: ['public', 'static'],

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    editUrl: 'https://github.com/wppbav/developer.wppbav.com/edit/main',
                    lastVersion: 'current',
                    versions: {
                        current: {
                            label: 'v2',
                            path: '2.x',
                        },
                        "1.0": {
                            label: 'v1',
                            path: '1.x',
                        },
                    },
                },
                blog: {
                    showReadingTime: true
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            navbar: {
                title: 'BAV@WPP Developer',
                logo: {
                    alt: 'BAV@WPP',
                    src: 'img/logo.png',
                },
                items: [
                    {
                        type: 'doc',
                        docId: 'intro',
                        position: 'left',
                        label: 'API',
                    },
                    {
                        type: 'doc',
                        docId: 'embed/intro',
                        position: 'left',
                        label: 'Embed',
                    },
                    {to: '/blog', label: 'News', position: 'left'},
                    {
                        to: '/support',
                        label: 'Help & Support',
                    },
                    {
                        type: 'docsVersionDropdown',
                        position: 'right',
                        dropdownActiveClassDisabled: true,
                    },
                    {
                        href: 'https://wppbav.com',
                        label: 'BAV@WPP',
                        position: 'right',
                    },
                ],
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: 'Docs',
                        items: [
                            {
                                label: 'API Documentation',
                                to: '/docs/intro',
                            },
                            {
                                label: 'News & Updates',
                                to: '/blog',
                            },
                            {
                                label: 'Help & Support',
                                to: '/support',
                            },
                        ],
                    },
                    {
                        title: 'BAV@WPP Tools & Apps',
                        items: [
                            {
                                label: 'BAV Academy',
                                href: 'https://academy.wppbav.com/',
                            },
                            {
                                label: 'The Fount',
                                href: 'https://fount.wppbav.com/',
                            },
                            {
                                label: 'Stocks Watch Live',
                                href: 'https://stockprice.wppbav.com/',
                            },
                        ],
                    },
                    {
                        title: 'WPP Open',
                        items: [
                            {
                                label: 'WPP Open',
                                href: 'https://open.wpp.com',
                            },
                            {
                                label: 'API Portal',
                                href: 'https://api-portal.wpp.com/',
                            },
                        ],
                    },
                ]
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
};

module.exports = config;
