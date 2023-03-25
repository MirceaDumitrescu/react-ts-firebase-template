import { firestore } from '../../../api/firebase/firebase';
import { getDocs, collection } from 'firebase/firestore';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../../api/firebase/firebase';

export const fetchUserArray = createAsyncThunk(
  'usersService/fetchUserArray',
  async (): Promise<Partial<any>> => {
    const data: any = [];
    try {
      const querySnapshot = await getDocs(collection(firestore, 'users'));
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

export const fetchSignedInUserData = createAsyncThunk(
  'usersService/fetchSignedInUserData',
  async (): Promise<Partial<any>> => {
    const data: any = [];
    try {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          data.push(user);
          console.log(data);
        } else {
          console.log('User is not signed in');
        }
        return data;
      });
    } catch (err) {
      console.log(err);
    }
    return data;
  }
);
