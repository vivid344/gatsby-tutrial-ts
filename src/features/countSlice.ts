/* Storeの変更に関わる部分、Actionの定義をするために用いる */
import { createSlice } from '@reduxjs/toolkit'

// 型定義
interface IState {
  count: number
}

// 初期Stateの設定
const initialState: IState = { count: 0 };

// actionに紐づくreducerの動きを定義
const countSlice = createSlice({
  name: 'counter', // このmoduleの名前を定義
  initialState, // 初期Stateを設定
  reducers: { // 各actionでどのような動きをするか
    increase: (state) => {
      state.count ++; // returnではなく、Stateを書き換えることで反映される
    },
    decrease: (state) => {
      state.count --;
    },
  }
})

export const { // 上記で作成したmoduleをもとに呼び出すActionを定義
 increase, decrease
} = countSlice.actions

export default countSlice.reducer