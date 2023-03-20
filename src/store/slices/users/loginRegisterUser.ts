import { createAsyncThunk } from '@reduxjs/toolkit';
import { GlobalState } from '.';
import { logInUser } from '../../../api/firebase/auth';
import { createUser } from '../../../api/firebase/auth';
import { setData } from './index';

export const signInUser = createAsyncThunk(
  'data/signInUser',
  async (): Promise<Partial<GlobalState>> => {
    const data: any = [];
    try {
      const loggedUser = logInUser(data, data);
      data.push(loggedUser);
      return data;
    } catch (err) {
      console.log(err);
    }
    return data;
  }
);

export const registerUser = createAsyncThunk(
  'data/registerUser',
  async (): Promise<Partial<GlobalState>> => {
    const data: any = [];
    try {
      const registeredUser = createUser(data, data);
      data.push(registeredUser);
      return data;
    } catch (err) {
      console.log(err);
    }
    return data;
  }
);
