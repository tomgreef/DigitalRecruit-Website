import * as React from "react"
import type { HeadFC } from "gatsby"
import Layout from "../components/Layout"
import { FC } from "react"

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const Home: FC = () => {
  return (
    <Layout>
      <main style={pageStyles}>
        <h1>Digital Recruit</h1>
      </main>
    </Layout>
  )
}

export default Home

export const Head: HeadFC = () => <title>Home - DigitalRecruit</title>
