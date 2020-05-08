import React from "react"
import { css } from "@emotion/core"
import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <SEO title="About" />
    <h1
      css={css`
        margin: 20px;
      `}
    >
      About me
    </h1>
    <p
      css={css`
        padding: 0 20px;
      `}
    >
      I am Jack Zhang, frontend developer. But sometimes I also do something
      about backend with nodejs.
    </p>
    <p
      css={css`
        padding: 0 20px;
      `}
    >
      Apart from work, I like music, I play some guitar, and I like thinking, or
      unintentionally think something.
    </p>
    <p
      css={css`
        padding: 0 20px;
      `}
    >
      Plus, This is temporary, I will update it later.
    </p>
  </Layout>
)

export default About
