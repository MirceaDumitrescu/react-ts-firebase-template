import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchData, fetchSignedInUser } from './fetchUsers';
import { registerUser, signInUser } from './loginRegisterUser';

export interface GlobalState {
  data: any;
  isLoading: boolean;
  hasError: boolean;
}

const slice = createSlice({
  name: 'data',
  initialState: {
    data: [],
    isLoading: false,
    hasError: false
  },
  reducers: {
    /**
     * @description Update the state with the new data
     * @param state
     * @param action
     * @returns updated state
     */
    setData: (state, action) => ({
      ...state,
      ...action.payload
    })
  },
  extraReducers(builder) {
    // fetchData from firestore extraReducers
    builder.addCase(fetchData.pending, (state: Partial<GlobalState>, _) => {
      state.isLoading = true;
    }),
      builder.addCase(
        fetchData.fulfilled,
        (state: Partial<GlobalState>, action: PayloadAction<Partial<GlobalState>>) => {
          console.log('action', action);
          state.isLoading = false;
          state.data = action.payload;
        }
      ),
      builder.addCase(fetchData.rejected, (state: Partial<GlobalState>, _) => {
        state.hasError = true;
        state.isLoading = false;
      });

    // fetchSignedInUSer from firebase Auth extraReducers
    builder.addCase(fetchSignedInUser.pending, (state: Partial<GlobalState>, _) => {
      state.isLoading = true;
    });

    builder.addCase(
      fetchSignedInUser.fulfilled,
      (state: Partial<GlobalState>, action: PayloadAction<Partial<GlobalState>>) => {
        console.log('action', action);
        state.isLoading = false;
        state.data = action.payload;
      }
    );

    builder.addCase(fetchSignedInUser.rejected, (state: Partial<GlobalState>, _) => {
      state.hasError = true;
      state.isLoading = false;
    });

    //  registerUser extraReducers using firebaseAuth email&password
    builder.addCase(registerUser.pending, (state: Partial<GlobalState>, _) => {
      state.isLoading = true;
    });

    builder.addCase(
      registerUser.fulfilled,
      (state: Partial<GlobalState>, action: PayloadAction<Partial<GlobalState>>) => {
        console.log('action', action);
        state.isLoading = false;
        state.data = action.payload;
      }
    );

    builder.addCase(registerUser.rejected, (state: Partial<GlobalState>, _) => {
      state.hasError = true;
      state.isLoading = false;
    });

    //  signInUser extraReducers using firebaseAuth email&password
    builder.addCase(signInUser.pending, (state: Partial<GlobalState>, _) => {
      state.isLoading = true;
    });

    builder.addCase(
      signInUser.fulfilled,
      (state: Partial<GlobalState>, action: PayloadAction<Partial<GlobalState>>) => {
        console.log('action', action);
        state.isLoading = false;
        state.data = action.payload;
      }
    );

    builder.addCase(signInUser.rejected, (state: Partial<GlobalState>, _) => {
      state.hasError = true;
      state.isLoading = false;
    });
  }
});
export default slice.reducer;
export const { setData } = slice.actions;
