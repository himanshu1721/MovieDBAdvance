import { combineReducers, configureStore } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';

import authSlice from './auth/authSlice';
import popularSlice from './content/popularSlice';
import trendingSlice from './content/trendingSlice';
import detailSlice from './detail/detailSlice';
import focusSlice from './focus/focusSlice';
import ratingSlice from './rating/ratingSlice';
import popularTVSlice from './content/popularTVSlice';
import watchLaterSlice from './watchLater/watchLaterSlice';
import topRatedSlice from './topRated/topRatedSlice';
import ratedByMeSlice from './ratedByMe/ratedByMeSlice';
import profileSlice from './profile/profileSlice';
import otherProfileSlice from './otherProfile/otherProfileSlice';
import genreTopRatedSlice from './genre/genreTopRatedSlice';
import genrePopularSlice from './genre/genrePopularSlice';
import peopleSlice from './people/PeopleSlice';
import celebritySlice from './celebrity/celebrityDetailSlice';
import { persistReducer, persistStore } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const rootReducer = combineReducers({
  popular: popularSlice,
  trending: trendingSlice,
  detail: detailSlice,
  watchLater: watchLaterSlice,
  focus: focusSlice,
  rating: ratingSlice,
  topRated: topRatedSlice,
  auth: authSlice,
  ratedByMe: ratedByMeSlice,
  popularTV: popularTVSlice,
  profile: profileSlice,
  otherProfile: otherProfileSlice,
  genreTopRated: genreTopRatedSlice,
  genrePopular: genrePopularSlice,
  people: peopleSlice,
  celebrity: celebritySlice,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunkMiddleware],
  // other options e.g middleware, go here
});

const persistor = persistStore(store);
export { store, persistor };

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
