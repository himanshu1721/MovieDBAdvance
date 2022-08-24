import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchTopRatedGenre } from './services';
import { GenrePopular, GenrePopularResponsePayload } from './types';

const initialState: GenrePopular = {
  loading: false,
  data: [],
  error: false,
};

const genreTopRatedSlice = createSlice({
  name: 'genre',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchTopRatedGenre.pending, state => {
      state.loading = true;
    });
    builder.addCase(
      fetchTopRatedGenre.fulfilled,
      (state, action: PayloadAction<GenrePopularResponsePayload>) => {
        state.data = action.payload.results;
        state.loading = false;
      },
    );
    builder.addCase(fetchTopRatedGenre.rejected, state => {
      state.error = true;
      state.loading = false;
    });
  },
});

const { reducer } = genreTopRatedSlice;
export default reducer;
export { fetchTopRatedGenre };
