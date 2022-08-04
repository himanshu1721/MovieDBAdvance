import { createSlice } from '@reduxjs/toolkit';
import { fetchMovie } from './services';
import { MediaType } from './types';

const initialState: MediaType = {
  loading: false,
  haveBeenRatedBeforeByMe: false,
  error: false,
  movieDetails: { id: 0 },
  movieRatingByMe: 0,
  movieRating: 0,
  movieRatingByPeople: 0,
};

const detailSlice = createSlice({
  name: 'detail',
  initialState,
  reducers: {
    setMovieRating: (state, action) => {
      state.movieRating = action.payload;
    },
    setMovieRatingByPeople: (state, action) => {
      state.movieRatingByPeople = action.payload;
    },
    setHaveBeenRated: state => {
      state.haveBeenRatedBeforeByMe = true;
    },
    setHaveNotBeenRated: state => {
      state.haveBeenRatedBeforeByMe = false;
    },
    setMyRating: (state, action) => {
      state.movieRatingByMe = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchMovie.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchMovie.fulfilled, (state, action) => {
      state.loading = false;
      state.movieDetails = action.payload;
      state.haveBeenRatedBeforeByMe = false;
    });
    builder.addCase(fetchMovie.rejected, state => {
      state.error = true;
    });
  },
});

const { reducer } = detailSlice;
export default reducer;
export const {
  setMovieRating,
  setMovieRatingByPeople,
  setHaveBeenRated,
  setMyRating,
  setHaveNotBeenRated,
} = detailSlice.actions;
export { fetchMovie };
