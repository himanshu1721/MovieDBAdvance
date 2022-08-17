import { createAsyncThunk } from '@reduxjs/toolkit';
import ActionTypeConstants from '../../constants/ActionTypeConstants';
import { getTopRatedApi } from './Api';

interface GetTopRatedProps {
  isCurrentUserAdult: boolean;
}

export const getTopRated = createAsyncThunk(
  ActionTypeConstants.getTopRated,
  async ({ isCurrentUserAdult }: GetTopRatedProps) => {
    const result = await getTopRatedApi(isCurrentUserAdult);
    return result.data;
  },
);
