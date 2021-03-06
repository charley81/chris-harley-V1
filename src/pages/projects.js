import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import Projects from '../components/Projects'
import SEO from '../components/SEO'

export default function ProjectPage({
  data: {
    allStrapiProjects: { nodes: projects },
  },
}) {
  console.log(projects)
  return (
    <Layout>
      <SEO
        title="Projects"
        description="Projects page for web developer Chris Harley"
      />
      <section>
        <Projects projects={projects} title="All Projects" />
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiProjects {
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
