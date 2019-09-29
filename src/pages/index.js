import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import SignIn from '../components/signIn';
import GoogleIcon from '../components/Icons/Google';

import { TypographyStyle, GoogleFont } from 'react-typography'
import typography from '../utils/typography'

const IndexPage = ({isAuthed, signIn, signOut}) => (
  <Layout>
    <SEO title="Home" />
    <h1 className="text-center">Hi people</h1>
    <SignIn
        onClick={() => (isAuthed? SignOut() : SignIn('google'))}
        icon={isAuthed? null : <GoogleIcon />}
        text={isAuthed?'Sign Out': 'Sign in with google'}
      />
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
