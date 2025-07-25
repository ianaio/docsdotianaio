/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    {
      type: 'doc',
      id: 'home',
      label: 'Home',
    },
    {
      type: 'category',
      label: 'Projects',
      items: [
        'projects/tech-corporate-credibility-test',
        'projects/smarteditos-developer-ux-layer',
      ],
    },
    {
      type: 'category',
      label: 'Crates',
      items: [
        {
          type: 'doc',
          id: 'crates/ianaiorust',
          label: 'IanaIO Rust Crates',
        },
      ],
    },
    {
      type: 'doc',
      id: 'technology/technology',
      label: 'Technology',
    },
    {
      type: 'doc',
      id: 'methodology/methodology',
      label: 'Methodology',
    },
    {
      type: 'doc',
      id: 'terminology/terminology',
      label: 'Terminology',
    },
    {
      type: 'doc',
      id: 'showcase/showcase',
      label: 'Showcase',
    },
    {
      type: 'doc',
      id: 'resources/resources',
      label: 'Resources',
    },
    {
      type: 'doc',
      id: 'getting-started',
      label: 'Getting Started',
    },
  ],
};

module.exports = sidebars;
