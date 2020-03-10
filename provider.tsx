/* このファイルは */
import React from "react"
import { Provider } from "react-redux"

import createStore from "./src/reducers"

// 作成したページにStoreをつなげる
// @ts-ignore
export default ({ element }) => {
  const store = createStore;
  return <Provider store={store}>{element}</Provider>
}