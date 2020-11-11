import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import ReactMarkdown from 'react-markdown'
import { css } from '@emotion/core'

export default function blogTemplate({ data }) {
  const { content } = data.blog
  return (
    <Layout>
      <section
        css={css`
          img {
            width: 15rem;
            height: 15rem;
            margin: 3rem 0;
          }
        `}
      >
        <article>
          <ReactMarkdown>{content}</ReactMarkdown>
        </article>
      </section>
      <Link to="/blog" className="btn center-btn">
        Blog
      </Link>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleBlog($slug: String) {
    blog: strapiBlogs(slug: { eq: $slug }) {
      content
    }
  }
`
