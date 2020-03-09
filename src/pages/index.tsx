import React from "react"
import Layout from '../components/layout'

const Test = () => {
  let a: number = 10;
  return (
    <div>{a}</div>
  )
}

const IndexPage = () => (
  <Layout>
    <Test/>
  </Layout>
)

export default IndexPage
