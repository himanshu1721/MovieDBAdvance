import { createSlice } from '@reduxjs/toolkit';
import { fetchPopularTV } from './services';
import { PopularTVData } from './types';

const initialState: PopularTVData = {
  loading: false,
  popularTV: [],
  error: false,
  nextPage: 2,
};

const popularTVSlice = createSlice({
  name: 'popularTV',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchPopularTV.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchPopularTV.fulfilled, (state, action) => {
      state.nextPage += 1;
      state.loading = false;
      state.popularTV = state.popularTV.concat(action.payload.results);
    });
    builder.addCase(fetchPopularTV.rejected, state => {
      state.loading = false;
      state.error = true;
    });
  },
});

const { reducer } = popularTVSlice;
export default reducer;
export { fetchPopularTV };
