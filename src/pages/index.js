import React, { useContext } from "react"
import { Link } from "gatsby"
import { FirebaseContext } from '../services/index'
import { StyledFirebaseAuth } from 'react-firebaseui'; 
import Layout from "../components/layout"
import SEO from "../components/seo"

import { TypographyStyle, GoogleFont } from 'react-typography'
import typography from '../utils/typography'
import Firebase from "../services/firebase"
import { AuthContext } from "../services/authContext"

const IndexPage = () => {
  const Firebase = useContext(FirebaseContext)
  const { authUser } = useContext(AuthContext)

  const signOut = () => {
    Firebase.auth.signOut().then(()=> {
      console.log('sign out success')
    }).catch((error) => {
      console.log('failed')
    })
  }
  console.log(authUser);
  return (
    <Layout>
      <SEO title="Home" />
      {!authUser ?
        <StyledFirebaseAuth
          uiConfig = {Firebase.uiConfig}
          firebaseAuth={Firebase.auth}
        />
        :
        <div>
          <p>You've already logged in</p>
          <button onClick={signOut}>Sign Out</button>
        </div>
      }
    </Layout>
  )
}

export default IndexPage
