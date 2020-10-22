import React from 'react'
import { css } from '@emotion/core'
import { Link } from 'gatsby'
import { BiAlignRight } from 'react-icons/bi'
import Menu from './menu'

const Header = () => {
  return (
    <nav
      css={css`
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 5rem;
        display: flex;
        align-items: center;
        z-index: 200;

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

        .nav-links {
          display: none;
        }

        h1 a {
          color: var(--medColor);
        }

        h1 {
          transition: var(--transition);
        }

        h1:hover {
          span {
            color: var(--primaryColor);
          }
        }

        button {
          font-size: 2rem;
          background: transparent;
          border: transparent;
          color: var(--primaryColor);
          cursor: pointer;
          transition: var(--transition);

          &:hover {
            color: var(--secondaryColor);
          }
        }
      `}
    >
      <div className="nav-center">
        <div className="nav-header">
          <h1>
            <Link to="/">
              Chris <span>Harley</span>
            </Link>
          </h1>
          <button>
            <BiAlignRight />
          </button>
        </div>
        <Menu styleClass="nav-links" />
      </div>
    </nav>
  )
}

export default Header
