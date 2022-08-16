import { createAsyncThunk } from '@reduxjs/toolkit';
import ActionTypeConstants from '../../constants/ActionTypeConstants';
import {
  fetchPopularMoviesApi,
  fetchPopularTVApi,
  fetchTrendingApi,
} from './Api';

interface FetchListProps {
  page: number;
  isCurrentUserAdult: boolean;
}

export const fetchPopular = createAsyncThunk(
  ActionTypeConstants.fetchPopular,
  async ({ page, isCurrentUserAdult }: FetchListProps) => {
    const popular = await fetchPopularMoviesApi({ page, isCurrentUserAdult });
    return popular.data;
  },
);

export const fetchPopularTV = createAsyncThunk(
  ActionTypeConstants.fetchPopularTV,
  async ({ page, isCurrentUserAdult }: FetchListProps) => {
    const result = await fetchPopularTVApi({ page, isCurrentUserAdult });
    return result.data;
  },
);

export const fetchTrending = createAsyncThunk(
  ActionTypeConstants.fetchTrending,
  async ({ page, isCurrentUserAdult }: FetchListProps) => {
    const result = await fetchTrendingApi({ page, isCurrentUserAdult });
    return result.data;
  },
);
