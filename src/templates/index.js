import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import CategoryPicker from "../components/categoryPicker"
import Img from "gatsby-image"
import { useCategory } from "../utils/category"


export default ({location, data}) => {
  const category = useCategory()
  return (
    <Layout>
      <SEO title="Home" />
      <div className = "flex-col justify-center items-center mb-20 hidden lg:flex xl:flex"> 
        <Img fixed={data.file.childImageSharp.fixed} />
        <p className="opacity-50 text-center">MB Bake is a home bakery specializes in customized cakes, cupcakes, sourdough bread and other baked goods. 
        We take pride to create the freshest and finest handmade cakes and baked goods with recipes that have been refined over the years to provide the highest quality in taste and appearance.</p>
      </div>
      <CategoryPicker category={category}/>
    </Layout>
  )
}

export const query = graphql`
  query {
    file(relativePath: { eq: "full logo.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 200, height: 150) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
  `
