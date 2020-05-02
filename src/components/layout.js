import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { css } from "@emotion/core"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main
        css={css`
          min-height: calc(100vh - 121px);
          max-width: 760px;
          margin: 0 auto;
        `}
      >
        {children}
      </main>
      <footer
        css={css`
          background: #222831;
          height: 50px;
          color: #fff;
          font-size: 14px;
          text-align: center;
          padding-top: 10px;
        `}
      >
        © {new Date().getFullYear()}, Built by Jack Zhang,
        {`  `}
        <a
          target='_blank'
          href="https://github.com/Jacknh"
          css={css`
            color: rgba(29, 161, 242, 1);
          `}
        >
          Github
        </a>
        {` , `}
        <a
          target='_blank'
          href="https://twitter.com/Jacknh418"
          css={css`
            color: rgba(29, 161, 242, 1);
          `}
        >
          Twitter
        </a>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
