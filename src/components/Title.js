import React from 'react'
import { css } from '@emotion/core'

export default function Title({ title }) {
  return (
    <div
      css={css`
        text-align: center;
        margin-bottom: 4rem;
      `}
    >
      <h2>{title || 'default title'}</h2>
      <div className="underline"></div>
    </div>
  )
}
