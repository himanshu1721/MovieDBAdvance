import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import {create} from 'react-test-renderer';

const initialState = {
  loading: false,
  topRatedMovies: [],
  error: false,
};

const getTopRated = createAsyncThunk('topRated/getTopRated', async () => {
  const result = await axios.get(
    'https://api.themoviedb.org/3/discover/movie?api_key=75f81ae108c32ef6e09c4adf44096089&language=en-US&sort_by=vote_count.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=free',
  );
  return result.data;
});

const topRatedSlice = createSlice({
  name: 'topRated',
  initialState,
  extraReducers: builder => {
    builder.addCase(getTopRated.pending, state => {
      state.loading = true;
    });
    builder.addCase(getTopRated.fulfilled, (state, action) => {
      state.loading = false;
      state.topRatedMovies = action.payload.results;
    });
    builder.addCase(getTopRated.rejected, state => {
      state.loading = false;
      state.error = true;
    });
  },
});

const {reducer} = topRatedSlice;
export {getTopRated};
export default reducer;
