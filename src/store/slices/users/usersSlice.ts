import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchUserArray } from './usersService';

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
    builder.addCase(fetchUserArray.pending, (state: Partial<any>, _) => {
      state.isLoading = true;
    }),
      builder.addCase(
        fetchUserArray.fulfilled,
        (state: Partial<any>, action: PayloadAction<Partial<any>>) => {
          state.isLoading = false;
          state.data = action.payload;
        }
      ),
      builder.addCase(fetchUserArray.rejected, (state: Partial<any>, _) => {
        state.hasError = true;
        state.isLoading = false;
      });
  }
});
export default slice.reducer;
export const { setData } = slice.actions;
