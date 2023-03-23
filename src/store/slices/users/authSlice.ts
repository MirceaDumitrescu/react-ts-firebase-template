import { signInUser, signInWithGoogle } from './authService';
import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
import { User } from 'firebase/auth';
// interface any {
//   email: string;
//   password: string;
//   isLoggedIn: boolean;
//   isLoading: boolean;
//   hasError: boolean;
//   data: any;
// }

const slice = createSlice({
  name: 'user',
  initialState: {
    loginData: {},
    isLoggedIn: false,
    isLoading: false,
    hasError: false
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(signInUser.pending, (state: Partial<any>, _) => {
      state.isLoading = true;
    });

    builder.addCase(signInUser.fulfilled, (state: Partial<any>, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.isLoggedIn = action.payload.isLoggedIn;
      state.loginData = action.payload.user;
    });

    builder.addCase(signInUser.rejected, (state: Partial<any>, _) => {
      state.hasError = true;
      state.isLoading = false;
    });

    builder.addCase(signInWithGoogle.pending, (state: Partial<any>, _) => {
      state.isLoading = true;
    });

    builder.addCase(signInWithGoogle.fulfilled, (state: Partial<any>, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.isLoggedIn = action.payload.isLoggedIn;
      state.loginData = action.payload.user;
    });

    builder.addCase(signInWithGoogle.rejected, (state: Partial<any>, _) => {
      state.hasError = true;
      state.isLoading = false;
    });

  }
});

export default slice.reducer;
