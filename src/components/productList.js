import React , { useContext } from "react"
import { store } from '../utils/store.js';
import Img from "gatsby-image"
import { graphql, StaticQuery } from 'gatsby'
import { Link } from "gatsby"

import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const ProductList = ( {data, category} ) => {
    const products = data.allContentfulProduct.edges

    return (
        <>
            {products.map(({node: product, index}) => (
                <div key={product.id}>
                    { category == product.category ?
                        <Link to={`/${product.slug}`}>
                            <div className="w-64 lg:w-56 xl:w-56 mx-2 my-2 rounded-lg overflow-hidden shadow hover:shadow-lg border" style={{height: 350}}>
                                {!!product.image ?
                                    <div className="w-full">
                                        <Img sizes={product.image.sizes} />
                                    </div>
                                :
                                    null
                                }
                                <div className="px-6 py-4">
                                    <h2 className="font-bold text-xl mb-2 pb-0">{product.name}</h2>
                                    {
                                    product.category == 'Cake' ?
                                        null
                                    :
                                        <p>${product.price}</p>
                                    }
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
                id
                category
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