import {configureStore} from '@reduxjs/toolkit';

import cakeSlice from './cake/cakeSlice';
import cookieSlice from './cookies/cookieSlice';
import userSlice from './users/userSlice';

const store = configureStore({
  reducer: {
    cake: cakeSlice,
    cookie: cookieSlice,
    users: userSlice,
  },
  // other options e.g middleware, go here
});

export default store;
