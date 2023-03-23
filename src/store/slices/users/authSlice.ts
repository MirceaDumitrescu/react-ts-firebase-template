import { signInUser } from './authService';
import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

export interface TUser {
  displayName: string | null;
  email: string | null;
  emailVerified: boolean;
  isAnonymous: boolean;
  phoneNumber: string | null;
  photoURL: string | null;
  uid: string;
  metadata: any;
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
    loginData: {} as TUser,
    isLoggedIn: false,
    isLoading: false,
    hasError: false
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(signInUser.pending, (state: Partial<TLoginData>, _) => {
      state.isLoading = true;
    });

    builder.addCase(
      signInUser.fulfilled,
      (state: Partial<TLoginData>, action: PayloadAction<Partial<TLoginData>>) => {
        state.isLoading = false;
        state.isLoggedIn = action.payload.isLoggedIn;
        state.loginData = action.payload.loginData;
      }
    );

    builder.addCase(signInUser.rejected, (state: Partial<any>, _) => {
      state.hasError = true;
      state.isLoading = false;
    });
  }
});

export default slice.reducer;
