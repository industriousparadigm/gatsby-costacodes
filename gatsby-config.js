module.exports = {
  siteMetadata: {
    title: `Diogo's website`,
    description: `My developer's page, using Gatsby with Markdown and Typescript.`,
    author: `Diogo Costa`,
    profession: 'Software developer',
    email: `dsgmcosta@gmail.com`,
    location: `London, UK`,
    github: `https://github.com/industriousparadigm`,
    linkedin: `https://www.linkedin.com/in/diogosalvinicosta/`,
    medium: `https://medium.com/search?q=gatsby%20js`,
    menuItems: [
      {
        name: 'about',
        path: '/',
      },
      // {
      //   name: 'resume',
      //   path: '/resume',
      // },
    ],
    homeText: [
      'Hello! Thank you for visiting.',
      'Every day, I think about how to make software better and then type some code to achieve that goal.',
      'I do this mainly with Trinny London as part of a growing dev team. Then I spend time learning and having fun with side projects (like this one!) whenever I can.',
    ],
    resumeSections: [
      'Bio',
      'Programming tools',
      'Education',
      'Languages',
      'Career',
      'Projects',
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet-async`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-sources`,
        path: `${__dirname}/src/markdown-sources`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-typescript',
            options: {
              prettierOptions: {
                semi: false,
                singleQuote: false,
              },
            },
          },
        ],
      },
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
        icon: `src/images/diogo-twitter.jpg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `${__dirname}/src/utils/typography.js`,
      },
    },
    `gatsby-plugin-typescript`,
    `gatsby-plugin-sass`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
