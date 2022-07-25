import {configureStore} from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';

import popularSlice from './content/popularSlice';
import detailSlice from './detail/detailSlice';
import trendingSlice from './content/trendingSlice';
import watchLaterSlice from './watchLater/watchLaterSlice';

const store = configureStore({
  reducer: {
    popular: popularSlice,
    trending: trendingSlice,
    detail: detailSlice,
    watchLater: watchLaterSlice,
  },
  middleware: [thunkMiddleware],
  // other options e.g middleware, go here
});

export default store;
export type AppDispatch = typeof store.dispatch;
