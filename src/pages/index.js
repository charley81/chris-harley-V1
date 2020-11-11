import React from 'react'
import { graphql } from 'gatsby'
import Hero from '../components/Hero'
import Jobs from '../components/Jobs'
import Layout from '../components/Layout'
import Services from '../components/Services'
import Projects from '../components/Projects'
import Blogs from '../components/Blogs'

export default function Home({ data }) {
  const {
    allStrapiProjects: { nodes: projects },
    allStrapiBlogs: { nodes: blogs },
  } = data

  return (
    <Layout>
      <Hero />
      <Services />
      <Jobs />
      <Projects projects={projects} title="Featured Projects" showLink={true} />
      <Blogs blogs={blogs} title="Blog" showLink={true} />
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiProjects(filter: { featured: { eq: true } }) {
      nodes {
        description
        github
        id
        title
        url
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stack {
          id
          title
        }
      }
    }
    allStrapiBlogs(sort: { fields: date, order: DESC }, limit: 3) {
      nodes {
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
