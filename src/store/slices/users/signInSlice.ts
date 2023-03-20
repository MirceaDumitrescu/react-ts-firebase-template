import { fetchSignedInUser } from './fetchUsers';
import { signInUser } from './loginRegisterUser';
import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

interface TLoginData {
  email: string;
  password: string;
  isLoggedIn: boolean;
  isLoading: boolean;
  hasError: boolean;
  data: any;
}

const slice = createSlice({
  name: 'loginData',
  initialState: {
    loginData: [],
    isLoggedIn: false,
    isLoading: false,
    hasError: false
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchSignedInUser.pending, (state: Partial<TLoginData>, _) => {
      state.isLoading = true;
    });

    builder.addCase(
      fetchSignedInUser.fulfilled,
      (state: Partial<TLoginData>, action: PayloadAction<Partial<TLoginData>>) => {
        state.isLoading = false;
        state.data = action.payload;
      }
    );

    builder.addCase(fetchSignedInUser.rejected, (state: Partial<TLoginData>, _) => {
      state.hasError = true;
      state.isLoading = false;
    });

    // builder.addCase(signInUser.pending, (state: Partial<TLoginData>, _) => {
    //   state.isLoading = true;
    // });

    // builder.addCase(
    //   signInUser.fulfilled,
    //   (state: Partial<TLoginData>, action: PayloadAction<boolean>) => {
    //     state.isLoading = false;
    //     state.isLoggedIn = action.payload;
    //   }
    // );

    // builder.addCase(signInUser.rejected, (state: Partial<TLoginData>, _) => {
    //   state.hasError = true;
    //   state.isLoading = false;
    // });
  }
});

export default slice.reducer;
