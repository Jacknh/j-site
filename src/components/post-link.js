import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"

const PostLink = ({ post }) => (
  <div
    css={css`
      margin-top: 0px;
    `}
  >
    <Link
      to={post.frontmatter.path}
      css={css`
        text-decoration: none;
      `}
    >
      <h1
        css={css`
          margin-bottom: 8px;
          font-weight: 800;
          font-size: 34px;
          color: rebeccapurple;
        `}
      >
        {post.frontmatter.title}
      </h1>
    </Link>
    <span
      css={css`
        font-weight: 400;
        font-size: 14px;
      `}
    >
      {post.frontmatter.date}
    </span>
    <p>{post.excerpt}</p>
  </div>
)

export default PostLink
