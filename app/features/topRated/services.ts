import { createAsyncThunk } from '@reduxjs/toolkit';
import ActionTypeConstants from '../../constants/ActionTypeConstants';
import { getTopRatedApi } from './Api';

export const getTopRated = createAsyncThunk(
  ActionTypeConstants.getTopRated,
  async () => {
    const result = await getTopRatedApi();
    return result.data;
  },
);
