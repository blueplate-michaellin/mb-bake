import React, { useContext } from 'react'
import { graphql } from 'gatsby'
import { navigate } from "gatsby"
import Layout from "../components/layout"
import Breadcrumb from "../components/breadcrumb"
import Img from "gatsby-image"
import { store } from '../utils/store.js';

const ProductCard = ({data}) => {
    const {
        name,
        price,
        image,
        details,
        category
    } = data.contentfulProduct
    
    const text = "Hi! I am interested in " + name;

    return (
        <Layout>
            <div className="container mb-8 lg:-mt-4">
                <div className="ml-4 mb-4 md:ml-0 lg:ml-0 xl:ml-0">
                    <Breadcrumb category={category} name={name}/>
                </div>
                <div className = "lg:flex">
                    <div className="w-full mb-8 lg:w-1/2">
                        <Img sizes={image.sizes} />
                    </div>
                    <div className="lg:ml-8 mx-4">
                        <h1>{name}</h1>
                        <div dangerouslySetInnerHTML={{__html: details.childMarkdownRemark.html}} />
                        {
                            category == 'Cake' ?
                            <div>Price varies based on requirements. Please enquire.</div>
                            :
                            <div className="font-bold text-xl">${price}</div>
                        }
                        <div className="mt-8">
                            <a href={"https://api.whatsapp.com/send?phone=6598269922&text=" + text } target="_blank">
                                <button className="rounded-full bg-mb-green opacity-75 hover:shadow-lg hover:opacity-100 p-4 flex">
                                    <span className="pr-2">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M18.403 5.63303C17.5714 4.79591 16.5819 4.13214 15.4919 3.68018C14.4019 3.22821 13.233 2.99703 12.053 3.00003C7.105 3.00003 3.077 7.02703 3.075 11.977C3.075 13.559 3.488 15.103 4.273 16.465L3 21.116L7.759 19.867C9.07539 20.5836 10.5502 20.9594 12.049 20.96H12.053C17 20.96 21.028 16.933 21.03 11.983C21.0334 10.8035 20.803 9.63502 20.3521 8.54509C19.9012 7.45516 19.2387 6.4654 18.403 5.63303V5.63303ZM12.053 19.445H12.05C10.7135 19.4452 9.40163 19.0856 8.252 18.404L7.98 18.242L5.156 18.983L5.909 16.23L5.732 15.948C4.98479 14.7585 4.58923 13.3818 4.591 11.977C4.593 7.86303 7.94 4.51603 12.056 4.51603C13.0363 4.51385 14.0072 4.70611 14.9127 5.08168C15.8181 5.45725 16.6401 6.00867 17.331 6.70403C18.0256 7.39607 18.5762 8.21892 18.9509 9.12503C19.3256 10.0311 19.517 11.0025 19.514 11.983C19.512 16.097 16.165 19.445 12.053 19.445ZM16.146 13.856C15.921 13.743 14.819 13.201 14.613 13.126C14.408 13.051 14.259 13.014 14.109 13.238C13.959 13.462 13.529 13.967 13.398 14.117C13.267 14.267 13.136 14.285 12.912 14.173C12.688 14.061 11.965 13.824 11.108 13.06C10.441 12.465 9.991 11.731 9.86 11.506C9.729 11.281 9.846 11.16 9.959 11.048C10.06 10.948 10.183 10.786 10.295 10.655C10.407 10.524 10.444 10.431 10.519 10.281C10.594 10.131 10.557 10 10.5 9.88803C10.444 9.77503 9.995 8.67103 9.808 8.22203C9.627 7.78703 9.442 7.84503 9.304 7.83903C9.16108 7.83318 9.01804 7.83052 8.875 7.83103C8.76126 7.83393 8.64934 7.86029 8.54626 7.90848C8.44318 7.95666 8.35117 8.02562 8.276 8.11103C8.07 8.33603 7.491 8.87803 7.491 9.98203C7.491 11.086 8.295 12.153 8.407 12.303C8.519 12.453 9.989 14.718 12.239 15.69C12.775 15.921 13.193 16.059 13.518 16.163C14.055 16.334 14.544 16.309 14.931 16.252C15.362 16.188 16.258 15.71 16.445 15.186C16.632 14.662 16.632 14.213 16.576 14.119C16.52 14.025 16.369 13.968 16.146 13.856" fill="black"/>
                                        </svg>
                                    </span>
                                    {
                                        category == 'Cake' ?
                                        <span>Enquire via Whatsapp</span>
                                        :
                                        <span>Order via Whatsapp</span>
                                    }
                                </button>
                            </a>
                        </div>
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
                sizes(maxWidth: 512) {
                    ...GatsbyContentfulSizes
                }
            }
        }
    }
`

export default ProductCard;