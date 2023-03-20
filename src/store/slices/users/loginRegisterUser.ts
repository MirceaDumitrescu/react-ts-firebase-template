import { createAsyncThunk } from '@reduxjs/toolkit';
import { User } from 'firebase/auth';
import { logInUser } from '../../../api/firebase/auth';
import { createUser } from '../../../api/firebase/auth';
import { LoginUserData } from '../../../pages/login/Login';
import { RegisterUserData } from '../../../pages/register/Register';

export const signInUser = createAsyncThunk(
  'data/signInUser',
  async (data: LoginUserData): Promise<Partial<User | void>> => {
    try {
      const loggedUser = logInUser(data);
      return loggedUser;
    } catch (err) {
      console.log(err);
    }
    return data;
  }
);

export const registerUser = createAsyncThunk(
  'data/registerUser',
  async (data: RegisterUserData): Promise<Partial<RegisterUserData | void>> => {
    try {
      const registeredUser = createUser(data);
      return registeredUser;
    } catch (err) {
      console.log(err);
    }
    return data;
  }
);
