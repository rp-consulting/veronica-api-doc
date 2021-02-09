module.exports = {
  title: 'Verónica API',
  tagline: 'La mejor experiencia en facturación electrónica del Ecuador',
  url: 'https://rp-consulting.github.io',
  baseUrl: '/veronica-api-doc/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'RP-Consulting', // Usually your GitHub org/user name.
  projectName: 'veronica-api-doc', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Verónica API',
      logo: {
        alt: 'Logo de Verónica',
        src: 'img/logo.svg',
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
      copyright: `Copyright © ${new Date().getFullYear()} RP Consulting`,
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
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