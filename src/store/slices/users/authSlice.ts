import { signInUser, signInWithGoogle } from './authService';
import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

export interface TUser {
  email: string | null;
  emailVerified: boolean;
  phoneNumber?: string | null;
  photoURL?: string | null;
  uid: string;
  firstName: string;
  lastName: string;
  role: string;
  auth: string;
}

export interface TUserProfile extends TUser {
  age?: number;
  city?: string;
}

export interface TLoginData {
  loginData: TUser;
  isLoggedIn: boolean;
  isLoading: boolean;
  hasError: boolean;
}

const slice = createSlice({
  name: 'user',
  initialState: {
    loginData: {} as TUserProfile,
    isLoggedIn: false,
    isLoading: false,
    hasError: false
  },
  reducers: {
    setLoginData(state: Partial<TLoginData>, action: PayloadAction<Partial<TLoginData>>) {
      state.loginData = action.payload.loginData;
      state.isLoggedIn = action.payload.isLoggedIn;
      state.isLoading = action.payload.isLoading;
    }
  },
  extraReducers(builder) {
    builder.addCase(signInUser.pending, (state: Partial<TLoginData>, _) => {
      state.isLoading = true;
    });

    builder.addCase(
      signInUser.fulfilled,
      (state: Partial<TLoginData>, action: PayloadAction<Partial<TLoginData>>) => {
        state.isLoggedIn = action.payload.isLoggedIn;
        console.log('action.payload.loginData', action.payload.loginData);
        state.loginData = action.payload.loginData;
        state.isLoading = false;
      }
    );

    builder.addCase(signInUser.rejected, (state: Partial<TLoginData>, _) => {
      state.hasError = true;
      state.isLoading = false;
    });

    // Sign in with Google
    builder.addCase(signInWithGoogle.pending, (state: Partial<TLoginData>, _) => {
      state.isLoading = true;
    });

    builder.addCase(
      signInWithGoogle.fulfilled,
      (state: Partial<TLoginData>, action: PayloadAction<Partial<TLoginData>>) => {
        state.isLoading = false;
        state.isLoggedIn = action.payload.isLoggedIn;
        state.loginData = action.payload.loginData;
      }
    );

    builder.addCase(signInWithGoogle.rejected, (state: Partial<any>, _) => {
      state.hasError = true;
      state.isLoading = false;
    });
  }
});

export default slice.reducer;
export const { setLoginData } = slice.actions;
