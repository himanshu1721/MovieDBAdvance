import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchPopularGenre } from './services';
import { GenrePopular, GenrePopularResponsePayload } from './types';

const initialState: GenrePopular = {
  loading: false,
  data: [],
  error: false,
};

const genrePopularSlice = createSlice({
  name: 'genre',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchPopularGenre.pending, (state: GenrePopular) => {
      state.loading = true;
    });
    builder.addCase(
      fetchPopularGenre.fulfilled,
      (
        state: GenrePopular,
        action: PayloadAction<GenrePopularResponsePayload>,
      ) => {
        state.loading = false;
        state.data = action.payload.results;
      },
    );
    builder.addCase(fetchPopularGenre.rejected, (state: GenrePopular) => {
      state.error = true;
      state.loading = false;
    });
  },
});

const { reducer } = genrePopularSlice;
export default reducer;
export { fetchPopularGenre };
