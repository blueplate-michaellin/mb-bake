import React from 'react'
import { graphql } from 'gatsby'
import { Link }from 'gatsby'
import Layout from "../components/layout"
import Img from "gatsby-image"

const ProductCard = ({data, pageContext}) => {
    const {
        name,
        price,
        image,
        details
    } = data.contentfulProduct

    return (
        <Layout>
            <div className="container my-8 lg:-mt-4">
                <div className="ml-4 mb-4 md:ml-0 lg:ml-0 xl:ml-0">
                    <span className="opacity-50"><Link to={`/`}>Main</Link></span><span className="mx-4 opacity-50">></span><span className="font-bold">{name}</span>
                </div>
                <div className = "lg:flex">
                    <div className="w-full mb-8 lg:w-1/2">
                        <Img sizes={image.sizes} />
                    </div>
                    <div className="lg:ml-8 mx-4">
                        <h1>{name}</h1>
                        <div dangerouslySetInnerHTML={{__html: details.childMarkdownRemark.html}} />
                        <div>${price}</div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export const query = graphql` 
    query($slug: String!) {
        contentfulProduct(slug: {eq: $slug}) {
            category
            name
            price
            details {
                childMarkdownRemark {
                    html
                }
            }
            image {
                sizes(maxWidth: 254) {
                    ...GatsbyContentfulSizes
                }
            }
        }
    }
`

export default ProductCard;