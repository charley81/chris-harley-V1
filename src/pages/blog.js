import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import Blogs from '../components/Blogs'
import SEO from '../components/SEO'

export default function blog({
  data: {
    allStrapiBlogs: { nodes: blogs },
  },
}) {
  return (
    <Layout>
      <SEO
        title="Blog"
        description="Blog page for web developer Chris Harley"
      />
      <Blogs blogs={blogs} title="Blog" />
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiBlogs {
      nodes {
        title
        id
        slug
        content
        description
        date(formatString: "MMMM Do YYYY")
        category
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
