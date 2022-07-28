import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import AppConstants, {API_KEY} from '../../constants/AppConstants';

const initialState = {
  loading: false,
  haveBeenRatedBeforeByMe: false,
  error: false,
  movieDetails: {},
  movieRatingByMe: 0,
};

const fetchMovie = createAsyncThunk(
  'detail/fetchMovie',
  async ({type, movieID}) => {
    const movie = await axios.get(
      `${AppConstants.BASE_URL}${type}/${movieID}?api_key=${API_KEY}&language=en-US`,
    );
    return movie.data;
  },
);

const detailSlice = createSlice({
  name: 'detail',
  initialState,
  reducers: {
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

const {reducer} = detailSlice;
export default reducer;
export const {setHaveBeenRated, setMyRating, setHaveNotBeenRated} =
  detailSlice.actions;
export {fetchMovie};
