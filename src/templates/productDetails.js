import React from 'react'
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import Img from "gatsby-image"

const ProductCard = ({data, pageContext}) => {
    const {
        name,
        description,
        slug,
        price,
        image
    } = data.contentfulProduct

    return (
        <Layout>
            <Img sizes={image.sizes} />
            <div>{name}</div>
            <div>{description}</div>
            <div>{price}</div>
        </Layout>
    )
}

export const query = graphql` 
    query($slug: String!) {
        contentfulProduct(slug: {eq: $slug}) {
            category
            name
            slug
            price
            description
            image {
                sizes(maxWidth: 254) {
                    ...GatsbyContentfulSizes
                }
            }
        }
    }
`

export default ProductCard;