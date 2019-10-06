import React, { useContext } from "react"
import { Link } from "gatsby"
import { FirebaseContext } from '../services/index'
import firebase from 'firebase';
import { StyledFirebaseAuth } from 'react-firebaseui'; 
import Layout from "../components/layout"
import SEO from "../components/seo"

import { TypographyStyle, GoogleFont } from 'react-typography'
import typography from '../utils/typography'
import Firebase from "../services/firebase"

const IndexPage = () => {
  const Firebase = useContext(FirebaseContext)
  return (
    <Layout>
      <SEO title="Home" />
      <StyledFirebaseAuth
        uiConfig = {Firebase.uiConfig}
        firebaseAuth={Firebase.auth}
      />
    </Layout>
  )
}

export default IndexPage
