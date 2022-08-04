import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  movieRatings: [],
  movieRatingsSection: [],
  movieID: 0,
  rating: 0,
};

const ratingSlice = createSlice({
  name: 'rating',
  initialState,
  reducers: {
    getRating: (state, action) => {
      const { movieId, rating } = action.payload;
      const rate = { movieID: movieId, rating: rating };
      state.movieRatings = state.movieRatings.concat(rate);
    },
    addMovieInRatingSection: (state, action) => {
      const { rating } = action.payload;
      const rate = { rating: rating };
      state.movieRatingsSection = state.movieRatingsSection.concat(rate);
    },
  },
});

const { reducer } = ratingSlice;
export default reducer;
export const { getRating, addMovieInRatingSection } = ratingSlice.actions;
