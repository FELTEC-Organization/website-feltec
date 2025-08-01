/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.feltecsolutions.com.br',
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  changefreq: 'monthly',
  priority: 1.0,
  sitemapSize: 7000,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
};