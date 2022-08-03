import { createSlice } from '@reduxjs/toolkit';
import { getTopRated } from './services';
import { TopRatedProps } from './types';

const initialState: TopRatedProps = {
  loading: false,
  topRatedMovies: [],
  error: false,
};

const topRatedSlice = createSlice({
  name: 'topRated',
  initialState,
  reducers: {},
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

const { reducer } = topRatedSlice;
export default reducer;
