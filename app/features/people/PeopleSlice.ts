import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchPeople } from './services';
import { PeopleProps, PeopleResponsePayload } from './types';

const initialState: PeopleProps = {
  loading: false,
  data: [],
  error: false,
};

const peopleSlice = createSlice({
  name: 'people',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchPeople.pending, (state: PeopleProps) => {
      state.loading = true;
    });
    builder.addCase(
      fetchPeople.fulfilled,
      (state: PeopleProps, action: PayloadAction<PeopleResponsePayload>) => {
        state.loading = false;
        state.data = state.data.concat(action.payload.results);
      },
    );
    builder.addCase(fetchPeople.rejected, (state: PeopleProps) => {
      state.loading = false;
      state.error = true;
    });
  },
});

const { reducer } = peopleSlice;
export default reducer;
