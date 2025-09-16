import { createSlice } from '@reduxjs/toolkit'

export interface CaseState {
  data: any
}

const initialState: CaseState = {
    data:[]
}

export const caseSlice = createSlice({
  name: 'case',
  initialState,
  reducers: {
    setData : (state,action) => {
        state.data = action.payload
    }   
  },
})

export const { setData } = caseSlice.actions

export default caseSlice.reducer