import { firestore } from '../../../api/firebase/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { GlobalState } from '.';

export const fetchData = createAsyncThunk(
  'data/fetchData',
  async (): Promise<Partial<GlobalState>> => {
    const data: any = [];
    try {
      const querySnapshot = await getDocs(collection(firestore, 'test_data'));
      querySnapshot.forEach((doc: any) => {
        data.push({ id: doc.id, ...doc.data() });
      });
      return data;
    } catch (err) {
      console.log(err);
    }
    return data;
  }
);
