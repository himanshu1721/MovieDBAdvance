import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  numberOfCakes: 120,
};

const cakeSlice = createSlice({
  name: 'cake',
  initialState,
  reducers: {
    orderCake: (state, action) => {
      state.numberOfCakes -= action.payload;
    },
    restockCake: (state, action) => {
      state.numberOfCakes += action.payload;
    },
  },
});

const {reducer} = cakeSlice;
export const {orderCake, restockCake} = cakeSlice.actions;

export default reducer;
