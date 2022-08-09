import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import firestore from '@react-native-firebase/firestore';

const initialState = {
  name: '',
  username: '',
  about: '',
  favoriteGenres: [],
  favoriteMovie: [],
  isOnline: false,
  uid: '',
};

const getOtherUserProfile = createAsyncThunk(
  'otherProfile/getOtherUserProfile',
  async ({ id }: { id: string }) => {
    const result = await firestore().collection('users').doc(`${id}`).get();
    return result.data();
  },
);

const otherProfileSlice = createSlice({
  name: 'otherProfile',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getOtherUserProfile.fulfilled, (state, action) => {
      state.about = action.payload.about;
      state.name = action.payload.name;
      state.username = action.payload.username;
      state.isOnline = action.payload.isOnline;
      state.uid = action.payload.uid;
    });
  },
});

const { reducer } = otherProfileSlice;
export default reducer;
export { getOtherUserProfile };
