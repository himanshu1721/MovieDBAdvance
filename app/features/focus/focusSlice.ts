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
// adult(pin):false
// backdrop_path(pin):"/698FjyzLdpgXmUSr63LaRwblTmx.jpg"
// id(pin):507086
// original_language(pin):"en"
// original_title(pin):"Jurassic World Dominion"
// overview(pin):"Four years after Isla Nublar was destroyed, dinosaurs now live—and hunt—alongside humans all over the world. This fragile balance will reshape the future and determine, once and for all, whether human beings are to remain the apex predators on a planet they now share with history’s most fearsome creatures."
// popularity(pin):12339.13
// poster_path(pin):"/kAVRgw7GgK1CfYEJq8ME6EvRIgU.jpg"
// release_date(pin):"2022-06-01"
// title(pin):"Jurassic World Dominion"
// video(pin):false
// vote_average(pin):7
// vote_count(pin):2008
