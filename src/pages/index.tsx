import React from "react"
import Layout from '../components/layout'
import { useSelector } from "react-redux"
import { RootState } from "../reducers"


const Test = () => {
  const { count } = useSelector((state: RootState) => state.count)
  return (
    <div>{count}</div>
  )
}

const IndexPage = () => {
  return (
    <Layout>
      <Test/>
    </Layout>
  )
}

export default IndexPage
