import React from 'react'
import SocialLinks from '../constants/social-links'
import { css } from '@emotion/core'

export default function Footer() {
  return (
    <footer
      css={css`
        text-align: center;
        padding: 1rem;
        margin-top: 10rem;

        ul {
          margin: auto;
          padding: 1rem 0;
        }
      `}
    >
      <SocialLinks />
      <h4>
        &copy; {new Date().getFullYear()}
        <span> Chris Harley</span> All rights reserved
      </h4>
    </footer>
  )
}
