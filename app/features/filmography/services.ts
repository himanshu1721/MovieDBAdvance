import { createAsyncThunk } from '@reduxjs/toolkit';
import { ActionTypeConstants } from '../../constants';
import { fetchFilmographyApi } from './Api';
import { FetchFilmographyProps } from './types';

export const fetchFilmography = createAsyncThunk(
  ActionTypeConstants.fetchFilmography,
  async ({ id, page }: FetchFilmographyProps) => {
    const result = await fetchFilmographyApi(id, page);
    return result.data;
  },
);
