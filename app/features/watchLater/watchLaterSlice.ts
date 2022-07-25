import {createSlice} from '@reduxjs/toolkit';

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
      const {movie, id} = action.payload;
      state.watchLater = state.watchLater.concat(movie);
      state.watchLaterID = state.watchLaterID.concat(id);
    },
    removeFromWatchLater: (state, action) => {
      const {movie, id} = action.payload;
      const result = state.watchLater.filter(obj => {
        return obj?.id !== id;
      });
      const newWatchLaterID = state.watchLaterID.filter(obj => {
        return obj !== id;
      });
      state.watchLater = result;
      state.watchLaterID = newWatchLaterID;
    },
  },
});

const {reducer} = watchLaterSlice;

export const {saveToWatchLater, removeFromWatchLater} = watchLaterSlice.actions;
export default reducer;
