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
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { TLoginData, TUser, TUserProfile } from './authSlice';
import { writeUserInFirestore } from '../../../api/firebase/writeFirestore';
import { fetchUserFirestore } from '../../../api/firebase/fetchFirestore';
import { DocumentData } from 'firebase/firestore';
import { tst } from '../../../utils/ToastGenerator';

setPersistence(auth, browserLocalPersistence);

export const signInUser = createAsyncThunk(
  'authService/signInUser',
  async (data: LoginUserData): Promise<Partial<TLoginData>> => {
    const userData = {
      loginData: {} as TUserProfile,
      isLoggedIn: false as boolean
    };
    const result = await signInWithEmailAndPassword(auth, data.email, data.password);
    console.log('result', result);
    if (result?.user) {
      await fetchUserFirestore(result.user.uid)
        .then((user: DocumentData | null) => {
          if (user) {
            userData.loginData = user?.loginData;
            userData.isLoggedIn = true;
            tst.success('Welcome back!');
            return;
          }
          tst.error('User not found');
        })
        .catch((error) => {
          console.error(error);
        });
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
        // const credential: any = GoogleAuthProvider.credentialFromResult(result);
        const user = result.user;
        if (user) {
          const splitName = user.displayName.split(' ');
          userDataGoogle.loginData = {
            email: user.email,
            uid: user.uid,
            firstName: splitName[0],
            lastName: splitName[1],
            role: 'user',
            auth: 'google',
            emailVerified: user.emailVerified,
            phoneNumber: user.phoneNumber,
            photoURL: user.photoURL
          };
          userDataGoogle.isLoggedIn = true;
          tst.success('Welcome back!');
          writeUserInFirestore(user.uid, userDataGoogle.loginData);
        }
        return userDataGoogle;
      })
      .catch((error) => {
        tst.error('Something went wrong');
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

      userDataEmail.loginData = {
        email: result.user.email,
        uid: result.user.uid,
        emailVerified: result.user.emailVerified,
        phoneNumber: result.user.phoneNumber,
        photoURL: result.user.photoURL,
        firstName: formData.firstName,
        lastName: formData.lastName,
        role: 'user',
        auth: 'email'
      };

      userDataEmail.isLoggedIn = true;

      writeUserInFirestore(result.user.uid, userDataEmail.loginData);
    } catch (error) {
      console.error(error);
    }

    return userDataEmail;
  }
);
