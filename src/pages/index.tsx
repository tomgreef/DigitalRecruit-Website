import * as React from "react"
import type { HeadFC } from "gatsby"

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <img src="https://cdn.logo.com/hotlink-ok/logo-social.png"></img>
      <h1>Digital Recruit</h1>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home - DigitalRecruit</title>
