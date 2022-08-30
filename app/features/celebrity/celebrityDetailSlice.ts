import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Strings } from '../../constants';
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
  name: Strings.celebrity,
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchImages.pending, (state: PeopleDetail) => {
      state.loadingImages = true;
    });
    builder.addCase(
      fetchImages.fulfilled,
      (state: PeopleDetail, action: PayloadAction<FetchImagesResponse>) => {
        state.images = action.payload.profiles;
        state.loadingImages = false;
      },
    );
    builder.addCase(fetchImages.rejected, (state: PeopleDetail) => {
      state.loadingImages = false;
      state.errorImages = true;
    });
    builder.addCase(fetchDetail.pending, (state: PeopleDetail) => {
      state.loadingDetails = true;
    });
    builder.addCase(
      fetchDetail.fulfilled,
      (state: PeopleDetail, action: PayloadAction<FetchDetailsResponse>) => {
        state.details = action.payload;
        state.loadingDetails = false;
      },
    );
    builder.addCase(fetchDetail.rejected, (state: PeopleDetail) => {
      state.loadingDetails = false;
      state.errorDetails = true;
    });
  },
});

const { reducer } = celebrityDetailSlice;
export default reducer;
