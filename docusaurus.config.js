// docusaurus.config.js
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'IanaIO',
  tagline: 'Documents, Showcases, Resources',
  url: 'https://docs.iana.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'ianaio',
  projectName: 'website',
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/ianaio/website/edit/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/ianaio/website/edit/main/',
          blogSidebarCount: 'ALL',
          blogSidebarTitle: 'All Posts',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            from: '/',
            to: '/docs/home',
          },
        ],
      },
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'IanaIO',
        logo: {
          alt: 'IanaIO Logo',
          src: 'img/logo.svg',
          href: '/docs/home',
          width: 32,
          height: 32,
        },
        items: [
          {
            type: 'doc',
            docId: 'getting-started',
            position: 'left',
            label: 'Getting Started',
          },
          {
            type: 'doc',
            docId: 'showcase/showcase',
            position: 'left',
            label: 'Showcase',
          },
          {
            href: 'https://github.com/ianaio/website',
            label: 'GitHub',
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
                label: 'Home',
                to: '/docs/home',
              },
              {
                label: 'Getting Started',
                to: '/docs/getting-started',
              },
              {
                label: 'Showcase',
                to: '/docs/showcase',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/ianaio',
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
                label: 'IanaIO',
                href: 'https://www.iana.io',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} IanaIO. Built with Docusaurus.`,
      },
      prism: {
        theme: require('prism-react-renderer').themes.github,
        darkTheme: require('prism-react-renderer').themes.dracula,
      },
      algolia: {
        appId: 'L4OVQ3CBLL',
        indexName: 'IanaIO',
        apiKey: 'e7f45bc93005a45745a40aa8355a9902',
      },
    }),
};

module.exports = config;
