// @ts-check

/** @type {import('@node-core/doc-kit').DocKitConfig} */
const config = {
  // Project identity
  title: 'webpack',
  description:
    'webpack is a module bundler. Its main purpose is to bundle ' +
    'JavaScript files for usage in a browser.',

  // Output directory — must match doc-kit build output
  outDir: 'out',

  // Base URL for deployed docs
  baseUrl: 'https://webpack.js.org',

  // webpack brand theme
  theme: {
    primaryColor: '#2196F3',
    backgroundColor: '#1a1a1a',
    surfaceColor: '#2b2b2b',
    textColor: '#ece8e1',
    linkColor: '#8dd6f9',
    codeBackgroundColor: '#2b2b2b',
    fontFamily:
      'Geist, -apple-system, BlinkMacSystemFont, "Segoe UI", ' +
      'Roboto, Oxygen, Ubuntu, Cantarell, sans-serif',
    monoFontFamily:
      '"Geist Mono", "JetBrains Mono", "Fira Code", Consolas, monospace',
  },

  // webpack logo
  logo: {
    src: 'https://webpack.js.org/icon-square-small.9e8aff7a67a5dd20.svg',
    alt: 'webpack',
    href: 'https://webpack.js.org',
  },

  // Navigation structure matching the existing pages/v5.x layout
  navigation: [
    {
      title: 'API',
      items: [
        { title: 'Overview', path: '/' },
        { title: 'Compiler', path: '/Compiler' },
        { title: 'Compilation', path: '/Compilation' },
        { title: 'Configuration', path: '/Configuration' },
        { title: 'Stats', path: '/Stats' },
      ],
    },
    {
      title: 'Plugins',
      items: [
        { title: 'BannerPlugin', path: '/BannerPlugin' },
        { title: 'DefinePlugin', path: '/DefinePlugin' },
        { title: 'ProgressPlugin', path: '/ProgressPlugin' },
        { title: 'ProvidePlugin', path: '/ProvidePlugin' },
      ],
    },
  ],

  // Footer
  footer: {
    copyright:
      'Copyright © OpenJS Foundation and webpack contributors. ' +
      'All rights reserved.',
    links: [
      { title: 'webpack.js.org', href: 'https://webpack.js.org' },
      {
        title: 'GitHub',
        href: 'https://github.com/webpack/webpack',
      },
      { title: 'OpenJS Foundation', href: 'https://openjsf.org' },
      {
        title: 'Discord',
        href: 'https://discord.com/invite/webpack',
      },
    ],
  },
};

export default config;