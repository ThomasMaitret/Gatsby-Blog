const colors = require('../styles/colors');

module.exports = {
  pathPrefix: '/',
  siteTitle: 'Personal Blog',
  siteLongTitle: 'Personal blog of Thomas Maitret',
  siteUrl: 'https://thomasmaitret-blog.ml/',
  siteLanguage: 'fr',
  siteLogo: '../images/logo-top.svg',
  siteDescription:
    'Welcome to my blog where you can read all my posts about web development !',
  // manifest.json
  manifestName: "Thomas Maitret's personal blog",
  manifestShortName: 'Personal Blog',
  manifestStartUrl: '/',
  manifestBackgroundColor: colors.first,
  manifestThemeColor: colors.firstLight,
  manifestDisplay: 'standalone'
};
