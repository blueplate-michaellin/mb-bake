import React from 'react'
import { graphql } from 'gatsby'
import Layout from "../components/layout"

const CompanyInfo = ({data}) => {
    const {
        name,
        content 
    } = data.contentfulCompanyInfo

    return (
        <Layout>
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
            content {
                childMarkdownRemark {
                    html
                }
            }
        }
    }
`

export default CompanyInfo;