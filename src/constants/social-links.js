import React from 'react'
import { css } from '@emotion/core'

import { FaLinkedinIn, FaTwitter, FaGithubAlt } from 'react-icons/fa'

const data = [
  {
    id: 1,
    icon: <FaLinkedinIn className="social-icon" />,
    url: 'https://linkedin.com',
  },
  {
    id: 2,
    icon: <FaTwitter className="social-icon" />,
    url: 'https://twitter.com',
  },
  {
    id: 3,
    icon: <FaGithubAlt className="social-icon" />,
    url: 'https://github.com',
  },
]

const links = data.map(link => (
  <li key={link.id}>
    <a
      href={link.url}
      css={css`
        font-size: 1.25rem;
        color: var(--lightColor);
        transition: var(--transition);
        border-radius: 50%;
        padding: 0.5rem;
        background: var(--primaryColor);
        display: flex;
        justify-content: center;
        align-items: center;
        transition: var(--transition);

        &:hover {
          color: var(--medColor);
          background: transparent;
        }
      `}
    >
      {link.icon}
    </a>
  </li>
))

export default ({ styleClass }) => (
  <ul
    className={styleClass ? styleClass : ''}
    css={css`
      display: flex;
      justify-content: space-between;
      width: 10rem;
      margin-top: 2rem;
    `}
  >
    {links}
  </ul>
)
