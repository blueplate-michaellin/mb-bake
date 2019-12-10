const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const loadProducts = new Promise((resolve, reject) => {
    graphql(`
    {
      allContentfulProduct {
        edges {
            node {
              slug
            }
        }
      }
    }
    `).then(result => {
      const products = result.data.allContentfulProduct.edges

      // Create main home page
      createPage({
        path: `/`,
        component: path.resolve(`./src/templates/index.js`),
      })

      // Create an individual card
      products.forEach((edge, i) => {
        createPage({
          path: `${edge.node.slug}/`,
          component: path.resolve(`./src/templates/productDetails.js`),
          context: {
            slug: edge.node.slug
          }
        })
      })
      resolve()
    })
  })

  const loadCompanyInfo = new Promise ((resolve, reject) => {
    graphql(`
      {
        allContentfulCompanyInfo {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
      const companyInfo = result.data.allContentfulCompanyInfo.edges
      // Create an individual card
      companyInfo.forEach((edge, i) => {
        createPage({
          path: `${edge.node.slug}/`,
          component: path.resolve(`./src/templates/companyInfo.js`),
          context: {
            slug: edge.node.slug
          }
        })
      })
      resolve()
    })
  })


  return Promise.all([loadProducts, loadCompanyInfo])
}
