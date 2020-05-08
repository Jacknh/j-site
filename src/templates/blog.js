import React from "react"
import { graphql, Link } from "gatsby"
import { css } from "@emotion/core"
import Layout from "../components/layout"
import SEO from "../components/seo"
import backBtn from '../images/back-btn.png'

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <SEO title="Blog" />
      <Link to={"/" + frontmatter.cat}>
        <img
          src={backBtn}
          alt="back"
          css={css`
            width: 36px;
            position: absolute;
            margin-left: -65px;
            cursor: pointer;
            padding-top: 20px;
          `}
        />
      </Link>
      <div css={css`
        padding: 20px;
      `}>
        <h1
          css={css`
            font-size: 38px;
            font-weight: 800;
            margin-bottom: 3px;
          `}
        >
          {frontmatter.title}
        </h1>
        <p
          css={css`
            font-size: 14px;
            margin-bottom: 10px;
          `}
        >
          {frontmatter.date}
        </p>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        cat
      }
    }
  }
`
