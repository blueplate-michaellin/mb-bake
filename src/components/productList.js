import React from 'react'
import Img from "gatsby-image"
import { graphql, StaticQuery } from 'gatsby'
import { Link } from "gatsby"

const ProductList = ( {data, category} ) => {
    const products = data.allContentfulProduct.edges

    return (
        <>
            {products.map(({node: product, index}) => (
                <div className="container flex">
                    { category == product.category ?
                        <Link to={`/${product.slug}`}>
                            <div className="w-64 rounded-lg overflow-hidden shadow hover:shadow-lg border">
                                {!!product.image ?
                                    <div className="w-full">
                                        <Img sizes={product.image.sizes} />
                                    </div>
                                :
                                    null
                                }
                                <div className="px-6 py-4">
                                    <h2 className="font-bold text-xl mb-2">{product.name}</h2>
                                    <p>${product.price}</p>
                                </div>
                            </div>
                        </Link>
                    :
                        null
                    }
                </div>
            ))}
        </>
    )
}

export default props => (
    <StaticQuery
      query={graphql`
        query {
            allContentfulProduct {
            edges {
                node {
                category
                description
                name
                price
                slug
                image {
                    sizes(maxWidth: 254) {
                        ...GatsbyContentfulSizes
                    }
                  }
                }
            }
            }
        }
      `}
      render={(data) =>( <ProductList data={data} {...props}/>)}
    />
)