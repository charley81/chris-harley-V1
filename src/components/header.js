import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { Link } from 'gatsby'

const NavLink = styled(Link)`
  font-size: 1rem;
  line-height: 1;
  margin: 0 0.5rem 0 0;
  padding: 0.25rem;
  color: var(--medColor);

  &.current-page {
    border-bottom: 2px dotted var(--primaryColor);
    color: var(--primaryColor);
  }

  &:last-of-type {
    margin-right: 0;
  }
`

const Header = () => {
  return (
    <header>
      <NavLink to="/">Chris Harley</NavLink>
      <NavLink to="/" activeClassName="current-page">
        Home
      </NavLink>
      <NavLink to="/about" activeClassName="current-page">
        About
      </NavLink>
      <NavLink to="/projects" activeClassName="current-page">
        Projects
      </NavLink>
      <NavLink to="/blog" activeClassName="current-page">
        Blog
      </NavLink>
      <NavLink to="/contact" activeClassName="current-page">
        Contact
      </NavLink>
    </header>
  )
}

export default Header
