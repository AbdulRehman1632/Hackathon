import { configureStore } from '@reduxjs/toolkit'
import UserReducer from './Features/Reducer.js'


export const store = configureStore({
    reducer: {
        Users:UserReducer,
    },
  })


  export default store;