// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */

const config = {
  title: 'Pallevar Docs',
  tagline: 'Documentación oficial para maximizar tu experiencia con nuestra plataforma.',
  favicon: 'img/logo_fondo_transparente.png',

  // Set the production url of your site here
  url: 'https://docs.espallevar.com/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'pallevar-mx', // Usually your GitHub org/user name.
  projectName: 'pallevar-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    localeConfigs:{
      en:{
        htmlLang:'en-GB'
      },
      ja:{
        direction:'ltr'
      }
    }
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        gtag: {
          trackingID: 'G-YKSC410GNC',  
          anonymizeIP: true,  
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/logo_fondo_transparente.png',
      navbar: {
        title: 'Pallevar',
        logo: {
          alt: 'Pallevar',
          src: 'img/logo_fondo_transparente.png',
        },
        items: [
          {
            type:'localeDropdown',
            position:'left'
          },
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutoriales',
          },
        /*  {to: '/blog', label: 'Blog', position: 'left'},*/
        /*
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
          */
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentacion',
            items: [
              {
                label: 'Tutoriales',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Redes Sociales',
            items: [
              {
                label: 'Linkedin',
                href: 'https://www.linkedin.com/company/pallevar/',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/pallevar.me/',
              },
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/profile.php?id=61567145556569',
              },
            ],
          },
          {
            title: 'Mas',
            items: [
              {
                label: 'Pallevar',
                to: 'https://espallevar.com/',
              },
              {
                label: 'Panel Administrativo',
                href: 'https://admin.espallevar.com/',
              },
              {
                label: 'Comanda',
                href: 'https://lacomanda.pallevar.com/',
              },
              {
                label: 'Unete al equipo',
                href: 'https://jobs.espallevar.com/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Pallevar, Co.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },     
    }),
};

export default config;
