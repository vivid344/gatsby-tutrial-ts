/* Storeをまとめ、providerで呼び出すための準備をする */
import { combineReducers } from '@reduxjs/toolkit'
import { configureStore } from '@reduxjs/toolkit'
import Store from '../features/countSlice'

// 複数のreducerをまとめる
const rootReducer = combineReducers({
  count: Store
})

//　上記をもとにrootReducerの型定義をする
export type RootState = ReturnType<typeof rootReducer>

// storeを作成する
const store = configureStore({
  reducer: rootReducer
})

export default store