import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  data: [],
};

const authSlice = createSlice({
  name: 'userAuth',
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data.push(action.payload);
    },
  },
});

export const {setData} = authSlice.actions;

export const selectUser = state => state.userAuth;

export default authSlice.reducer;
