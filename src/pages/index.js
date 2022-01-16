import React from "react"
import { Link } from "gatsby"

import Image from "../components/image"
import SEO from "../components/seo"
import Layout from "../components/layout"
import { Box } from "theme-ui"
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi guys, welcome to my world</h1>
    <Box>
      <Link to="/blog/" target="_blank">
        Blog
      </Link>
    </Box>
    <Box>
      <Link to="https://twitter.com/codeanand" target="_blank">
        Twitter
      </Link>
    </Box>
    <Box>
      <Link to="https://notes.codeanand.com" target="_blank">
        Notes
      </Link>
    </Box>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
