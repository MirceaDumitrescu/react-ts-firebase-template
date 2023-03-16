import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchData } from './fetchUsers';

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
  }
});
export default slice.reducer;
export const { setData } = slice.actions;
