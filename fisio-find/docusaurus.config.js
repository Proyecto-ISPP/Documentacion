// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';
// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Fisio Find - Documentación",
  tagline: "Documentación de la organización Fisio Find",
  favicon: "img/fisiofind_favicon.png",

  // Set the production url of your site here
  url: "https://your-docusaurus-site.example.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "fisiofind", // Usually your repo name.

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          remarkPlugins: [require("remark-math")],
          rehypePlugins: [require("rehype-katex")],
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
          remarkPlugins: [require("remark-math")],
          rehypePlugins: [require("rehype-katex")],
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],


  // Add the search plugin configuration
  plugins: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        // Optional: specify options here
        hashed: true,
        language: ["en"],
        indexDocs: true,
        indexBlog: true,
        docsRouteBasePath: '/docs',
        blogRouteBasePath: '/blog',
        searchResultLimits: 8,
        searchBarPosition: 'auto',
        searchBarShortcutHint: true,
        highlightSearchTermsOnTargetPage: true,
        // Add these options to improve search quality
        removeDefaultStopWordFilter: true,
        removeDefaultStemmer: true,

      }
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "Fisio Find",
        logo: {
          alt: "My Site Logo",
          src: ".img/Logo_FisioFind_Verde_sin_fondo.PNG",
        },
        items: [
          {
            href: "/#importantDocuments",
            position: "left",
            label: "Documentos relevantes",
          },
          {
            href: "/#teams",
            position: "left",
            label: "Equipo",
          },
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Docs",
          },
          {
            href: "https://github.com/Proyecto-ISPP/FISIOFIND",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Inicio",
                to: "/docs/inicio",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Instagram",
                href: "https://www.instagram.com/fisiofindapp/",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Landing Page",
                to: "https://fisiofind.netlify.app",
              },
              {
                label: "GitHub",
                href: "https://github.com/Proyecto-ISPP/FISIOFIND",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Fisio Find, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
