import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  error: false,
  watchLater: [],
  watchLaterID: [],
};

const watchLaterSlice = createSlice({
  name: 'watchLater',
  initialState,
  reducers: {
    saveToWatchLater: (state, action) => {
      state.watchLater = action.payload;
    },
  },
});

const { reducer } = watchLaterSlice;

export const { saveToWatchLater } = watchLaterSlice.actions;
export default reducer;
