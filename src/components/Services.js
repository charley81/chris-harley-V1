import React from 'react'
import Title from './Title'
import { css } from '@emotion/core'
import services from '../constants/services'

export default function Services() {
  return (
    <div
      css={css`
        .items {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          grid-gap: 1rem;
        }

        article {
          background: var(--secondaryColor);
          padding: 1rem;
          text-align: center;
          border-radius: var(--borderRadius);
          transition: var(--transition);

          &:hover {
            background: var(--primaryColor);
            color: var(--darkColor);

            .underline {
              background: var(--darkColor);
            }
          }
        }

        .icon {
          font-size: 2rem;
        }

        h3 {
          margin-top: 1rem;
        }
      `}
    >
      <Title title="Services" />
      <div className="items">
        {services.map(service => {
          const { id, icon, title, text } = service

          return (
            <article key={id}>
              {icon}
              <h3>{title}</h3>
              <div className="underline"></div>
              <p>{text}</p>
            </article>
          )
        })}
      </div>
    </div>
  )
}
