import React from "react"
import * as footerStyles from "./footer.module.scss"

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <a href="https://www.youtube.com/watch?v=8t0vNu2fCCM&t=16050s">
        The Great Gatsby Tutorial
      </a>
      <br />
      Created by Isagani Esteron, © 2022
    </footer>
  )
}

export default Footer
