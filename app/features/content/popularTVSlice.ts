import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import AppConstants, {API_KEY} from '../../constants/AppConstants';

const initialState = {
  loading: false,
  popularTV: [],
  error: false,
  nextPage: 2,
};

const fetchPopularTV = createAsyncThunk(
  'popularTV/fetchPopularTV',
  async ({page}) => {
    const popularTV = await axios.get(
      `${AppConstants.BASE_URL}tv/popular?api_key=${API_KEY}&language=en-US&page=${page}`,
    );
    return popularTV.data;
  },
);

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

const {reducer} = popularTVSlice;
export default reducer;
export {fetchPopularTV};
