import {createSlice} from '@reduxjs/toolkit';
import {orderCake} from '../cake/cakeSlice';

const initialState = {
  numberOfCookies: 500,
};

const cookieSlice = createSlice({
  name: 'cookie',
  initialState,
  reducers: {
    orderCookie: (state, action) => {
      state.numberOfCookies -= action.payload;
    },
    restockCookie: (state, action) => {
      state.numberOfCookies += action.payload;
    },
  },
  // extraReducers: {
  //   ['cake/orderCake']: (state, action) => {
  //     state.numberOfCookies -= action.payload * 2;
  //   },
  // },
  extraReducers: builder => {
    builder.addCase(orderCake, (state, action) => {
      state.numberOfCookies -= action?.payload * 3;
    });
  },
});

const {reducer} = cookieSlice;

export const {orderCookie, restockCookie} = cookieSlice.actions;
export default reducer;
