/* eslint-disable */
import { createSlice } from '@reduxjs/toolkit'

const initialState = { startapp : false}
const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers:  
  {toggleStart: (state) => {state.startapp = !state.startapp}}
});
export const {toggleStart} = globalSlice.actions
export default globalSlice.reducer
