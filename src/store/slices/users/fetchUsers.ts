import { firestore } from '../../../api/firebase/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { GlobalState } from '.';
import { auth } from '../../../api/firebase/firebase';
import { onAuthStateChanged } from 'firebase/auth';

// These are the data types for the user profile
// that we receive from Firebase Auth
interface UserProfile {
  uid: string;
  displayName: string;
  email: string;
  photoURL: string;
  emailVerified: boolean;
}

export const fetchData = createAsyncThunk(
  'data/fetchData',
  async (): Promise<Partial<GlobalState>> => {
    const data:any = [];
    try {
      const querySnapshot = await getDocs(collection(firestore, 'test_data'));
      querySnapshot.forEach((doc:any) => {
        data.push({ id: doc.id, ...doc.data() });
      });
      return data;
    } catch (err) {
      console.log(err);
    }
    return data;
  }
);

export const fetchSignedInUser = createAsyncThunk(
  'data/fetchSignedInUser',
  async (): Promise<Partial<GlobalState>> => {
    const data:any = [];
    try {
       onAuthStateChanged(auth, (user) => {
        if (user) {
          data.push(user);
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
