// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;

const config = {
  title: 'GIZMODO WOODS',
  tagline: 'ギズモード・ジャパンのファンが集うDiscordサーバー',
  favicon: 'img/favicon.ico',

  url: 'https://gizmodo-woods.github.io',
  baseUrl: '/',

  organizationName: 'GIZMODO-WOODS',
  projectName: 'gizmodo-woods.github.io',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

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
          path: 'tutorial',
          routeBasePath: 'tutorial',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/GIZMODO-WOODS/gizmodo-woods.github.io/blob/main/',
        },
        blog: {
          showReadingTime: true,
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
          blogSidebarCount: 'ALL',
          postsPerPage: 10,
          blogTitle: 'ブログ',
          blogSidebarTitle: '最近の投稿',
          readingTime: ({content, frontMatter, defaultReadingTime}) =>
            defaultReadingTime({content, options: {wordsPerMinute: 350}}),
          feedOptions: {
            type: 'all',
            title: 'GIZMODO WOODS ブログ',
            description: 'GIZMODO WOODSモデレーターチームのブログ',
            language: 'ja',
            copyright: `Copyright © 2023-${new Date().getFullYear()} GIZMODO WOODS.`,
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        docsDir: "tutorial",
        hashed: true,
        language: ["ja", "en"],
        highlightSearchTermsOnTargetPage: true,
        searchResultLimits: 10,
      },
    ],
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
        "https://bsky.app/profile/gizmodojapan.bsky.social",
      ],
      "foundingDate": "2020-09-11",
    }),
    sitemapPages: [
      { loc: '/', priority: 1.0 },
      { loc: '/about-us', priority: 0.9 },
      { loc: '/tutorial/join', priority: 0.8 },
      { loc: '/tutorial/inquiry/faq', priority: 0.7 },
      { loc: '/blog', priority: 0.6 },
    ],
  },

  

  themeConfig: {
    image: 'img/gizmodo-woods-social-card.webp',
    navbar: {
      title: 'GIZMODO WOODS',
      logo: {
        alt: 'GIZMODO WOODS Logo',
        src: 'img/gizmodo-woods.webp',
        height: '32px',
        width: '32px',
      },
      items: [
        {
          label: 'GIZMODO WOODSとは',
          to: '/about-us',
          position: 'left'
        },
        {
          label: 'チュートリアル',
          to: '/tutorial/join',
          position: 'left',
          items: [
            {
              label: '参加方法',
              to: '/tutorial/join',
            },
            {
              label: 'チャンネル一覧',
              to: '/tutorial/channel-list',
            },
            {
              label: 'フォーラム',
              to: 'tutorial/category/フォーラム',
            },
            {
              label: 'ボイスチャンネル',
              to: 'tutorial/category/ボイスチャンネル',
            },
            {
              label: 'イベント',
              to: 'tutorial/category/イベント',
            },
            {
              label: 'チャンネル表示',
              to: 'tutorial/category/チャンネル表示',
            },
            {
              label: '装飾',
              to: 'tutorial/category/装飾',
            },
            {
              label: 'ロール',
              to: 'tutorial/category/ロール',
            },
            {
              label: 'Bot',
              to: 'tutorial/category/Bot',
            },
            {
              label: 'DM設定',
              to: 'tutorial/category/DM設定',
            },
            {
              label: 'お問い合わせ',
              to: 'tutorial/category/お問い合わせ',
            },
          ],
        },        
        {
          label: 'ブログ',
          to: 'blog',
          position: 'left',
          items: [
            {
              label: 'ブログ',
              to: 'blog',
            },
            {
              label: '著者一覧',
              to: '/blog/authors',
            },
            {
              label: 'タグ一覧',
              to: '/blog/tags',
            },
          ],
        },
        {
          label: 'お問い合わせ',
          to: '/tutorial/inquiry/faq',
          position: 'left',
          items: [
            {
              label: 'FAQ',
              to: '/tutorial/inquiry/faq',
            },
            {
              label: '投稿の通報',
              to: '/tutorial/inquiry/report-message',
            },
            {
              label: 'お問い合わせ',
              to: '/tutorial/inquiry/contact',
            },
          ],
        },
        {
          label: 'サイトマップ',
          to: 'sitemap',
          position: 'left',
        },
        {
          'aria-label': 'Discord',
          href: 'https://discord.gg/gizmodo',
          className: 'navbar-Discord',
          position: 'right',
        },
        {
          'aria-label': 'GitHub',
          href: 'https://github.com/GIZMODO-WOODS',
          className: 'navbar-GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'このサイトのコンテンツ',
          items: [
            {
              label: 'GIZMODO WOODSとは',
              to: '/about-us',
            },
            {
              label: 'チュートリアル',
              to: '/tutorial/join',
            },
            {
              label: 'FAQ',
              to: 'tutorial/inquiry/faq',
            },
            {
              label: 'ブログ',
              to: 'blog',
              position: 'left',
            },
            {
              label: 'サイトマップ',
              to: 'sitemap',
            },
            {
              label: '検索🔍',
              to: 'search',
            },
          ],
        },
        {
          title: 'GIZMODO WOODS',
          items: [
            {
              label: ' ',
              href: 'https://discord.gg/gizmodo',
              className: 'footer-Discord',
            },
            {
              label: ' ',
              href: 'https://github.com/GIZMODO-WOODS',
              className: 'footer-GitHub',
            },
            {
              label: '利用規約',
              href: 'https://gist.github.com/gizmodojapan/a480d658216ab4194e26d49e7de1139d#file-gizmodo_woods_-terms_of_service-md',
            },
            {
              label: 'イベントチェックイン',
              href: 'https://minglue.app/',
            },
            {
              label: 'サービスステータス',
              href: 'https://status.frwi.net/status/gw',
            },
          ],
        },
        {
          title: 'ギズモード・ジャパン',
          items: [
            {
              label: ' ',
              href: 'https://www.gizmodo.jp',
              className: 'GIZMODO',
            },
            {
              label: ' ',
              href: 'https://twitter.com/gizmodojapan',
              className: 'X',
            },
            {
              label: ' ',
              href: 'https://www.tiktok.com/@gizmodojapan',
              className: 'TikTok',
            },
            {
              label: ' ',
              href: 'https://www.youtube.com/user/gizmodojapan',
              className: 'YouTube',
            },
            {
              label: ' ',
              href: 'https://www.threads.net/@gizmodo_japan',
              className: 'Threads',
            },
            {
              label: ' ',
              href: 'https://www.facebook.com/gizmodojp',
              className: 'Facebook',
            },
            {
              label: ' ',
              href: 'https://www.instagram.com/gizmodo_japan',
              className: 'Instagram',
            },
            {
              label: ' ',
              href: 'https://bsky.app/profile/gizmodojapan.bsky.social',
              className: 'Bluesky',
            },
          ],
        },
      ],
      copyright: `Copyright © 2023-${new Date().getFullYear()} GIZMODO WOODS.<br>For more details, visit <a href="/about-us" rel="noopener">about us</a>.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
};

module.exports = config;
