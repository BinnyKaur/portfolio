module.exports = {
  siteMetadata: {
    title: `Binny Kaur`,
    shortTitle: `Binny Kaur`,
    description: `Hey, I'm Binny Kaur from India. I am a business analyst and love to use data to get more insight helping the businessess to grow. And always ready to learn new things`,
    author: `@binny-kaur`,
    siteUrl: 'https://binny-kaur.netlify.app',
  },
  plugins: [
    `gatsby-plugin-top-layout`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Binny Kaur`,
        short_name: `Diogo Correia`,
        start_url: `/`,
        background_color: `#1b1b1b`,
        theme_color: `#1b1b1b`,
        display: `standalone`,
        icon: `src/images/profile-fullres-cropped.jpeg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    // To learn more, visit: https://gatsby.dev/offline // this (optional) plugin enables Progressive Web App + Offline functionality
    `gatsby-plugin-offline`,
    {
      resolve: 'gatsby-plugin-material-ui',
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://binny-kaur.netlify.app',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Roboto\:300,400,500`, `Nunito`],
        display: 'swap',
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          '/.well-known/*': ['Access-Control-Allow-Origin: *'],
        },
      },
    },
  ],
};
