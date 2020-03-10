import React from "react"
// @ts-ignore
import styles from "./about.module.css"
import Layout from "../components/layout"
import { useSelector } from 'react-redux'
import { RootState } from '../reducers'
import { increase, decrease } from '../features/countSlice'
import { useDispatch } from 'react-redux'

const About = () => {
  const { count } = useSelector((state: RootState) => state.count); // StoreからStateを取得
  const dispatch = useDispatch(); // actionを呼び出すための準備

  const _decrease = () => {
    dispatch(decrease()) // actionを呼び出す
  }

  const _increase = () => {
    dispatch(increase()) // actionを呼び出す
  }

  return (
    <Layout>
      <h1 className={styles.test}>This is About Page.</h1>
      <p>{count}</p>
      <div>
        <button onClick={_decrease}>-</button>
        <button onClick={_increase}>+</button>
      </div>
    </Layout>
  )
}

export default About