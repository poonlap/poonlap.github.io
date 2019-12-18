require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    // Used for the title template on pages other than the index site
    siteTitle: `PLV`,
    // Default title of the page
    siteTitleAlt: `Just a blog - Poonlap V.`,
    // Can be used for e.g. JSONLD
    siteHeadline: `Just a blog - by Poonlap V.`,
    // Will be used to generate absolute URLs for og:image etc.
    siteUrl: `https://poonlap.github.io`,
    // Used for SEO
    siteDescription: `A blog, stories written by Poonlap V.`,
    // Will be set on the <html /> tag
    siteLanguage: `th`,
    // Used for og:image and must be placed inside the `static` folder
    siteImage: `/banner.jpg`,
    // Twitter Handle
    author: `@poonlapv`,
    // Links displayed in the header on the right side
    externalLinks: [
      {
        name: `Github`,
        url: `https://github.com/poonlap` 
      },
      {
        name: `Twitter`,
        url: `https://twitter.com/poonlapv`
      },
      {
        name: `Instagram`,
        url: `https://www.instagram.com/poonlapv/`
      },
      {
        name: `Facebook`,
        url: `https://facebook.com/poonlapv/`
      }

    ],
    tagsPath: `/tags`,
    blogPath: `/blog`,
    basePath: `/`,
    showLineNumbers: true,
    // Navigation links
    navigation: [
      {
        title: `Blog`,
        slug: `/blog`
      }
    ]
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `minimal-blog - @lekoarts/gatsby-theme-minimal-blog`,
        short_name: `minimal-blog`,
        description: `Typography driven, feature-rich blogging theme with minimal aesthetics. Includes tags/categories support and extensive features for code blocks such as live preview, line numbers, and code highlighting.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    // `gatsby-plugin-webpack-bundle-analyser-v2`,
  ],
}
