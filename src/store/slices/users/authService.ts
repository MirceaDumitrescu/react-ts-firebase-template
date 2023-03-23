import { createAsyncThunk } from '@reduxjs/toolkit';
import { LoginUserData } from '../../../pages/login/Login';
import { RegisterUserData } from '../../../pages/register/Register';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, provider } from '../../../api/firebase/firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { TLoginData, TUser } from './authSlice';
import { setUser } from '../../../api/firebase/setData';

export const signInUser = createAsyncThunk(
  'authService/signInUser',
  async (data: LoginUserData): Promise<Partial<TLoginData>> => {
    const userData = {
      loginData: {} as TUser,
      isLoggedIn: false as boolean
    };
    await signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        const splitName = userCredential.user.displayName?.split(' ');
        userData.loginData = {
          email: userCredential.user.email,
          uid: userCredential.user.uid,
          photoURL: userCredential.user.photoURL,
          phoneNumber: userCredential.user.phoneNumber,
          emailVerified: userCredential.user.emailVerified,
          firstName: splitName ? splitName[0] : '',
          lastName: splitName ? splitName[1] : '',
          role: 'user',
          auth: 'email'
        };
        userData.isLoggedIn = true; 
        
      })
      .catch((error) => {
        console.log(error.message);
      });
    return userData;
  }
);

export const signInWithGoogle = createAsyncThunk(
  'authService/signInWithGoogle', 
  async (data: LoginUserData): Promise<Partial<TLoginData>>  => {
    const userDataGoogle = {
      loginData: {} as TUser,
      isLoggedIn: false as boolean
    }
  await signInWithPopup(auth, provider)
  .then((result:any) => {
    const credential:any = GoogleAuthProvider.credentialFromResult(result);
    const user = result.user;
    const splitName = user.displayName.split(' ');
    userDataGoogle.loginData = {
      email: user.email,
      uid: user.uid, 
      firstName: splitName[0],
      lastName: splitName[1],
      role: 'user',
      auth:'google',
      emailVerified:user.emailVerified,
      phoneNumber:user.phoneNumber,
      photoURL:user.photoURL,
    }
    userDataGoogle.isLoggedIn = true;
    setUser(user.uid, userDataGoogle);
    console.log(userDataGoogle)
    return userDataGoogle;
  }).catch((error:any) => {
     console.log(error.message)
 
  });
  return userDataGoogle
}
)

export const registerUser = createAsyncThunk(
  'authService/registerUser',
  async (formData: RegisterUserData): Promise<Partial<TLoginData>> => {
    const userDataEmail = {
      loginData: {} as TUser,
      isLoggedIn: false as boolean
    }
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
          role:'user',
          auth: 'email'
        }
        userDataEmail.isLoggedIn = true;
        setUser(userCredential.user.uid, userDataEmail);
        return userDataEmail;
      })
      .catch((error) => {
        console.log(error.message);
      });
    return userDataEmail;
  }
);
