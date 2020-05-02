import React from "react"
import { graphql } from "gatsby"
import { css } from "@emotion/core"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PostLink from "../components/post-link"

export default function Template({
  path,
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { allMarkdownRemark } = data // data.markdownRemark holds your post data
  const { edges } = allMarkdownRemark

  const Posts = edges
    .filter(
      edge =>
        !!edge.node.frontmatter.date &&
        edge.node.frontmatter.cat === path.substring(1)
    ) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)
  return (
    <Layout>
      <SEO title="Blog List" />
      {Posts.length > 0 ? (
        <div css={css`
          padding-top: 20px;
        `}>{Posts}</div>
      ) : (
        <div>Waiting for the first post comes out...</div>
      )}
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 150)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            cat
          }
        }
      }
    }
  }
`
