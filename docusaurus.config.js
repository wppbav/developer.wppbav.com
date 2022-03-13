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
  deploymentBranch: 'docs',

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/wppbav/developer.wppbav.com',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/wppbav/developer.wppbav.com',
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
            label: 'Tutorial',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
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
                label: 'Tutorial',
                to: '/docs/intro',
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
          }
        ]
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
