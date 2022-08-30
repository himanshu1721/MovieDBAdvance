import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import thunkMiddleware from 'redux-thunk';
import authSlice from './auth/authSlice';
import celebritySlice from './celebrity/celebrityDetailSlice';
import popularSlice from './content/popularSlice';
import popularTVSlice from './content/popularTVSlice';
import trendingSlice from './content/trendingSlice';
import detailSlice from './detail/detailSlice';
import focusSlice from './focus/focusSlice';
import genrePopularSlice from './genre/genrePopularSlice';
import genreTopRatedSlice from './genre/genreTopRatedSlice';
import otherProfileSlice from './otherProfile/otherProfileSlice';
import peopleSlice from './people/PeopleSlice';
import profileSlice from './profile/profileSlice';
import ratedByMeSlice from './ratedByMe/ratedByMeSlice';
import ratingSlice from './rating/ratingSlice';
import topRatedSlice from './topRated/topRatedSlice';
import watchLaterSlice from './watchLater/watchLaterSlice';

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
