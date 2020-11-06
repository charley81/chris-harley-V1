import React from 'react'
import { graphql } from 'gatsby'
import Hero from '../components/Hero'
import Jobs from '../components/Jobs'
import Layout from '../components/Layout'
import Services from '../components/Services'
import Projects from '../components/Projects'

export default function Home({ data }) {
  const {
    allStrapiProjects: { nodes: projects },
  } = data

  return (
    <Layout>
      <Hero />
      <Services />
      <Jobs />
      <Projects projects={projects} title="Featured Projects" showLink={true} />
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
  }
`
