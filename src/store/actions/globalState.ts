import { createSlice } from '@reduxjs/toolkit';

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
  }
});
export default slice.reducer;
export const { setData } = slice.actions;
