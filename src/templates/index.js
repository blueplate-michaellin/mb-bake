import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import CategoryPicker from "../components/categoryPicker"

export default ({location, data}) => {

  return (
    <Layout>
      <SEO title="Home" />
          <CategoryPicker category={data.allContentfulProduct.distinct}/>
    </Layout>
  )
}

export const query = graphql`
  query {
    allContentfulProduct {
        distinct(field: category)
    }
  }    
`