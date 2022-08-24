import { createAsyncThunk } from '@reduxjs/toolkit';
import ActionTypeConstants from '../../constants/ActionTypeConstants';
import {
  createUserAccount,
  loginTheUserApi,
  signInUserGoogleApi,
  signUpUserApi,
} from './Api';
import { UserCredentials, UserUID } from './types';

export const loginTheUser = createAsyncThunk(
  ActionTypeConstants.loginUser,
  async ({ userEmail, userPassword }: UserCredentials) => {
    const result = await loginTheUserApi({
      userEmail: userEmail,
      userPassword: userPassword,
    });
    return result;
  },
);

export const signUpUser = createAsyncThunk(
  ActionTypeConstants.signUp,
  async ({ userEmail, userPassword }: UserCredentials) => {
    const result = await signUpUserApi({
      userEmail: userEmail,
      userPassword: userPassword,
    });
    createUserAccount({
      userEmail: result.user.email,
      userUID: result.user.uid,
    });
    return result;
  },
);

export const signUpGoogle = createAsyncThunk(
  ActionTypeConstants.signUpGoogle,
  async () => {
    const result = await signInUserGoogleApi();
    createUserAccount({
      userEmail: result.user.email,
      userUID: result.user.id,
    });
    return result;
  },
);

export const signUpPhone = createAsyncThunk(
  ActionTypeConstants.signUpPhone,
  async ({ uid }: UserUID) => {
    createUserAccount({
      userEmail: null,
      userUID: uid,
    });
    return uid;
  },
);
