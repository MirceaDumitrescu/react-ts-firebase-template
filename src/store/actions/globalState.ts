import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { firestore } from '../../api/firebase/firebase';
import { collection, getDocs } from 'firebase/firestore';
export interface GlobalState {
  data: Partial<FirebaseResponse>;
  isLoading: boolean;
  hasError: boolean;
}

export interface FirebaseResponse {
  payload: any;
}

export const fetchData = createAsyncThunk('data/fetchData', async () => {
  try {
    // some logic here (e.g fetch data from an API)
    const querySnapshot = await getDocs(collection(firestore, 'test_data'));
    querySnapshot.forEach((doc: any) => {
      return { id: doc.id, ...doc.data() };
    });
    return querySnapshot;
  } catch (err) {
    console.log(err);
  }
});

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
    builder.addCase(fetchData.pending, (state, _) => {
      state.isLoading = true;
    }),
      builder.addCase(fetchData.fulfilled, (state, action: Partial<FirebaseResponse>) => {
        state.isLoading = false;
        state.data = action.payload;
      }),
      builder.addCase(fetchData.rejected, (state, _) => {
        state.hasError = true;
        state.isLoading = false;
      });
  }
});
export default slice.reducer;
export const { setData } = slice.actions;
