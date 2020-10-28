import React from 'react'
import Image from 'gatsby-image'
import { Link } from 'gatsby'
import SocialLinks from '../constants/social-links'
import { graphql, useStaticQuery } from 'gatsby'

const query = graphql`
  {
    file(relativePath: { eq: "profile-pic.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default function Hero() {
  return (
    <div>
      <h2>hero</h2>
    </div>
  )
}
