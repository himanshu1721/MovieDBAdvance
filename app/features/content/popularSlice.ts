import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  popular: [],
  error: false,
  nextPage: 2,
  currentMedia: 'Movie',
};

const fetchPopular = createAsyncThunk(
  'popular/fetchPopular',
  async ({mediaType = 'movie', page}) => {
    const popular = await axios.get(
      `https://api.themoviedb.org/3/${mediaType}/popular?api_key=75f81ae108c32ef6e09c4adf44096089&language=en-US&page=${page}`,
    );
    return popular.data;
  },
);

const fetchPopularTV = createAsyncThunk(
  'popular/fetchPopularTV',
  async ({mediaType, page}) => {
    const popular = await axios.get(
      `https://api.themoviedb.org/3/${mediaType}/popular?api_key=75f81ae108c32ef6e09c4adf44096089&language=en-US&page=${page}`,
    );
    return popular.data;
  },
);

const popularSlice = createSlice({
  name: 'popular',
  initialState,
  reducers: {
    changePopularMedia: (state, action) => {
      state.popular = [];
      state.currentMedia = action.payload;
      state.nextPage = 2;
    },
  },
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

    builder.addCase(fetchPopularTV.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchPopularTV.fulfilled, (state, action) => {
      state.nextPage += 1;
      state.loading = false;
      state.popular = state.popular.concat(action.payload.results);
    });
    builder.addCase(fetchPopularTV.rejected, state => {
      state.loading = false;
      state.error = true;
    });
  },
});

const {reducer} = popularSlice;
export const {changePopularMedia} = popularSlice.actions;
export default reducer;
export {fetchPopular, fetchPopularTV};
