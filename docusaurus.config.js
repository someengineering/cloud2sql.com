/* eslint-disable @typescript-eslint/no-var-requires */
// @ts-check

const a11yEmoji = require('@fec/remark-a11y-emoji');
const oembed = require('remark-plugin-oembed');

const latestRelease = require('./latestRelease.json');
const keywords = require('./keywords.json');

const isProd =
  process.env.NODE_ENV !== 'development' &&
  !!process.env.NETLIFY &&
  process.env.CONTEXT !== 'deploy-preview';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Cloud2SQL by Some Engineering Inc.',
  tagline: 'Data integration for infrastructure engineers',
  url: 'https://cloud2sql.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  favicon: 'img/favicon.ico',
  trailingSlash: false,
  stylesheets: [
    {
      rel: 'preload',
      href: 'https://cdn.some.engineering/fonts/Barlow.woff2',
      as: 'font',
      type: 'font/woff2',
      crossorigin: true,
    },
  ],
  scripts: isProd
    ? [
        {
          src: 'https://cloud2sql.com/js/script.js',
          defer: true,
          'data-domain': 'cloud2sql.com',
        },
      ]
    : [],
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/someengineering/cloud2sql.com/edit/main',
          showLastUpdateAuthor: false,
          showLastUpdateTime: true,
          remarkPlugins: [a11yEmoji, oembed],
        },
        blog: false,
        // blog: {
        //   blogTitle: 'News',
        //   blogDescription: 'Cloud2SQL release notes and updates',
        //   blogSidebarTitle: 'Announcements',
        //   blogSidebarCount: 'ALL',
        //   path: 'news',
        //   routeBasePath: 'news',
        //   archiveBasePath: null,
        //   showReadingTime: false,
        //   feedOptions: {
        //     type: 'all',
        //     copyright: `Copyright © ${new Date().getFullYear()} Some Engineering Inc.`,
        //   },
        //   remarkPlugins: [a11yEmoji],
        // },
        theme: {
          customCss: [require.resolve('./src/css/custom.css')],
        },
        sitemap: {
          changefreq: 'daily',
          priority: 0.5,
        },
      }),
    ],
  ],
  plugins: [
    function customWebpackConfig() {
      return {
        name: 'custom-webpack-config',
        configureWebpack: () => ({
          module: {
            rules: [{ test: /\.cast$/, use: 'url-loader' }],
          },
        }),
      };
    },
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image:
        'https://og.some.engineering/api/image?theme=some-engineering&darkMode=0&title=Cloud2SQL&metadata=by%20Some%20Engineering%20Inc.',
      docs: {
        sidebar: {
          autoCollapseCategories: true,
        },
        versionPersistence: 'none',
      },
      metadata: [
        {
          name: 'description',
          content:
            'Extract your infrastructure data to an SQL database. Open source and free to use.',
        },
        {
          name: 'keywords',
          content: keywords.join(','),
        },
        { property: 'og:type', content: 'website' },
      ],
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 5,
      },
      announcementBar: {
        id: `announcementBar-${latestRelease.version}`, // Increment on change
        content: `<span aria-label="star-struck" role="img">🤩</span> <a href="${latestRelease.link}">Check out what's new in Cloud2SQL ${latestRelease.version}</a>, and don't forget to <a href="https://github.com/someengineering/cloud2sql" target="_blank" rel="noopener noreferrer">star the project on GitHub</a>! <span aria-label="sparkles" role="img">✨</span>`,
      },
      navbar: {
        hideOnScroll: true,
        title: 'Cloud2SQL',
        logo: {
          alt: '',
          src: 'img/navbar-logo.svg',
        },
        items: [
          // { to: '/news', label: 'News', position: 'right' },
          {
            to: '/docs',
            label: 'Docs',
            position: 'right',
            type: 'dropdown',
            items: [
              {
                label: 'Installation',
                to: '/docs/installation',
              },
              {
                label: 'Usage',
                to: '/docs/usage',
              },
            ],
          },
          {
            label: 'GitHub',
            href: 'https://github.com/someengineering/cloud2sql',
            position: 'left',
            className: 'navbar-icon-link navbar-github-link',
            'aria-label': 'GitHub',
          },
          {
            label: 'Discord',
            href: 'https://discord.gg/someengineering',
            position: 'left',
            className: 'navbar-icon-link navbar-discord-link',
            'aria-label': 'Discord',
          },
          {
            label: 'LinkedIn',
            href: 'https://linkedin.com/company/someengineering',
            position: 'left',
            className: 'navbar-icon-link navbar-linkedin-link',
            'aria-label': 'LinkedIn',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'Installation',
                to: '/docs/installation',
              },
              {
                label: 'Usage',
                to: '/docs/usage',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Code of Conduct',
                to: '/code-of-conduct',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/someengineering',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/someengineering',
              },
              {
                label: 'LinkedIn',
                href: 'https://linkedin.com/company/someengineering',
              },
            ],
          },
          {
            title: 'Legal',
            items: [
              {
                label: 'Privacy Policy',
                to: '/privacy',
              },
              {
                label: 'Terms and Conditions',
                to: '/terms',
              },
            ],
          },
        ],
        copyright: `<span aria-label="owl" role="img">🦉</span> Copyright © ${new Date().getFullYear()} <a href="https://some.engineering" target="_blank" rel="noopener noreferrer">Some Engineering Inc</a>. Built with <a href="https://docusaurus.io" target="_blank" rel="noopener noreferrer">Docusaurus</a>. <span aria-label="dinosaur" role="img">🦖</span>`,
      },
      // algolia: {
      //   appId: '',
      //   apiKey: '',
      //   indexName: '',
      //   contextualSearch: true,
      // },
      prism: {
        theme: require('prism-react-renderer/themes/github'),
        darkTheme: require('./src/utils/prismDark.js'),
        additionalLanguages: [
          'csv',
          'ini',
          'powershell',
          'ruby',
          'csharp',
          'php',
        ],
      },
      magicComments: [
        {
          className: 'theme-code-block-highlighted-line',
          line: 'highlight-next-line',
          block: { start: 'highlight-start', end: 'highlight-end' },
        },
      ],
    }),
};

module.exports = config;
