import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const AboutPage = () => {
  return (
    <Layout>
      <h1>About Me</h1>
      <p>I am a full stack developer.</p>
      <Link to="/contact">Go to Contact Page.</Link>
    </Layout>
  )
}

export default AboutPage
