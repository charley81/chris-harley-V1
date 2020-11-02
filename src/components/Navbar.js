import React from 'react'
import { FaAlignRight } from 'react-icons/fa'
import PageLinks from '../constants/links'
import { css } from '@emotion/core'
import { Link } from 'gatsby'

export default function Navbar() {
  return (
    <nav
      css={css`
      position: absolute:
      top: 0;
      left: 0;
      width: 100%;
      height: 5rem;
      display: flex;
      align-items: center;
      z-index: 200;
      background: var(--lightColor);

      h1 a {
        color: var(--darkColor);
      }

      span {
        color: var(--primaryColor);
      }

      .nav-center {
        width: 90vw;
        max-width: 1170px;
        margin: 0 auto;
      }

      .nav-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      button {
        font-size: 1.5rem;
        background: transparent;
        border-color: transparent;
        color: var(--primaryColor);
        cursor: pointer;
        transition: var(--transition);

        &:hover {
          color: var(--secondaryColor);
        }
      }

      .nav-links {
        display: none;
      }

      @media (min-width: 768px) {
        button {
          display: none;
        }

        .nav-links {
          display: flex;
          justify-content: flex-end;

          li {
            margin-right: 1.5rem;
          }

          a {
            color: var(--medColor);
            transition: var(--transition);
            padding: 0.5rem 0;

            &:hover {
              color: var(--primaryColor);
            }
          }
        }

        .nav-center {
          display: grid;
          grid-template-columns: auto 1fr;
          align-items: center;
        }
      }
    `}
    >
      <div className="nav-center">
        <div className="nav-header">
          <h1>
            <Link to="/">
              chris<span>Harley</span>
            </Link>
          </h1>
          <button type="button">
            <FaAlignRight />
          </button>
        </div>
        <PageLinks styleClass="nav-links" />
      </div>
    </nav>
  )
}
