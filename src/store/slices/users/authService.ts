import { createAsyncThunk } from '@reduxjs/toolkit';
import { LoginUserData } from '../../../pages/login/Login';
import { RegisterUserData } from '../../../pages/register/Register';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, provider} from '../../../api/firebase/firebase';
import { storeUser } from './storeUser';
import { create } from 'react-test-renderer';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

export const signInUser = createAsyncThunk(
  'authService/signInUser',
  async (data: LoginUserData): Promise<Partial<any> | void> => {
    const userData = { user: {}, isLoggedIn: false };
    await signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        console.log(userCredential)
        userData.user = {
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

export const signInWithGoogle =  createAsyncThunk(
  'authService/singInWithGoogle',
  async (): Promise<Partial<any> | void> => {
    await signInWithPopup(auth, provider)
    .then((result)=>{
      const credential:any = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    const userNames:any = user.displayName?.split(' ')
    const userData = {
      email: user.email,
      uid: user.uid,
      firstName:userNames[0],
      lastName:userNames[1],
      isAdmin: false,
      auth: 'google'
    }
    storeUser(user.uid,userData )
    console.log(token, user)
  }).catch((error) => {
    
    const credential = GoogleAuthProvider.credentialFromError(error);
    console.log(credential, error.message)
    })
  }
)

export const registerUser = createAsyncThunk(
  'authService/registerUser',
  async (formData: RegisterUserData): Promise<Partial<RegisterUserData | void>> => {
    await createUserWithEmailAndPassword(auth, formData.email, formData.password)
      .then((userCredential) => {
        console.log(userCredential)
        const userData = {
          email: userCredential.user.email,
          uid: userCredential.user.uid,
          lastName: formData.lastName,
          firstName: formData.firstName,
          isAdmin: false,
          auth: 'email'
        }
       storeUser(userCredential.user.uid,userData )
        return formData
      })
      .catch((error) => {
        console.log(error.message);
      });
    return formData;
  }
);
