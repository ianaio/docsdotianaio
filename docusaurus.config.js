// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config


// See: https://github.com/facebook/docusaurus/issues/8940 
const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'IanaIO - DOCUMENTS',
  tagline: ' Documents - Technology - Methodology - Terminology - Showcase - Resources ',
  url: 'https://docs.iana.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  favicon: 'img/ianaio-logo.ico',
  organizationName: 'ianaio',
  projectName: 'ianaio',
  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    }, 
    navbar: {
      title: 'IanaIO',
      logo: {
        alt: 'AI <3 IanaIO',
        src: 'img/ianaio-logo.webp',
      },
      items: [
        {
          href: 'https://www.iana.io',
          label: 'Home',
          position: 'left',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          type: 'dropdown',
          label: 'docs.rs',
          position: 'right',
          items: [
            {
              label: 'ianaio',
              href: 'https://docs.rs/ianaio',
            },
            {
              label: 'dialogs',
              href: 'https://docs.rs/ianaio-dialogs/',
            },
            {
              label: 'events',
              href: 'https://docs.rs/ianaio-events/',
            },
            {
              label: 'file',
              href: 'https://docs.rs/ianaio-file/',
            },
            {
              label: 'history',
              href: 'https://docs.rs/ianaio-history/',
            },
            {
              label: 'net',
              href: 'https://docs.rs/ianaio-net/',
            },
            {
              label: 'render',
              href: 'https://docs.rs/ianaio-render/',
            },
            {
              label: 'storage',
              href: 'https://docs.rs/ianaio-storage/',
            },
            {
              label: 'timers',
              href: 'https://docs.rs/ianaio-timers/',
            },
            {
              label: 'utils',
              href: 'https://docs.rs/ianaio-utils/',
            },
            {
              label: 'worker',
              href: 'https://docs.rs/ianaio-worker/',
            }
          ],
        },
        {
          href: 'https://github.com/ianaio/ianaio',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://discord.com/channels/1247475712001314857/1247475712001314860',
          label: 'Discord',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Follow us',
          items: [
            {
              alt: 'AI <3 IanaIO Logo',
              label: 'X',
              href: 'https://x.com/_ianaio', 
              width: 25,
              height: 25,
            },
          ],
	},
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.com/channels/1247475712001314857/1247475712001314860',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/ianaio/ianaio',
            },
          ],
        },
      ],
      logo: {
        alt: 'IanaIO logo',
        src: 'img/ianaio-logo.webp',
        href: 'https://www.iana.io',
        width: 27.83,
        height: 32,
      },
      copyright: `Copyright © ${new Date().getFullYear()} IanaIO, Inc.`, // You can also put own HTML here
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
      additionalLanguages: ['rust', 'toml'],
    },
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/ianaio/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/ianaio/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
};

module.exports = config;

