import React from 'react'
import { Link } from 'gatsby'
import SocialLinks from '../constants/social-links'
import { css } from '@emotion/core'

export default function Hero() {
  return (
    <header
      css={css`
        height: 100vh;
        display: flex;
        align-items: center;
        font-size: 1.1rem;

        @media (min-width: 500px) {
          font-size: 1.5rem;
        }
        @media (min-width: 700px) {
          font-size: 2rem;
          .btn {
            font-size: 1.1rem;
          }
        }
        @media (min-width: 1200px) {
          font-size: 2.5rem;
        }

        .btn {
          margin-top: 1rem;
        }
      `}
    >
      <div className="info">
        <h1>Hi I'm Chris</h1>
        <h4>Freelance Web Developer</h4>
        <Link to="/contact" className="btn">
          Contact Me
        </Link>
        <SocialLinks />
      </div>
    </header>
  )
}
