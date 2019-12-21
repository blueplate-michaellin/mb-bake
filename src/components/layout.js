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
import Footer from "./footer"
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

    const messenger = () => {
        var options = {
            facebook: "115652463214042", // Facebook page ID
            whatsapp: "+6598269922", // WhatsApp number
            call_to_action: "Message us now for any enquries!", // Call to action
            button_color: "#283F3F", // Color of button
            position: "right", // Position may be 'right' or 'left'
            order: "facebook,whatsapp", // Order of buttons
        };
        if (typeof(window) !== "undefined") {
          var proto = document.location.protocol, host = "getbutton.io", url = proto + "//static." + host;
          var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = url + '/widget-send-button/js/init.js';
          s.onload = function () { WhWidgetSendButton.init(host, proto, options); };
          var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
        }
    };

  return (
    <>
      <Header
        facebook={data.site.siteMetadata.facebook}
        linkedin={data.site.siteMetadata.linkedin}
        instagram={data.site.siteMetadata.instagram}
      />
      <div className="container mx-auto min-h-screen">
        <main className="pt-12 lg:py-24 overflow-x-visible block">{children}</main>
      </div>
      <Footer 
          facebook={data.site.siteMetadata.facebook}
          instagram={data.site.siteMetadata.instagram}
          linkedin={data.site.siteMetadata.linkedin}
        />
      {messenger()}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
