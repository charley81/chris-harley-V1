import React, { useState } from 'react'
import { Global, css } from '@emotion/core'
import Navbar from './Navbar'
import Footer from './Footer'
import Sidebar from './Sidebar'

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

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
            --borderRadius: 3px;
            --light-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
            --dark-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
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
            line-height: 1.5;
            font-size: 18px;
            background: var(--lightColor);
            color: var(--medColor);
            letter-spacing: 2px;
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

          /* Utility Classes */
          .btn {
            background: var(--primaryColor);
            color: var(--lightColor);
            padding: 0.375rem 1rem;
            display: inline-block;
            transition: var(--transition);
            font-size: 0.875rem;
            border: 2px solid transparent;
            cursor: pointer;
            box-shadow: 0 1px 3px rgba(0,0,0,0.2);
            border-radius: var(--borderRadius);

            &:hover {
              background: transparent;
              border-color: var(--primaryColor);
              color: var(--darkColor);
            }
          }

          .center-btn {
            display: block;
            width: 12rem;
            text-align: center;
            margin: 0 auto;
            margin-top: 3rem;
          }

          .underline {
          width: 10rem;
          height: 0.25rem;
          background: var(--primaryColor);
          margin: 0.5rem auto 1rem;
        }
        `}
      />
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <main
        css={css`
          margin: 0 auto;
          max-width: 90vw;
          width: 1200px;
        `}
      >
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout
