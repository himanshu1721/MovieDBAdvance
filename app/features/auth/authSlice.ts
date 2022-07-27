import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import auth from '@react-native-firebase/auth';

const initialState = {
  user: false,
  email: null,
  userUID: null,
  loading: false,
  error: false,
};

const loginTheUser = createAsyncThunk(
  'auth/loginUser',
  async ({userEmail, userPassword}) => {
    const login = await auth().signInWithEmailAndPassword(
      userEmail,
      userPassword,
    );
    return login;
  },
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    createUserState: (state, action) => {
      const {email, userUID} = action.payload;
      state.email = email;
      state.userUID = userUID;
      state.user = true;
    },
    logOutUser: state => {
      state.email = null;
      state.userUID = null;
      state.user = false;
      state.error = false;
    },
    clearError: state => {
      state.error = false;
    }
  },
  extraReducers: builder => {
    builder.addCase(loginTheUser.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(loginTheUser.fulfilled, (state, action) => {
      state.email = action.payload.user.email;
      state.userUID = action.payload.user.uid;
      state.user = true;
      state.loading = false;
    });
    builder.addCase(loginTheUser.rejected, (state, action) => {
      state.error = true;
      state.loading = false;
    });
  },
});

const {reducer} = authSlice;
export const {createUserState, logOutUser, clearError} = authSlice.actions;
export default reducer;
export {loginTheUser};
