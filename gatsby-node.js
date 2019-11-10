const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const loadProducts = new Promise((resolve, reject) => {
    graphql(`
    {
        allContentfulProduct {
            edges {
              node {
                id
                category
                contentful_id
                createdAt
                description
                name
                node_locale
                updatedAt
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
        // Posts display in descending order

        const prev = i === 0 ? null : products[i - 1].node
        const next = i === products.length - 1 ? null : products[i + 1].node
        createPage({
          path: `${edge.node.slug}/`,
          component: path.resolve(`./src/templates/productDetails.js`),
          context: {
            prev,
            next,
            i
          }
        })
      })
      resolve()
    })
  })


  return Promise.all([loadProducts])
}
