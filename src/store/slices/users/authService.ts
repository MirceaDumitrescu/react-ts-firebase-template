import { createAsyncThunk } from '@reduxjs/toolkit';
import { LoginUserData } from '../../../pages/login/Login';
import { RegisterUserData } from '../../../pages/register/Register';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../api/firebase/firebase';
import { TLoginData, TUser } from './authSlice';

export const signInUser = createAsyncThunk(
  'authService/signInUser',
  async (data: LoginUserData): Promise<Partial<TLoginData>> => {
    const userData = {
      loginData: {} as TUser,
      isLoggedIn: false as boolean
    };
    await signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        userData.loginData = {
          email: userCredential.user.email,
          uid: userCredential.user.uid,
          displayName: userCredential.user.displayName,
          photoURL: userCredential.user.photoURL,
          phoneNumber: userCredential.user.phoneNumber,
          emailVerified: userCredential.user.emailVerified,
          isAnonymous: userCredential.user.isAnonymous,
          metadata: userCredential.user.metadata
        };
        userData.isLoggedIn = true;
      })
      .catch((error) => {
        console.log(error.message);
      });
    return userData;
  }
);

export const registerUser = createAsyncThunk(
  'authService/registerUser',
  async (formData: RegisterUserData): Promise<Partial<RegisterUserData | void>> => {
    await createUserWithEmailAndPassword(auth, formData.email, formData.password)
      .then(() => {
        return formData;
      })
      .catch((error) => {
        console.log(error.message);
      });
    return formData;
  }
);
