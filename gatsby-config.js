module.exports = {
  siteMetadata: {
    title: `Costa Codes`,
    description: `A simple, responsive resume using Gatsby and Typescript.`,
    author: `Diogo Costa`,
    profession: 'Software developer',
    email: `dsgmcosta@gmail.com`,
    location: `London, UK`,
    github: `https://github.com/industriousparadigm`,
    linkedin: `https://www.linkedin.com/in/diogosalvinicosta/`,
    medium: `https://medium.com/search?q=gatsby%20js`,
    sections: ['home', 'resume', 'about'],
    homeText: [
      'Hi! My name is Diogo and I come in peace in order to make your life cooler.',
      "This is a second paragraph, where I expand upon the topics briefly mentioned in the first paragraph. For example, by peace I mean that I won't criticize your stack size and such."
    ],
    aboutText: ['', '']
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `costa codes`,
        short_name: `costacodes-v0`,
        start_url: `/`,
        theme_color: `#ffffff`,
        icon: `src/images/diogo-twitter.jpg` // This path is relative to the root of the site.
      }
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `${__dirname}/src/utils/typography.js`
      }
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `4lsduqglmfq4`,
        accessToken: `aAxf6kugQUqN2eJT8zPBnfKwxaMPlM2yyPWZOdXpRNs`
      }
    },
    `gatsby-plugin-typescript`,
    `gatsby-plugin-sass`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
}
