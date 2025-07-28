// sidebars.js
module.exports = {
  docs: [
    {
      type: 'doc',
      id: 'home',
      label: 'Documentation',
    },
    {
      type: 'html',
      value: '<hr style="margin: 5px 0; border-width: 0.5px;">', // Thinner line, reduced margin
      defaultStyle: true,
    },
    {
      type: 'doc',
      id: 'getting-started',
      label: 'Start',
    },
    {
      type: 'category',
      label: 'Showcase',
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'showcase/showcase',
          label: 'Overview',
        },
        {
          type: 'doc',
          id: 'projects/smarteditos-developer-ux-layer',
          label: 'SmartEditOS Developer UX Layer',
        },
        {
          type: 'doc',
          id: 'projects/tech-corporate-credibility-test',
          label: 'Tech Corporate Credibility Test',
        },
      ],
    },
    {
      type: 'doc',
      id: 'methodology/methodology',
      label: 'Methodology',
    },
    {
      type: 'doc',
      id: 'resources/resources',
      label: 'Resources',
    },
    {
      type: 'category',
      label: 'Technology',
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'technology/technology',
          label: 'Overview',
        },
        {
          type: 'doc',
          id: 'crates/ianaiorust',
          label: 'IanaIO Rust',
        },
      ],
    },
    {
      type: 'doc',
      id: 'terminology/terminology',
      label: 'Terminology',
    },
  ],
};
