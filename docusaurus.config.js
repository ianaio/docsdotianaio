// docusaurus.config.js
const config = {
  title: 'IanaIO',
  tagline: 'Documentation for IanaIO',
  url: 'https://docs.iana.io',
  baseUrl: '/',
  onBrokenLinks: 'warn', // Allows build to proceed with warnings
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'ianaio',
  projectName: 'website',
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/', // Docs served at root
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  themeConfig: {
    navbar: {
      title: null, // Disable default title
      items: [
        {
          type: 'doc',
          docId: 'getting-started', // Matches docs/getting-started.md
          position: 'left',
          label: 'Getting Started',
        },
        {
          type: 'doc',
          docId: 'showcase/showcase', // Matches docs/showcase/showcase.md
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
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} IanaIO. Built with Docusaurus.`,
    },
    prism: {}, // Minimal config, uses default Docusaurus code block styling
  },
};

module.exports = config;
