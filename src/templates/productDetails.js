import React from 'react'
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import Img from "gatsby-image"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const ProductCard = ({data, pageContext}) => {
    const {
        name,
        price,
        image
    } = data.contentfulProduct

    const Bold = ({ children }) => <span className="bold">{children}</span>
    const Text = ({ children }) => <p className="align-center">{children}</p>
    
    const options = {
      renderMark: {
        [MARKS.BOLD]: text => <Bold>{text}</Bold>,
      },
      renderNode: {
        [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
        [BLOCKS.LIST_ITEM]: (node, children) => <Text>{children}</Text>
      },
    }
    
    const output = documentToReactComponents(data.contentfulProduct.description.json, options)

    return (
        <Layout>
            <div className="container my-8 lg:my-32">
                <div className = "lg:flex">
                    <div className="w-full mb-8 lg:w-1/2">
                        <Img sizes={image.sizes} />
                    </div>
                    <div className="lg:ml-8 mx-4">
                        <h1>{name}</h1>
                        <div>${price}</div>
                        {output}
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
            description {
                json
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