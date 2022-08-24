import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  AuthResponseGoogleSignInPayload,
  AuthResponsePayload,
  UserData,
} from './types';
import {
  loginTheUser,
  signUpUser,
  signUpGoogle,
  signUpPhone,
} from './services';

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
    builder.addCase(loginTheUser.pending, (state: UserData) => {
      state.loading = true;
    });
    builder.addCase(
      loginTheUser.fulfilled,
      (state: UserData, action: PayloadAction<AuthResponsePayload>) => {
        state.email = action.payload.user.email;
        state.userUID = action.payload.user.uid;
        state.user = true;
        state.loading = false;
      },
    );
    builder.addCase(loginTheUser.rejected, (state: UserData) => {
      state.error = true;
      state.loading = false;
    });
    builder.addCase(signUpUser.pending, (state: UserData) => {
      state.loading = true;
    });
    builder.addCase(
      signUpUser.fulfilled,
      (state: UserData, action: PayloadAction<AuthResponsePayload>) => {
        state.email = action.payload.user.email;
        state.userUID = action.payload.user.uid;
        state.user = true;
        state.loading = false;
      },
    );
    builder.addCase(signUpUser.rejected, (state: UserData) => {
      state.error = true;
      state.loading = false;
    });
    builder.addCase(signUpGoogle.pending, (state: UserData) => {
      state.loading = true;
    });
    builder.addCase(
      signUpGoogle.fulfilled,
      (
        state: UserData,
        action: PayloadAction<AuthResponseGoogleSignInPayload>,
      ) => {
        state.email = action?.payload?.user?.email;
        state.userUID = action?.payload?.user?.id;
        state.user = true;
        state.loading = false;
      },
    );
    builder.addCase(signUpGoogle.rejected, (state: UserData) => {
      state.error = true;
      state.loading = false;
    });
    builder.addCase(signUpPhone.pending, (state: UserData) => {
      state.loading = true;
    });
    builder.addCase(
      signUpPhone.fulfilled,
      (state: UserData, action: PayloadAction<string>) => {
        action.payload;
        state.email = null;
        state.userUID = action?.payload;
        state.user = true;
        state.loading = false;
      },
    );
    builder.addCase(signUpPhone.rejected, (state: UserData) => {
      state.error = true;
      state.loading = false;
    });
  },
});

const { reducer } = authSlice;
export const { createUserState, logOutUser, clearError } = authSlice.actions;
export default reducer;
