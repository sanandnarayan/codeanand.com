import React from "react"
import { Link } from "gatsby"

import Image from "../components/image"
import SEO from "../components/seo"
import Layout from '../components/layout'
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi guys, welcome to my world</h1>
    <p>Check my blog out while i build this page</p>
    <Link to="/blog/">Blog</Link>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
