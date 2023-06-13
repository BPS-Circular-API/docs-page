// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'BPS Circular API | Documentation',
  tagline: 'The official documentation for the BPS Circular API',
  url: 'https://bpsapi.rajtech.me/',
  baseUrl: '/docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/', // Serve the docs at the site's root
          editUrl: "https://github.com/BPS-Circular-API/docs-page/edit/main/",
        },
        blog: false,
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
        title: 'BPS Circular API',
        logo: {
          alt: 'BPS Circular API Logo',
          src: 'img/logo.svg',
        },
        items: [{
            href: 'https://github.com/orgs/BPS-Circular-API/',
            label: 'GitHub',
            position: 'right',
          },
          {
            to: '/docs/category/api',
            label: 'API',
            position: 'left',
          },
          {
            to: '/docs/category/discord-bot',
            label: 'Discord Bot',
            position: 'left',
          },
          {
            to: '/docs/category/python-package',
            label: 'Python Package',
            position: 'left',
          },
          {
            to: '/docs/category/telegram-bot',
            label: 'Telegram Bot',
            position: 'left',


          }


        ],
      },
      footer: {
        style: 'dark',
        links: [{
            title: 'Docs',
            items: [{
                label: 'API',
                to: '/category/api',
              },
              {
                label: 'Discord Bot',
                to: '/category/discord-bot',
              },
              {
                label: 'Python Package',
                to: '/category/python-package',
              },
              // {
              //   label: 'Telegram Bot',
              //   to: '/category/telegram-bot',
              // },
            ],
          },
          {
            title: 'Open Source Projects',
            items: [{
                label: 'API',
                href: 'https://github.com/BPS-Circular-API/api',
              },
              {
                label: 'Python Package',
                href: 'https://github.com/BPS-Circular-API/python-package',
              },
              {
                label: 'Docs Page',
                href: 'https://github.com/BPS-Circular-API/docs-page',
              },
              {
                label: 'Discord Bot',
                href: 'https://github.com/BPS-Circular-API/discord-bot',
              },
              {
                label: 'Telegram Bot',
                href: 'https://github.com/BPS-Circular-API/telegram-bot',
              },

            ],
          },
          {
            title: 'More',
            items: [

              {
                label: 'GitHub',
                href: 'https://github.com/BPS-Circular-API/docs-page',
              },
              {
                label: 'My Website',
                href: 'https://rajtech.me',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} BPS API, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['apacheconf', 'python', 'json'],

      },
    }),
};

module.exports = config;
