import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchDetail, fetchImages } from './services';
import {
  FetchDetailsResponse,
  FetchImagesResponse,
  PeopleDetail,
} from './types';

const initialState: PeopleDetail = {
  loadingImages: false,
  loadingDetails: false,
  images: [],
  details: {},
  errorImages: false,
  errorDetails: false,
};

const celebrityDetailSlice = createSlice({
  name: 'celebrity',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchImages.pending, state => {
      state.loadingImages = true;
    });
    builder.addCase(
      fetchImages.fulfilled,
      (state, action: PayloadAction<FetchImagesResponse>) => {
        state.images = action.payload.profiles;
        state.loadingImages = false;
      },
    );
    builder.addCase(fetchImages.rejected, state => {
      state.loadingImages = false;
      state.errorImages = true;
    });
    builder.addCase(fetchDetail.pending, state => {
      state.loadingDetails = true;
    });
    builder.addCase(
      fetchDetail.fulfilled,
      (state, action: PayloadAction<FetchDetailsResponse>) => {
        console.log('1', action.payload);
        state.details = action.payload;
        state.loadingDetails = false;
      },
    );
    builder.addCase(fetchDetail.rejected, state => {
      state.loadingDetails = false;
      state.errorDetails = true;
    });
  },
});

const { reducer } = celebrityDetailSlice;
export { fetchImages, fetchDetail };
export default reducer;
