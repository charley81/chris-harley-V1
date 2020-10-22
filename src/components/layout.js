import React from 'react'
import { Global, css } from '@emotion/core'
import { Helmet } from 'react-helmet'
import UseSiteMetadata from '../hooks/use-siteMetadata'
import Header from './header'

const layout = ({ children }) => {
  const { title, description, author } = UseSiteMetadata()

  return (
    <>
      <Global
        styles={css`
          :root {
            --primaryColor: #c60021;
            --secondaryColor: #e3e3e3;
            --lightColor: #f6f6f8;
            --medColor: #333;
            --darkColor: rgb(0, 0, 0);
            --transition: all 0.3s linear;
          }

          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }

          html,
          body {
            margin: 0;
            font-family: 'Raleway', sans-serif;
            line-height: 1.4;
            font-size: 18px;
            background: var(--lightColor);
            color: var(--medColor);
          }

          h1,h2,h3,h4,h5,h6 {
            color: var(--darkColor)
            line-height: 1.1;
          }

          img {
            width: 100%;
          }

          li {
            list-style: none;
            margin-top: 0.25rem;
          }

          a {
            text-decoration: none;
          }
        `}
      />
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name={description} content={description} author={author} />
      </Helmet>
      <Header />
      <main
        css={css`
          margin: 4rem auto;
          max-width: 90vw;
        `}
      >
        {children}
      </main>
      <footer></footer>
    </>
  )
}

export default layout
