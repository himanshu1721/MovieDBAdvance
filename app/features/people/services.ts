import { createAsyncThunk } from '@reduxjs/toolkit';
import { ActionTypeConstants } from '../../constants';
import { fetchPeopleApi } from './Api';

export const fetchPeople = createAsyncThunk(
  ActionTypeConstants.fetchPeople,
  async ({ page }: { page: number }) => {
    const result = await fetchPeopleApi(page);
    return result.data;
  },
);
