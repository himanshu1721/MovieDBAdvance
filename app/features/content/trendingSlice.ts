import { createSlice } from '@reduxjs/toolkit';
import { fetchTrending } from './services';
import { TrendingData } from './types';

const initialState: TrendingData = {
  loading: false,
  error: false,
  trending: [],
  nextPage: 2,
};

const trendingSlice = createSlice({
  name: 'trending',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchTrending.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchTrending.fulfilled, (state, action) => {
      state.loading = false;
      state.trending = state.trending.concat(action.payload.results);
      state.nextPage = state.nextPage + 1;
    });
    builder.addCase(fetchTrending.rejected, state => {
      state.error = true;
    });
  },
});

const { reducer } = trendingSlice;
export { fetchTrending };
export default reducer;
