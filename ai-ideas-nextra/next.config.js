const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
});

const locales = [
  'en-US',
  // 'id',
  // 'bg',
  // 'es',
  // 'de',
  // 'ja',
  // 'mr',
  // 'pl',
  // 'pt-BR',
  // 'ru',
  // 'vi',
  // 'ur',
  // 'uz',
  // 'bn',
  // 'km',
  // 'zh-CN',
  // 'zh-TW',
  // 'af',
  // 'ar',
  // 'fr',
  // 'el',
  // 'it',
  // 'ko',
  // 'ml',
  // 'fa',
  // 'te',
  // 'th',
  // 'tr',
  // 'uk',
  // 'he',
  // 'hi',
];

module.exports = withNextra({
  i18n: {
    locales: locales,
    defaultLocale: 'en-US',
  },
});
