import React from 'react'
import Title from './Title'
import Blog from './blog'
import { Link } from 'gatsby'
import { css } from '@emotion/core'

export default function Blogs({ title, blogs, showLink }) {
  return (
    <section>
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
