import { createAsyncThunk } from '@reduxjs/toolkit';
import ActionTypeConstants from '../../constants/ActionTypeConstants';
import {
  fetchPopularMoviesApi,
  fetchPopularTVApi,
  fetchTrendingApi,
} from './Api';

export const fetchPopular = createAsyncThunk(
  ActionTypeConstants.fetchPopular,
  async ({ page }: { page: number }) => {
    const popular = await fetchPopularMoviesApi(page);
    return popular.data;
  },
);

export const fetchPopularTV = createAsyncThunk(
  ActionTypeConstants.fetchPopularTV,
  async ({ page }: { page: number }) => {
    const result = await fetchPopularTVApi(page);
    return result.data;
  },
);

export const fetchTrending = createAsyncThunk(
  ActionTypeConstants.fetchTrending,
  async ({ page }: { page: number }) => {
    const result = await fetchTrendingApi(page);
    return result.data;
  },
);
