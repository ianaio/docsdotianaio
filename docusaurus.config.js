// docusaurus.config.js
const config = {
  title: 'Docs IanaIO',
  tagline: 'Documentation for IanaIO',
  url: 'https://docs.iana.io',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/ianaio-logo.ico',
  organizationName: 'ianaio',
  projectName: 'website',
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  themeConfig: {
    navbar: {
      title: null,
      logo: {
        alt: 'Docs IanaIO Logo',
        src: 'img/ianaio-logo.webp',
        href: '/',
      },
      items: [
        {
          type: 'dropdown',
          label: 'IanaIO Links',
          position: 'left',
          items: [
            {
              label: 'IanaIO',
              href: 'https://www.iana.io',
              target: '_self',
            },
            {
              label: 'Security',
              href: 'https://security.iana.io',
              target: '_self',
            },
          ],
        },
        {
          type: 'doc',
          docId: 'showcase/showcase',
          position: 'left',
          label: 'Showcase',
        },
        {
          href: 'https://github.com/ianaio/',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://www.algolia.com/ai',
          label: 'Explore',
          position: 'right',
          className: 'navbar__explore-button',
        },
        {
          type: 'search',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} IanaIO. Built with <a href="https://www.iana.io" target="_self">IanaIO</a>.`, // Updated with link
    },
    prism: {},
    algolia: {
      appId: process.env.ALGOLIA_APP_ID || 'L4OVQ3CBLL',
      apiKey: process.env.ALGOLIA_API_KEY || 'e7f45bc93005a45745a40aa8355a9902',
      indexName: process.env.ALGOLIA_INDEX_NAME || 'IanaIO',
      contextualSearch: false,
      searchPagePath: 'search',
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
  },
};

module.exports = config;
