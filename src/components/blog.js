import React from 'react'
import { Link } from 'gatsby'
import Image from 'gatsby-image'
import { css } from '@emotion/core'

export default function blog({
  id,
  title,
  image,
  slug,
  description,
  date,
  category,
}) {
  return (
    <Link
      to={`/blogs/${slug}`}
      key={id}
      css={css`
        display: block;
        margin-bottom: 2rem;
        border-radius: var(--borderRadius);
        box-shadow: var(--light-shadow);
        transition: var(--transition);
        color: var(--medColor);

        &:hover {
          box-shadow: var(--dark-shadow);
          transform: scale(1.02);
        }

        h4 {
          color: var(--darkColor);
        }

        article {
          height: 100%;
          display: grid;
          grid-template-rows: auto 1fr;
        }

        .blog-card {
          padding: 1.5rem 1rem;
          background: var(--secondaryColor);

          p {
            margin: 1rem 0;
          }
        }

        .blog-image {
          height: 15rem;
          border-radius: var(--borderRadius) var(--borderRadius) 0 0;
        }

        .blog-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;

          p:first-of-type {
            background: var(--primaryColor);
            color: var(--lightColor);
            padding: 0.25rem 0.5rem;
            border-radius: borderRadius;
            font-size: 0.85rem;
          }
        }

        @media screen and (min-width: 576px) {
          .blog-image {
            height: 17.5rem;
          }
        }

        @media screen and (min-width: 850px) {
          .blog-image {
            height: 13.75rem;
          }
        }
      `}
    >
      <article>
        <Image fluid={image.childImageSharp.fluid} className="blog-image" />
        <div className="blog-card">
          <h4>{title}</h4>
          <p>{description}</p>
          <div className="blog-footer">
            <p>{category}</p>
            <p>{date}</p>
          </div>
        </div>
      </article>
    </Link>
  )
}
