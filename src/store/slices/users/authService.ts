import { createAsyncThunk } from '@reduxjs/toolkit';
import { LoginUserData } from '../../../pages/login/Login';
import { RegisterUserData } from '../../../pages/register/Register';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  setPersistence,
  browserLocalPersistence
} from 'firebase/auth';
import { auth, provider } from '../../../api/firebase/firebase';
import { signInWithPopup } from 'firebase/auth';
import { TLoginData, TUser, TUserProfile } from './authSlice';
import { writeUserInFirestore } from '../../../api/firebase/writeFirestore';
import { fetchUserFirestore } from '../../../api/firebase/fetchFirestore';
import { createUserObject } from '../../../utils/utils';

setPersistence(auth, browserLocalPersistence);

export enum AuthProvider {
  GOOGLE = 'google',
  FACEBOOK = 'facebook',
  TWITTER = 'twitter',
  GITHUB = 'github'
}

export enum UserRoles {
  ADMIN = 'admin',
  USER = 'user'
}

export const signInUser = createAsyncThunk(
  'authService/signInUser',
  async (data: LoginUserData): Promise<Partial<TLoginData>> => {
    const userData = {
      loginData: {} as TUserProfile,
      isLoggedIn: false as boolean
    };
    try {
      const result = await signInWithEmailAndPassword(auth, data.email, data.password);
      const user = await fetchUserFirestore(result.user.uid);
      userData.loginData = user?.loginData;
      userData.isLoggedIn = true;
    } catch (error) {
      console.error(error);
    }
    return userData;
  }
);

export const signInWithGoogle = createAsyncThunk(
  'authService/signInWithGoogle',
  async (): Promise<Partial<TLoginData>> => {
    const userDataGoogle = {
      loginData: {} as TUser,
      isLoggedIn: false as boolean
    };
    await signInWithPopup(auth, provider)
      .then((result: any) => {
        const user = result.user;
        if (user) {
          const splitName = user.displayName.split(' ');
          userDataGoogle.loginData = createUserObject(user, splitName[0], splitName[1]);
          userDataGoogle.isLoggedIn = true;
          writeUserInFirestore(user.uid, userDataGoogle.loginData);
        }
        return userDataGoogle;
      })
      .catch((error) => {
        console.log(error.message);
      });
    return userDataGoogle;
  }
);

export const registerUser = createAsyncThunk(
  'authService/registerUser',
  async (formData: RegisterUserData): Promise<Partial<TLoginData>> => {
    const userDataEmail = {
      loginData: {} as TUser,
      isLoggedIn: false as boolean
    };
    try {
      const result = await createUserWithEmailAndPassword(auth, formData.email, formData.password);

      userDataEmail.loginData = createUserObject(
        result.user,
        formData.firstName,
        formData.lastName
      );

      userDataEmail.isLoggedIn = true;

      writeUserInFirestore(result.user.uid, userDataEmail.loginData);
    } catch (error) {
      console.error(error);
    }

    return userDataEmail;
  }
);

export const logoutUser = createAsyncThunk(
  'authService/logoutUser',
  async (): Promise<Partial<TLoginData>> => {
    const userData = {
      loginData: {} as TUser,
      isLoggedIn: false as boolean
    };
    try {
      await auth.signOut();
      userData.isLoggedIn = false;
      userData.loginData = {} as TUser;
    } catch (error) {
      console.error(error);
    }
    return userData;
  }
);
