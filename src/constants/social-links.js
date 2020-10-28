import React from 'react'

import { FaLinkedin, FaTwitterSquare, FaGithubSquare } from 'react-icons/fa'

const data = [
  {
    id: 1,
    icon: <FaLinkedin className="social-icon" />,
    url: 'https://linkedin.com',
  },
  {
    id: 1,
    icon: <FaTwitterSquare className="social-icon" />,
    url: 'https://twitter.com',
  },
  {
    id: 1,
    icon: <FaGithubSquare className="social-icon" />,
    url: 'https://github.com',
  },
]

const links = data.map(link => (
  <li key={link.id}>
    <a href={link.url}>{link.icon}</a>
  </li>
))

export default ({ styleClass }) => (
  <ul className={styleClass ? styleClass : ''}>{links}</ul>
)
