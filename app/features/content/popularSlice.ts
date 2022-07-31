import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import App from '../../../App';
import AppConstants, {API_KEY} from '../../constants/AppConstants';

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
      `${AppConstants.BASE_URL}${mediaType}/popular?api_key=${API_KEY}&language=en-US&page=${page}`,
    );
    return popular.data;
  },
);

interface FetchPopularTVProps {
  mediaType: string;
  page: number;
}

const fetchPopularTV = createAsyncThunk(
  'popular/fetchPopularTV',
  async ({mediaType, page}: FetchPopularTVProps) => {
    const popular = await axios.get(
      `${AppConstants.BASE_URL}${mediaType}/popular?api_key=${API_KEY}&language=en-US&page=${page}`,
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
