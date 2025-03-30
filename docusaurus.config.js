// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'GIZMODO WOODS',
  tagline: 'ギズモード・ジャパンのファンが集うDiscordサーバー',
  favicon: 'img/favicon.ico',

  url: 'https://gizmodo-woods.github.io',
  baseUrl: '/',

  organizationName: 'GIZMODO-WOODS',
  projectName: 'gizmodo-woods.github.io',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',

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
          editUrl: 'https://github.com/GIZMODO-WOODS/gizmodo-woods.github.io/blob/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/GIZMODO-WOODS/gizmodo-woods.github.io/blob/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themes: [
    require.resolve("@easyops-cn/docusaurus-search-local"),
  ],

  customFields: {
    jsonLd: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "url": "https://gizmodo-woods.github.io",
      "name": "GIZMODO WOODS",
      "description": "ギズモード・ジャパンのファンが集うDiscordサーバー",
      "logo": "https://github.com/GIZMODO-WOODS/gizmodo-woods.github.io/blob/main/static/img/gizmodo-woods.webp",
      "sameAs": [
        "https://discord.gg/gizmodo",
        "https://github.com/GIZMODO-WOODS",
        "https://www.gizmodo.jp",
        "https://twitter.com/gizmodojapan",
        "https://www.tiktok.com/@gizmodojapan",
        "https://www.youtube.com/user/gizmodojapan",
        "https://www.threads.net/@gizmodo_japan",
        "https://www.facebook.com/gizmodojp",
        "https://www.instagram.com/gizmodo_japan",
        "https://bsky.app/profile/gizmodojapan.bsky.social"
      ],
      "foundingDate": "2020-09-11"
    })
  },

  themeConfig: {
    image: 'img/gizmodo-woods-social-card.webp',
    navbar: {
      title: 'GIZMODO WOODS',
      logo: {
        alt: 'GIZMODO WOODS Logo',
        src: 'img/gizmodo-woods.webp',
        height: '32px',
        width: 'auto',
      },
      items: [
        { label: '概要', to: '/about-us', position: 'left' },
        { type: 'docSidebar', sidebarId: 'tutorialSidebar', position: 'left', label: '参加方法/使い方' },
        { to: 'docs/tutorial-inquiry/qa-faq', position: 'left', label: 'FAQ' },
        { href: 'https://discord.gg/gizmodo', label: 'Discord', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'このサイトのコンテンツ',
          items: [
            { label: 'GIZMODO WOODSとは', to: '/about-us' },
            { label: '参加方法/使い方', to: '/docs/intro' },
            { label: 'FAQ', to: 'docs/tutorial-inquiry/qa-faq' },
          ],
        },
        {
          title: 'GIZMODO WOODS 関連リンク',
          items: [
            { label: 'Discord', href: 'https://discord.gg/gizmodo' },
            { label: 'GitHub', href: 'https://github.com/GIZMODO-WOODS' },
            { label: '利用規約', href: 'https://gist.github.com/gizmodojapan/a480d658216ab4194e26d49e7de1139d#file-gizmodo_woods_-terms_of_service-md' },
          ],
        },
        {
          title: 'ギズモード・ジャパン 関連リンク',
          items: [
            { label: 'ホームページ', href: 'https://www.gizmodo.jp' },
            { label: 'X（旧Twitter）', href: 'https://twitter.com/gizmodojapan' },
            { label: 'TikTok', href: 'https://www.tiktok.com/@gizmodojapan' },
            { label: 'YouTube', href: 'https://www.youtube.com/user/gizmodojapan' },
            { label: 'Threads', href: 'https://www.threads.net/@gizmodo_japan' },
            { label: 'Facebook', href: 'https://www.facebook.com/gizmodojp' },
            { label: 'Instagram', href: 'https://www.instagram.com/gizmodo_japan' },
            { label: 'Bluesky', href: 'https://bsky.app/profile/gizmodojapan.bsky.social' },
          ],
        },
      ],
      copyright: `Copyright © 2023-${new Date().getFullYear()} GIZMODO WOODS. For more details, visit <a href="/about-us" rel="noopener">about us</a>.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
};

module.exports = config;
