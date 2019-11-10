import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import { TypographyStyle, GoogleFont } from 'react-typography'
import typography from '../utils/typography'

const IndexPage = ({data}) => {
  const products = data.allContentfulProduct.edges
  return (
    <Layout>
      <SEO title="Home" />
      <h1 className="text-center">Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      {products.map(({node: product, index}) => (
        <div className="container">
          <p>{product.name}</p>
          <p>{product.description}</p>
          <p>{product.price}</p>
        </div>
      ))}
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export const query = graphql`
query {
  allContentfulProduct {
    edges {
      node {
        category
        description
        name
      }
    }
  }
}
`
export default IndexPage
