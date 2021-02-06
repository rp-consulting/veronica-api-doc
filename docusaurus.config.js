module.exports = {
  title: 'Verónica Api Documentación',
  tagline: 'Documentación de Verónica API',
  url: 'https://veronica.ec',
  baseUrl: '/veronica-api-doc',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'rp-consulting', // Usually your GitHub org/user name.
  projectName: 'veronica-api-doc', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Verónica API',
      logo: {
        alt: 'Logo de Verónica',
        src: 'img/logo.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        }
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} Verónica API, Inc. Construido con Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        debug: false,
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // editUrl:
          //   'https://github.com/rp-consulting/veronica-api-doc',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/rp-consulting/veronica-api-doc/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
