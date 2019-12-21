import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CategoryPicker from "../components/categoryPicker"


const IndexPage = ({data}) => {
  return (
    <Layout>
      <SEO title="Home" />
      <CategoryPicker />
    </Layout>
  )
}

export default IndexPage
