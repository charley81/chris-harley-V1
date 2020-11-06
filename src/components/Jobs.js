import React, { useState } from 'react'
import Title from './Title'
import { FaAngleDoubleRight } from 'react-icons/fa'
import { graphql, useStaticQuery, Link } from 'gatsby'
import { css } from '@emotion/core'

const query = graphql`
  {
    allStrapiJobs(sort: { fields: strapiId, order: DESC }) {
      nodes {
        company
        date
        strapiId
        position
        desc {
          id
          name
        }
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
        .jobs-container {
          @media (min-width: 992px) {
            display: grid;
            grid-template-columns: 200px 1fr;
            align-items: start;
          }
        }

        .btn-container {
          text-align: center;

          @media (min-width: 992px) {
            display: flex;
            flex-direction: column;
            height: 100%;
            justify-content: center;
          }
        }

        button {
          border: none;
          color: var(--primaryColor);
          background: transparent;
          margin: 0 0.5rem;
          outline: transparent;
          font-size: 0.75rem;
          text-align: left;

          @media (min-width: 992px) {
            margin-bottom: 1rem;
            font-size: 1.025rem;
            padding-left: 0.25rem;
          }
        }

        .active-btn {
          box-shadow: 0 2px var(--medColor);

          @media (min-width: 992px) {
            box-shadow: -2px 0 var(--medColor);
          }
        }

        .job-info {
          margin: 1rem 0;

          @media (min-width: 992px) {
            margin: 0;
          }
        }

        .desc-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin: 0.5rem 0;
        }

        .job-icon {
          font-size: 1rem;
          color: var(--primaryColor);
        }
      `}
    >
      <Title title="Experience" name="title" />
      <div className="jobs-container">
        <div className="btn-container">
          {jobs.map((item, index) => (
            <button
              key={item.strapiId}
              className={`${index === value && 'active-btn'}`}
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
