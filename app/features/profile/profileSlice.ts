import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  username: '',
  about: '',
  favoriteGenres: [],
  favoriteMovie: [],
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    updateProfile: (state, action) => {
      const { name, username, about } = action.payload;
      state.name = name;
      state.username = username;
      state.about = about;
    },
  },
  extraReducers: {},
});

const { reducer } = profileSlice;
export const { updateProfile } = profileSlice.actions;

export default reducer;
