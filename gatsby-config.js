require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `MB Bake`,
    description: `Home bakery specialized in Customized Birthday Cakes, Baked goods and Sourdough Breads`,
    author: `Bridgette Foo`,
    facebook: `https://www.facebook.com/MB-Bakery-115652463214042/`,
    instagram: `https://www.instagram.com/m.b.bake/`,
    linkedin: `https://www.linkedin.com/company/the-new-luncher/`,
    siteUrl: 'https://www.microbakery.co'
  },

  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-155563975-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
        anonymize: true,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-sitemap',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#171717`,
        theme_color: `#171717`,
        display: `minimal-ui`,
        icon: `src/icons/logo.svg`,
      },
    },
    'gatsby-plugin-tailwindcss',
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-transformer-remark`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
}