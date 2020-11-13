import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const query = graphql`
  {
    site {
      siteMetadata {
        siteTitle: title
        siteDesc: description
        author
        siteUrl
      }
    }
  }
`

export default function SEO({ title, description }) {
  const { site } = useStaticQuery(query)
  const { siteTitle, siteDesc, author, siteUrl } = site.siteMetadata

  return (
    <Helmet title={`${title} | ${siteTitle}`} htmlAttributes={{ lang: 'en' }}>
      <meta name="description" content={description || siteDesc} />
      <meta name="author" content={author} />
      <meta name="site url" content={siteUrl} />
    </Helmet>
  )
}
