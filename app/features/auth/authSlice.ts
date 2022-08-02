import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import auth from '@react-native-firebase/auth';

const initialState = {
  user: false,
  email: null,
  userUID: null,
  loading: false,
  error: false,
};

interface UserCredentials {
  userEmail: string;
  userPassword: string;
}

const loginTheUser = createAsyncThunk(
  'auth/loginUser',
  async ({ userEmail, userPassword }: UserCredentials) => {
    const login = await auth().signInWithEmailAndPassword(
      userEmail,
      userPassword,
    );
    return login;
  },
);

const SignUpTheUser = createAsyncThunk(
  'auth/signUp',
  async ({ userEmail, userPassword }: UserCredentials) => {
    const signUp = await auth().createUserWithEmailAndPassword(
      userEmail,
      userPassword,
    );
    return signUp;
  },
);

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

    builder.addCase(SignUpTheUser.pending, state => {
      state.loading = true;
    });
    builder.addCase(SignUpTheUser.fulfilled, (state, action) => {
      state.email = action.payload.user.email;
      state.userUID = action.payload.user.uid;
      state.user = true;
      state.loading = false;
    });
    builder.addCase(SignUpTheUser.rejected, state => {
      state.error = true;
      state.loading = false;
    });
  },
});

const { reducer } = authSlice;
export const { createUserState, logOutUser, clearError } = authSlice.actions;
export default reducer;
export { loginTheUser, SignUpTheUser };
