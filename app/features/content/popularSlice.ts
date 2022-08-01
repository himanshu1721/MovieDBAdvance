import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import App from '../../../App';
import AppConstants, {API_KEY} from '../../constants/AppConstants';

const initialState = {
  loading: false,
  popular: [],
  error: false,
  nextPage: 2,
};

const fetchPopular = createAsyncThunk(
  'popular/fetchPopular',
  async ({page}) => {
    const popular = await axios.get(
      `${AppConstants.BASE_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`,
    );
    return popular.data;
  },
);

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

const {reducer} = popularSlice;
export default reducer;
export {fetchPopular};
