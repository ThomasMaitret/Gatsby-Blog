const config = require('./src/utils/siteConfig');

module.exports = {
  siteMetadata: {
    title: 'Personal Blog',
    author: 'Thomas Maitret'
  },
  plugins: [
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.siteTitle,
        short_name: config.manifestShortName,
        start_url: config.manifestStartUrl,
        background_color: config.manifestBackgroundColor,
        theme_color: config.manifestThemeColor,
        display: config.manifestDisplay
      }
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `oib51hl6nk0f`,
        accessToken: `6303007156e0a7b8e2016dffcc0da1246b001b5d611c0b8b150efe1bbede1cb6`
      }
    },
    `gatsby-plugin-netlify`,
    `gatsby-plugin-offline`
  ]
};

/*
  {
    resolve: `gatsby-plugin-typography`,
    options: {
      pathToConfigModule: `src/utils/typography.js`
    }
  },
*/
