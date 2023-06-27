import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'user',
  initialState: {
    auth:false,
    token:''
  },
  reducers: {
    loginSet: (state,action) => {
      state.auth=true
      state.token=action.payload || ''
    },
    logoutSet: state => {
      state.auth=false
      state.token=''
    },
  }
})

export const { loginSet, logoutSet } = authSlice.actions
export default authSlice.reducer