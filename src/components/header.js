import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { css } from "@emotion/core"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.05rem 1.0875rem`,
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <h1 style={{ margin: 0, alignSelf: "center" }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <div
        css={css`
          display: flex;
          color: #fff;
          align-self: center;
        `}
      >
        <h3
          css={css`
            align-self: center;
            margin-bottom: 0;
            margin-right: 10px;
          `}
        >
          Home
        </h3>
        <h3
          css={css`
            align-self: center;
            margin-bottom: 0;
          `}
        >
          About
        </h3>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
