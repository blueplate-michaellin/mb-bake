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
            <h1>{name}</h1>
            <div dangerouslySetInnerHTML={{__html: content.childMarkdownRemark.html}} />
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