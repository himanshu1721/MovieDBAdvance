import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  myRatingData: [],
  error: false,
};

const ratingSlice = createSlice({
  name: 'rating',
  initialState,
  reducers: {
    getMyRatings: (state, action) => {
      state.myRatingData = action.payload;
    },
  },
});

const { reducer } = ratingSlice;
export const { getMyRatings } = ratingSlice.actions;
export default reducer;
