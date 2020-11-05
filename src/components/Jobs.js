import React from 'react'
import Title from './Title'
import { FaAngleDoubleRight } from 'react-icons/fa'
import { graphql, useStaticQuery, Link } from 'gatsby'

const query = graphql`
  {
    allStrapiJobs(sort: { fields: strapiId, order: DESC }) {
      nodes {
        company
        date
        desc {
          id
          name
        }
        strapiId
      }
    }
  }
`

export default function Jobs() {
  return (
    <div>
      <h3>Jobs Component</h3>
    </div>
  )
}
