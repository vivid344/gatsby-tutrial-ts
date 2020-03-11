module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-typescript`,
    {
      resolve: 'gatsby-plugin-postcss',
      options: {
        postCssPlugins: [
          require('tailwindcss'),
          ...process.env.NODE_ENV === 'production'
          ? [require('@fullhuman/postcss-purgecss')({
            content: [
              './src/**/*.tsx',
              './src/**/*.js',
            ],
          defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []  // tailwindで使用されるクラス名を抽出する正規表現。
          })]: []
        ],
      },
    },
  ],
}
