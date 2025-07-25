// @ts-check
const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'IanaIO - DOCUMENTS',
  tagline: 'Technology - Methodology - Terminology - Showcase - Resources',
  url: 'https://docs.iana.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
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
        { to: '/technology', label: 'Technology', position: 'left' },
        { to: '/methodology', label: 'Methodology', position: 'left' },
        { to: '/terminology', label: 'Terminology', position: 'left' },
        { to: '/showcase', label: 'Showcase', position: 'left' },
        { to: '/resources', label: 'Resources', position: 'left' },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/ianaio/ianaio',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://discord.com/channels/1247475712001314857/1247475712001315860',
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
              href: 'https://discord.com/channels/1247475712001314857/1247475712001315860',
            },
          ],
        },
        {
          title: 'More',
          items: [
            { label: 'Blog', to: '/blog' },
            { label: 'GitHub', href: 'https://github.com/ianaio/ianaio' },
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
      copyright: `Copyright © ${new Date().getFullYear()} IanaIO, Inc.`,
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
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/ianaio/website/',
          routeBasePath: '/',
          path: 'docs',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/ianaio/website/',
          onInlineAuthors: 'ignore',
          onUntruncatedBlogPosts: 'ignore',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};

module.exports = config;
