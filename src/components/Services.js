import React from 'react'
import Title from './Title'
import { css } from '@emotion/core'
import services from '../constants/services'

export default function Services() {
  return (
    <div>
      <Title title="Services" />
      {services.map(service => {
        const { id, icon, title, text } = service

        return (
          <article>
            {icon}
            <h4>{title}</h4>
            <p>{text}</p>
          </article>
        )
      })}
    </div>
  )
}
