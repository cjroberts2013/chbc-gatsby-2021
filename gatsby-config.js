module.exports = {
  siteMetadata: {
    siteUrl: "https://chbcwharton.gtsb.io",
    title: "College Heights Baptist Church",
    description: "Your go to bee removing service!"
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    'gatsby-plugin-postcss',
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "258223579",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
