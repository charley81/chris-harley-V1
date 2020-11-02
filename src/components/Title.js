import React from 'react'
import { css } from '@emotion/core'

export default function Title({ title }) {
  return (
    <div
      css={css`
        text-align: center;
        margin-bottom: 4rem;

        .underline {
          width: 10rem;
          height: 0.25rem;
          margin-bottom: 1.25rem;
          background: var(--primaryColor);
          margin: 0 auto;
        }
      `}
    >
      <h2>{title || 'default title'}</h2>
      <div className="underline"></div>
    </div>
  )
}
