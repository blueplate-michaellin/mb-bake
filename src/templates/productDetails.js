import React from 'react'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ProductCard = ({data, pageContext}) => {
    const {
        name,
        description
    } = data.contentfulProduct

    return (
        <Layout>
            <div>{name}</div>
            <div>{description}</div>
        </Layout>
    )
}

