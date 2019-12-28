import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import CategoryPicker from "../components/categoryPicker"
import { useCategory } from "../utils/category"


export default ({location}) => {
  const category = useCategory()
  return (
    <Layout>
      <SEO title="Home" />
      <CategoryPicker category={category}/>
    </Layout>
  )
}
