import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isFocus: false,
  data: {},
};

const focusSlice = createSlice({
  name: 'focus',
  initialState,
  reducers: {
    setFocusDetail: (state, action) => {
      state.isFocus = true;
      state.data = action.payload;
    },
    onPressOut: state => {
      state.isFocus = false;
    },
  },
});

const {reducer} = focusSlice;

export const {setFocusDetail, onPressOut} = focusSlice.actions;
export default reducer;

