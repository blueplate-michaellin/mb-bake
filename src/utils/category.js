import { useStaticQuery, graphql } from "gatsby"

export const useCategory = () => {
    const category = useStaticQuery(graphql`
        query {
            allContentfulProduct {
                distinct(field: category)
            }
        }    
    `)
  return category.allContentfulProduct.distinct
}

