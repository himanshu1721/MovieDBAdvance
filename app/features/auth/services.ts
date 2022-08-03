import { createAsyncThunk } from '@reduxjs/toolkit';
import ActionTypeConstants from '../../constants/ActionTypeConstants';
import { loginTheUserApi, signUpUserApi } from './Api';
import { UserCredentials } from './types';

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
    return result;
  },
);
