import { createSlice } from '@reduxjs/toolkit';
import { fetchPopular } from './services';
import { PopularData } from './types';

const initialState: PopularData = {
  loading: false,
  popular: [],
  error: false,
  nextPage: 2,
};

const popularSlice = createSlice({
  name: 'popular',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchPopular.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchPopular.fulfilled, (state, action) => {
      state.nextPage += 1;
      state.loading = false;
      state.popular = state.popular.concat(action.payload.results);
    });
    builder.addCase(fetchPopular.rejected, state => {
      state.loading = false;
      state.error = true;
    });
  },
});

const { reducer } = popularSlice;
export default reducer;
export { fetchPopular };
