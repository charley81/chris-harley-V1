import React from 'react'
import Title from './Title'
import Blog from './blog'
import { Link } from 'gatsby'
import { css } from '@emotion/core'

export default function Blogs({ title, blogs, showLink }) {
  return (
    <section
      css={css`
        .blogs {
          @media screen and (min-width: 576px) {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(368px, 1fr));
            column-gap: 2rem;
          }
        }
      `}
    >
      <Title title={title} name="title" />
      <div className="blogs">
        {blogs.map(blog => (
          <Blog key={blog.id} {...blog} />
        ))}
      </div>
      {showLink && (
        <Link to="/blog" className="btn center-btn">
          Blog
        </Link>
      )}
    </section>
  )
}
