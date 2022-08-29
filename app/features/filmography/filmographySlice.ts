import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchFilmography } from './services';
import { FetchFilmographyResponse, FilmographyProps } from './types';

const initialState: FilmographyProps = {
  loading: false,
  error: false,
  data: [],
  currentPage: 1,
  loadMore: true,
};

const filmographySlice = createSlice({
  name: 'filmography',
  initialState,
  reducers: {
    clearFilmography: state => {
      state.data = [];
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchFilmography.pending, (state: FilmographyProps) => {
      if (state.currentPage === 1) {
        state.loading = true;
      } else {
        state.loadMore = true;
      }
    });
    builder.addCase(
      fetchFilmography.fulfilled,
      (
        state: FilmographyProps,
        action: PayloadAction<FetchFilmographyResponse>,
      ) => {
        state.data = state.data.concat(action.payload.results);
        state.loading = false;
        state.loadMore = false;
        state.currentPage = 2;
      },
    );
    builder.addCase(fetchFilmography.rejected, (state: FilmographyProps) => {
      state.loading = false;
      state.error = true;
    });
  },
});

const { reducer } = filmographySlice;
export default reducer;
export { fetchFilmography };
export const { clearFilmography } = filmographySlice.actions;
