module.exports = {
  siteMetadata: {
    title: 'Chris Harley',
    description: 'Freelance Web Developer',
    author: 'Chris Harley',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-emotion`,
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Raleway', 'sans-serif'],
        },
      },
    },
  ],
}
