import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import AppConstants, {API_KEY} from '../../constants/AppConstants';

const initialState = {
  loading: false,
  error: false,
  trending: [],
  nextPage: 2,
  currentMedia: 'Today',
};

const fetchTrending = createAsyncThunk(
  'trending/fetchTrending',
  async ({span = 'day', page}) => {
    const popular = await axios.get(
      `${AppConstants.BASE_URL}trending/movie/${span}?api_key=${API_KEY}&language=en-US&page=${page}`,
    );
    return popular.data;
  },
);

const trendingSlice = createSlice({
  name: 'trending',
  initialState,
  reducers: {
    changeTrendingMedia: (state, action) => {
      state.currentMedia = action.payload;
      state.nextPage = 2;
    },
  },
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

const {reducer} = trendingSlice;
export const {changeTrendingMedia} = trendingSlice.actions;
export {fetchTrending};
export default reducer;
