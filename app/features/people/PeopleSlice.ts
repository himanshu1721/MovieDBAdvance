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
    builder.addCase(
      fetchPeople.fulfilled,
      (state, action: PayloadAction<PeopleResponsePayload>) => {
        state.data = state.data.concat(action.payload.results);
      },
    );
  },
});

const { reducer } = peopleSlice;
export { fetchPeople };
export default reducer;
