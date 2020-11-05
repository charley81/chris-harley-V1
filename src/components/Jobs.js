import React, { useState } from 'react'
import Title from './Title'
import { FaAlignRight, FaAngleDoubleRight } from 'react-icons/fa'
import { graphql, useStaticQuery, Link } from 'gatsby'
import { css } from '@emotion/core'

const query = graphql`
  {
    allStrapiJobs(sort: { fields: strapiId, order: DESC }) {
      nodes {
        company
        date
        desc {
          id
          name
        }
        strapiId
        position
      }
    }
  }
`

export default function Jobs() {
  const data = useStaticQuery(query)
  const {
    allStrapiJobs: { nodes: jobs },
  } = data
  const [value, setValue] = useState(0)
  const { company, date, desc, position, strapiId } = jobs[value]

  return (
    <section
      css={css`
        .btn-container {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          text-align: left;
          grid-gap: 1rem;
        }
        button {
          background: transparent;
          border: 1px solid var(--primaryColor);
          border-radius: var(--borderRadius);
          outline: transparent;
          color: var(--primaryColor);
          font-size: 1rem;
          cursor: pointer;
          padding: 0.25rem 0;
        }

        .active-btn {
          background: var(--primaryColor);
          color: var(--lightColor);
        }

        .job-info {
          margin: 1rem 0;

          h4 {
            background: var(--secondaryColor);
            color: var(--darkColor);
            margin: 1rem 0;
            display: inline-block;
            padding: 0.5rem;
            border-radius: var(--borderRadius);
          }
        }

        .desc-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin: 1rem 0;
        }

        .job-icon {
          display: inline-block;
          color: var(--primaryColor);
          font-size: 2rem;
        }
      `}
    >
      <Title title="Experience" />
      <div className="job-center">
        <div className="btn-container">
          {jobs.map((item, index) => (
            <button
              key={item.strapId}
              className={index === value && 'active-btn'}
              onClick={() => setValue(index)}
            >
              {item.company}
            </button>
          ))}
        </div>
        <article>
          <div className="job-info">
            <h3>{position}</h3>
            <h4>{company}</h4>
            <p>{date}</p>
          </div>
          {desc.map(item => (
            <div key={item.id} className="desc-item">
              <FaAngleDoubleRight className="job-icon" />
              <p>{item.name}</p>
            </div>
          ))}
        </article>
      </div>
      <Link to="/about" className="btn center-btn">
        more info
      </Link>
    </section>
  )
}
