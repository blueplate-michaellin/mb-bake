import React, { useContext } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { AuthContext } from "../services/authContext"


const SecondPage = () => {
  const { authUser } = useContext(AuthContext);
  console.log( authUser);
  return (
    <Layout>
      <SEO title="Page two" />
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      {authUser?<p>{authUser.uid}</p>:null}
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}
export default SecondPage
