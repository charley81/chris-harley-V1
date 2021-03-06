import React from 'react'
import Layout from '../components/Layout'
import Title from '../components/Title'
import { css } from '@emotion/core'
import SEO from '../components/SEO'

const contact = () => {
  return (
    <Layout>
      <SEO
        title="Contact"
        description="Contact page for web developer Chris Harley"
      />
      <section
        css={css`
          display: flex;
          height: 60vh;
          justify-content: center;
          align-items: center;
          text-align: center;

          h3 {
            font-size: 1.5rem;
          }

          article {
            width: 100%;
            max-width: 700px;
            background: var(--secondaryColor);
            padding: 1rem;
            border-radius: var(--borderRadius);
          }

          input,
          textarea {
            display: block;
            width: 100%;
            margin: 1rem 0;
            padding: 0.5rem;
            border-radius: var(--borderRadius);
            border: transparent;
            background: transparent;
            border-bottom: 1px solid var(--darkColor);
          }

          button {
            width: 100%;
            margin-top: 2rem;
          }
        `}
      >
        <article>
          <Title title="Get In Touch" />
          <form name="contact" method="POST" data-netlify="true">
            <div className="form-group">
              <input
                type="text"
                placeholder="name"
                name="name"
                className="form-control"
              />
              <input
                type="email"
                placeholder="email"
                className="form-control"
                name="email"
              />
              <textarea
                rows="5"
                placeholder="message"
                className="form-control"
                name="message"
              ></textarea>
              <button type="submit" className="btn">
                Submit
              </button>
            </div>
          </form>
        </article>
      </section>
    </Layout>
  )
}

export default contact
