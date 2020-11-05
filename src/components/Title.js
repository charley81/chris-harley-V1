import React from 'react'
import { css } from '@emotion/core'

export default function Title({ title, name }) {
  return (
    <div
      css={css`
        text-align: center;
        margin-bottom: 5rem;

        .title {
          margin-top: 10rem;
        }
      `}
    >
      <h2 className={name ? 'title' : ''}>{title || 'default title'}</h2>
      <div className="underline"></div>
    </div>
  )
}
