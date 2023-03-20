import { createUserWithEmailAndPassword, signInWithEmailAndPassword, User } from 'firebase/auth';
import { auth } from './firebase';
import { LoginUserData } from '../../pages/login/Login';
import { RegisterUserData } from '../../pages/register/Register';

export const createUser = async (formData: RegisterUserData): Promise<RegisterUserData | void> => {
  const data = await createUserWithEmailAndPassword(auth, formData.email, formData.password)
    .then(() => {
      return formData;
    })
    .catch((error) => {
      console.log(error.message);
    });
  return data;
};

export const logInUser = async (formData: LoginUserData): Promise<User | void> => {
  const data = await signInWithEmailAndPassword(auth, formData.email, formData.password)
    .then((userCredential) => {
      return userCredential.user;
    })
    .catch((error) => {
      console.log(error.message);
    });
  return data;
};
