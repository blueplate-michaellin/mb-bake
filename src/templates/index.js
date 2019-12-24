import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import CategoryPicker from "../components/categoryPicker"

export default ({location, data}) => {
  if (location.state !== null && location) {
    if (typeof location.state.category !== 'undefined') {
    console.log('@precat has something', location.state.category[0])
    return (
      <Layout>
        <SEO title="Home" />
            <CategoryPicker prevCat={location.state.category[0]} category={data.allContentfulProduct.distinct}/>
      </Layout>
    )
    } else {
      console.log('@precat has something, then nothing')
      return (
        <Layout>
          <SEO title="Home" />
            <CategoryPicker category={data.allContentfulProduct.distinct}/>
        </Layout>
      )      
    }
  } else {
    console.log('@precat has nothing')
    return (
      <Layout>
        <SEO title="Home" />
          <CategoryPicker category={data.allContentfulProduct.distinct}/>
      </Layout>
    )
  }
}

export const query = graphql`
  query {
    allContentfulProduct {
        distinct(field: category)
    }
  }    
`