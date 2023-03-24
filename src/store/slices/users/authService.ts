import { createAsyncThunk } from '@reduxjs/toolkit';
import { LoginUserData } from '../../../pages/login/Login';
import { RegisterUserData } from '../../../pages/register/Register';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, User } from 'firebase/auth';
import { auth, provider } from '../../../api/firebase/firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { TLoginData, TUser, TUserProfile } from './authSlice';
import { writeUserInFirestore } from '../../../api/firebase/writeFirestore';
import { fetchUserFirestore } from '../../../api/firebase/fetchFirestore';
import { DocumentData } from 'firebase/firestore';
import { tst } from '../../../utils/ToastGenerator';

export const signInUser = createAsyncThunk(
  'authService/signInUser',
  async (data: LoginUserData): Promise<Partial<TLoginData>> => {
    const userData = {
      loginData: {} as TUserProfile,
      isLoggedIn: false as boolean
    };
    const result = await signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        return userCredential;
      })
      .catch((error) => {
        console.error(error);
      });
    if (result?.user) {
      await fetchUserFirestore(result.user.uid)
        .then((user: DocumentData | null) => {
          if (user) {
            userData.loginData = user?.loginData;
            userData.isLoggedIn = true;
            tst.success('Welcome back!');
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
    await createUserWithEmailAndPassword(auth, formData.email, formData.password)
      .then((userCredential) => {
        userDataEmail.loginData = {
          email: userCredential.user.email,
          uid: userCredential.user.uid,
          emailVerified: userCredential.user.emailVerified,
          phoneNumber: userCredential.user.phoneNumber,
          photoURL: userCredential.user.photoURL,
          firstName: formData.firstName,
          lastName: formData.lastName,
          role: 'user',
          auth: 'email'
        };
        userDataEmail.isLoggedIn = true;
        writeUserInFirestore(userCredential.user.uid, userDataEmail.loginData);
        return userDataEmail;
      })
      .catch((error) => {
        console.log(error.message);
      });
    return userDataEmail;
  }
);
