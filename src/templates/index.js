import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CategoryPicker from "../components/categoryPicker"

import { TypographyStyle, GoogleFont } from 'react-typography'
import typography from '../utils/typography'

const IndexPage = ({data}) => {
  return (
    <Layout>
      <SEO title="Home" />
      <CategoryPicker />
    </Layout>
  )
}

export default IndexPage
