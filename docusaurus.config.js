/* eslint-disable @typescript-eslint/no-var-requires */
// @ts-check

const a11yEmoji = require('@fec/remark-a11y-emoji');

const latestRelease = require('./latestRelease.json');

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
  noIndex: !isProd,
  stylesheets: [
    ...Array(9)
      .fill()
      .map((_, i) => ({
        rel: 'preload',
        href: `https://cdn.some.engineering/fonts/Barlow${i + 1}00.woff2`,
        as: 'font',
        type: 'font/woff2',
        crossorigin: true,
      })),
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
          remarkPlugins: [a11yEmoji],
        },
        blog: false,
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
    [
      'pwa',
      /** @type {import('@docusaurus/plugin-pwa').PluginOptions} */
      {
        debug: !isProd,
        swRegister: false,
        swCustom: require.resolve('./src/sw.js'),
        pwaHead: [
          {
            tagName: 'link',
            rel: 'manifest',
            href: 'site.webmanifest',
          },
          {
            tagName: 'link',
            rel: 'icon',
            href: 'img/icon-192.maskable.png',
          },
          {
            tagName: 'link',
            rel: 'icon',
            href: 'img/icon-512.maskable.png',
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: '#89d1f1',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-capable',
            content: 'yes',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-status-bar-style',
            content: '#000d19',
          },
          {
            tagName: 'link',
            rel: 'apple-touch-icon',
            href: 'img/apple-icon-180.png',
          },
        ],
      },
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image:
        'https://og.some.engineering/api/image?theme=cloud2sql&darkMode=0&title=%20&metadata=by%20Some%20Engineering%20Inc.',
      docs: {
        sidebar: {
          autoCollapseCategories: true,
        },
        versionPersistence: 'none',
      },
      metadata: [
        {
          name: 'description',
          property: 'og:description',
          content:
            'Extract your infrastructure data to a SQL database. Open source and free to use.',
        },
        {
          property: 'og:type',
          content: 'website',
        },
      ],
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 5,
      },
      announcementBar: {
        id: `announcementBar-${latestRelease.version}`, // Increment on change
        content: `<span aria-label="star-struck" role="img">🤩</span> <a href="${latestRelease.link}">Cloud2SQL ${latestRelease.version}</a> is out! Don't forget to <a href="https://github.com/someengineering/cloud2sql" target="_blank" rel="noopener noreferrer">star the project on GitHub</a>! <span aria-label="sparkles" role="img">✨</span>`,
      },
      navbar: {
        hideOnScroll: true,
        title: 'Cloud2SQL',
        logo: {
          alt: '',
          src: 'img/navbar-logo.svg',
        },
        items: [
          {
            label: 'Docs',
            to: '/docs',
            position: 'right',
            items: [
              {
                label: 'Installation',
                to: '/docs/installation',
              },
              {
                label: 'Configuration',
                to: '/docs/configuration',
              },
              {
                label: 'Resource Collection',
                to: '/docs/resource-collection',
              },
            ],
          },
          {
            label: 'Releases',
            href: 'https://github.com/someengineering/cloud2sql/releases',
            position: 'right',
          },
          {
            label: 'Blog',
            href: 'https://resoto.com/blog',
            position: 'right',
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
                label: 'Overview',
                to: '/docs',
              },
              {
                label: 'Installation',
                to: '/docs/installation',
              },
              {
                label: 'Configuration',
                to: '/docs/configuration',
              },
              {
                label: 'Resource Collection',
                to: '/docs/resource-collection',
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
            title: 'More',
            items: [
              {
                label: 'Releases',
                href: 'https://github.com/someengineering/cloud2sql/releases',
              },
              {
                label: 'Blog',
                href: 'https://resoto.com/blog',
              },
              {
                label: 'Podcast',
                href: 'https://resoto.com/podcast',
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
      algolia: {
        appId: '2WGFCSF82Z',
        apiKey: '4a61af2ed0dfbc1211de1dfacb746adc',
        indexName: 'cloud2sql',
        contextualSearch: true,
      },
      prism: {
        theme: require('prism-react-renderer/themes/github'),
        darkTheme: require('./src/utils/prismDark.js'),
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
