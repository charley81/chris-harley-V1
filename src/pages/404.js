import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'gatsby'
import { css } from '@emotion/core'

export default function FourOhFour() {
  return (
    <Layout>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: center;
          margin-top: 20vh;

          a {
            color: var(--primaryColor);
            transition: var(--transition);

            &:hover {
              color: var(--darkColor);
            }
          }
        `}
      >
        <h1>Page Not Found</h1>
        <Link to="/">Back Home</Link>
      </div>
    </Layout>
  )
}
