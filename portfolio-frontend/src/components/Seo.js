import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

export const query = graphql`
  {
    site {
      siteMetadata {
        author
        siteDesc: description
        siteTitle: title
      }
    }
  }
`

const SEO = ({ title, description }) => {
  const { site } = useStaticQuery(query)
  const { siteDesc, siteTitle, author } = site.siteMetadata
  return (
    <Helmet htmlAttributes={{ lang: "en" }} title={`${title} | ${siteTitle}`}>
      <meta
        name="description"
        content={description || siteDesc}
        author={author}
      />
    </Helmet>
  )
}

export default SEO
