import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  username: '',
  about: '',
  dob: new Date(),
  favoriteGenres: [],
  favoriteMovie: [],
  isDOBAdded: false,
  isAdult: false,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    updateProfile: (state, action) => {
      const { name, username, about, dob, isDOBAdded, isAdult } =
        action.payload;
      state.name = name;
      state.username = username;
      state.about = about;
      state.dob = dob;
      state.isDOBAdded = isDOBAdded;
      state.isAdult = isAdult;
    },
  },
  extraReducers: {},
});

const { reducer } = profileSlice;
export const { updateProfile } = profileSlice.actions;

export default reducer;
