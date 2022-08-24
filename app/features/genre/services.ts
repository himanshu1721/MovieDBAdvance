import { createAsyncThunk } from '@reduxjs/toolkit';
import { ActionTypeConstants } from '../../constants';
import { fetchPopularGenreApi, fetchTopRatedGenreApi } from './Api';
import { GenreID } from './types';

export const fetchPopularGenre = createAsyncThunk(
  ActionTypeConstants.fetchPopularGenre,
  async ({ id }: GenreID) => {
    const result = await fetchPopularGenreApi(id);
    return result.data;
  },
);

export const fetchTopRatedGenre = createAsyncThunk(
  ActionTypeConstants.fetchTopRatedGenre,
  async ({ id }: GenreID) => {
    const result = await fetchTopRatedGenreApi(id);
    return result.data;
  },
);
