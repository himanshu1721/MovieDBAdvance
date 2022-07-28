import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import AppConstants, {API_KEY} from '../../constants/AppConstants';

const initialState = {
  loading: false,
  topRatedMovies: [],
  error: false,
};

const getTopRated = createAsyncThunk('topRated/getTopRated', async () => {
  const result = await axios.get(
    `${AppConstants.BASE_URL}discover/movie?api_key=${API_KEY}&language=en-US&sort_by=vote_count.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=free`,
  );
  return result.data;
});

const topRatedSlice = createSlice({
  name: 'topRated',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getTopRated.pending, state => {
      state.loading = true;
    });
    builder.addCase(getTopRated.fulfilled, (state, action) => {
      state.loading = false;
      state.topRatedMovies = action.payload.results;
    });
    builder.addCase(getTopRated.rejected, state => {
      state.loading = false;
      state.error = true;
    });
  },
});

const {reducer} = topRatedSlice;
export {getTopRated};
export default reducer;
