import React from "react"
import * as footerStyles from "./footer.module.scss"
import { graphql, useStaticQuery } from "gatsby"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return (
    <footer className={footerStyles.footer}>
      <a href="https://www.youtube.com/watch?v=8t0vNu2fCCM&t=16050s">
        The Great Gatsby Tutorial
      </a>
      <br />
      Created by {data.site.siteMetadata.author}, © 2022
    </footer>
  )
}

export default Footer
