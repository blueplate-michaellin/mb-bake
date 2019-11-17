import React from 'react'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'
import Layout from "../components/layout"

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

