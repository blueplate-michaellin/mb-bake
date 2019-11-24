/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          facebook
          instagram
          linkedin
        }
      }
    }
  `)

  return (
    <>
      <Header
        facebook={data.site.siteMetadata.facebook}
        instagram={data.site.siteMetadata.instagram}
        linkedin={data.site.siteMetadata.linkedin}
      />
      <div className="my-auto lg:px-4">
        <main className="mt-12 lg:mt-24 max-w-full overflow-x-visible">{children}</main>
        <footer>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
