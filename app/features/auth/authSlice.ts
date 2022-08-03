import { createSlice } from '@reduxjs/toolkit';
import { loginTheUser, signUpUser } from './services';
import { UserData } from './types';

const initialState: UserData = {
  user: false,
  email: null,
  userUID: null,
  loading: false,
  error: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    createUserState: (state, action) => {
      const { email, userUID } = action.payload;
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
    },
  },
  extraReducers: builder => {
    builder.addCase(loginTheUser.pending, state => {
      state.loading = true;
    });
    builder.addCase(loginTheUser.fulfilled, (state, action) => {
      state.email = action.payload.user.email;
      state.userUID = action.payload.user.uid;
      state.user = true;
      state.loading = false;
    });
    builder.addCase(loginTheUser.rejected, state => {
      state.error = true;
      state.loading = false;
    });

    builder.addCase(signUpUser.pending, state => {
      state.loading = true;
    });
    builder.addCase(signUpUser.fulfilled, (state, action) => {
      state.email = action.payload.user.email;
      state.userUID = action.payload.user.uid;
      state.user = true;
      state.loading = false;
    });
    builder.addCase(signUpUser.rejected, state => {
      state.error = true;
      state.loading = false;
    });
  },
});

const { reducer } = authSlice;
export const { createUserState, logOutUser, clearError } = authSlice.actions;
export default reducer;
