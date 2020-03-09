import React from "react"
import styles from "./about.module.css"
import Layout from "../components/layout"

const About = () => {

  return (
    <Layout>
      <h1 className={styles.test}>This is About Page.</h1>
      <p>My name is Dog!</p>
    </Layout>
  )
}

export default About