import { createAsyncThunk } from '@reduxjs/toolkit';
import { ActionTypeConstants } from '../../constants';
import { fetchDetailApi, fetchImagesApi } from './Api';
import { FetchDetailProps } from './types';

export const fetchImages = createAsyncThunk(
  ActionTypeConstants.fetchPeopleImages,
  async ({ id }: FetchDetailProps) => {
    const result = await fetchImagesApi(id);
    return result.data;
  },
);

export const fetchDetail = createAsyncThunk(
  ActionTypeConstants.fetchPeopleDetails,
  async ({ id }: FetchDetailProps) => {
    const result = await fetchDetailApi(id);
    return result.data;
  },
);
