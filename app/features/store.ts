import {configureStore} from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';

import authSlice from './auth/authSlice';
import popularSlice from './content/popularSlice';
import trendingSlice from './content/trendingSlice';
import detailSlice from './detail/detailSlice';
import focusSlice from './focus/focusSlice';
import ratingSlice from './rating/ratingSlice';
import watchLaterSlice from './watchLater/watchLaterSlice';
import topRatedSlice from './topRated/topRatedSlice';

const store = configureStore({
  reducer: {
    popular: popularSlice,
    trending: trendingSlice,
    detail: detailSlice,
    watchLater: watchLaterSlice,
    focus: focusSlice,
    rating: ratingSlice,
    topRated: topRatedSlice,
    auth: authSlice,
  },
  middleware: [thunkMiddleware],
  // other options e.g middleware, go here
});

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
