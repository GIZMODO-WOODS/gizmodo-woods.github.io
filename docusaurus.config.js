// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'GIZMODO WOODS',
  tagline: 'ギズモード・ジャパンのファンが集うDiscordサーバー',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://gizmodo-woods.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'GIZMODO-WOODS', // Usually your GitHub org/user name.
  projectName: 'gizmodo-woods.github.io', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/GIZMODO-WOODS/gizmodo-woods.github.io/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/GIZMODO-WOODS/gizmodo-woods.github.io/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/gizmodo-woods-social-card.png',
      navbar: {
        title: 'GIZMODO WOODS',
        logo: {
          alt: 'GIZMODO WOODS Logo',
          src: 'img/gizmodo-woods.png',
        },
        items: [
          {
            label: '概要',
            to: 'about-us',
            position: 'left',
          },
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '参加方法/使い方',
          },
          //{to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://discord.gg/gizmodo',
            label: 'Discord',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'このページのコンテンツ',
            items: [
              {
                label: 'GIZMODO WOODSとは',
                to: 'about-us',
              },
              {
                label: '参加方法/使い方',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'GIZMODO WOODS 関連リンク',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/gizmodo',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/GIZMODO-WOODS',
              },
            ],
          },
          {
            title: 'ギズモード・ジャパン 関連リンク',
            items: [
              {
                label: 'ギズモード・ジャパン',
                href: 'https://www.gizmodo.jp',
              },
              {
                label: 'ギズモード・ジャパン Twitter',
                href: 'https://twitter.com/gizmodojapan',
              },
              {
                label: 'ギズモード・ジャパン TikTok',
                href: 'https://www.tiktok.com/@gizmodojapan',
              },
              {
                label: 'ギズモード・ジャパン YouTube',
                href: 'https://www.youtube.com/user/gizmodojapan',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} GIZMODO WOODS. Built with Docusaurus. For more details, visit <a href="about-us" target="_blank">here</a>.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
