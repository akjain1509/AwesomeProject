import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  data: [],
  favorites: [],
};

const authSlice = createSlice({
  name: 'userAuth',
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data.push(action.payload);
    },
    toggleFavorite: (state, action) => {
      const index = action.payload;
      const isInFavorites = state.favorites.includes(index);

      if (isInFavorites) {
        state.favorites = state.favorites.filter(item => item !== index);
      } else {
        state.favorites.push(index);
      }
    },
  },
});

export const {setData, toggleFavorite} = authSlice.actions;

export const selectUser = state => state.userAuth;

export default authSlice.reducer;
