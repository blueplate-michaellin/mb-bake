import React from 'react'
import { graphql } from 'gatsby'
import { Link }from 'gatsby'
import Layout from "../components/layout"

const CompanyInfo = ({data}) => {
    const {
        pageName,
        content 
    } = data.contentfulCompanyInfo

    return (
        <Layout>
            <div className="ml-4 mb-4 md:ml-0 lg:ml-0 xl:ml-0">
                <span className="opacity-50"><Link to={`/`}>Main</Link></span><span className="mx-4 opacity-50">></span><span className="font-bold">{pageName}</span>
            </div>
            <div className = "text-center">
                <h1>{name}</h1>
                <div className = "markdown" dangerouslySetInnerHTML={{__html: content.childMarkdownRemark.html}} />
            </div>
        </Layout>
    )

}

export const query = graphql`
    query($slug: String!) {
        contentfulCompanyInfo(slug: {eq: $slug}) {
            id
            pageName
            content {
                childMarkdownRemark {
                    html
                }
            }
        }
    }
`

export default CompanyInfo;