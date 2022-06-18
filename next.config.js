module.exports = {
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  images: {
    domains: ['s3-alpha-sig.figma.com'],
  },
  reactStrictMode: true,
  env: {
    FIGMA_KEY: process.env.FIGMA_KEY,
  }
};