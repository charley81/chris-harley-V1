import React from 'react'
import Image from 'gatsby-image'
import { FaGithubSquare, FaShareSquare } from 'react-icons/fa'
import { css } from '@emotion/core'

export default function Project({
  description,
  title,
  stack,
  image,
  github,
  url,
  index,
}) {
  return (
    <article
      css={css`
        display: grid;
        margin-bottom: 4rem;
        border-radius: 0 0 var(--borderRadius) var(--borderRadius);

        &:hover .project-image::after {
          opacity: 0;
        }

        .project-image {
          border-radius: var(--borderRadius) var(--borderRadius) 0 0;
          height: 19rem;
          z-index: 1;

          &::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(
              to bottom right,
              var(--primaryColor),
              #222
            );
            opacity: 0.6;
            transition: var(--transition);
          }
        }

        .project-info {
          padding: 1rem;
          background: var(--secondaryColor);
        }

        .project-number {
          display: inline-block;
          font-size: 1.25rem;
          color: var(--primaryColor);
          margin-bottom: 0.75rem;
        }

        h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }

        p {
          line-height: 2rem;
        }

        .project-stack {
          margin: 1rem 0;

          span {
            display: inline-block;
            background: var(--medColor);
            color: var(--lightColor);
            margin-right: 0.5rem;
            border-radius: var(--borderRadius);
            padding: 0.25rem 0.5rem;
            letter-spacing: 2px;
            font-sie: 0.75rem;
          }
        }

        .project-icon {
          color: var(--primaryColor);
          font-size: 1.25rem;
          margin-right: 0.5rem;
          transition: var(--transition);

          &:hover {
            color: var(--medColor);
          }
        }

        @media screen and (min-width: 768px) {
          .project-image {
            height: 22rem;
          }
        }

        @media screen and (min-width: 992px) {
          grid-template-columns: repeat(12, 1fr);
          align-items: center;

          &:nth-of-type(even) .project-image {
            grid-column: 5 / -1;
            grid-row: 1 / 1;
          }

          &:nth-of-type(even) .project-info {
            grid-column: 2 / span 7;
            grid-row: 1 / 1;
            text-align: left;
          }

          .project-image {
            grid-column: 1 / span 8;
            grid-row: 1 / 1;
            height: 30rem;
            border-radius: var(--radius);
            box-shadow: var(--dark-shadow);
          }

          .project-info {
            border-radius: var(--radius);
            box-shadow: var(--dark-shadow);

            z-index: 1;
            grid-column: 5 /12;
            grid-row: 1 / 1;
          }
        }
      `}
    >
      <Image fluid={image.childImageSharp.fluid} className="project-image" />
      <div className="project-info">
        <span className="project-number">0{index + 1}</span>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="project-stack">
          {stack.map(item => (
            <span key={item.id}>{item.title}</span>
          ))}
        </div>
        <div className="project-links">
          <a href={github}>
            <FaGithubSquare className="project-icon" />
          </a>
          <a href={github}>
            <FaShareSquare className="project-icon" />
          </a>
        </div>
      </div>
    </article>
  )
}
