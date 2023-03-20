import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';
import { LoginUserData } from '../../pages/login/Login';
import { RegisterUserData } from '../../pages/register/Register';
// Create a new user and automatically login the new registered user
export const createUser = (
  email: string,
  password: string,
  formData: RegisterUserData,
  setUserCredentials: CallableFunction
) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredentials) => {
      setUserCredentials(formData);
      console.log(userCredentials.user);
      console.log(formData);
    })
    .catch((error) => {
      console.log(error.message);
    });
};

// Login an existing user
export const logInUser = (formData: LoginUserData, setUserCredentials: CallableFunction) => {
  signInWithEmailAndPassword(auth, formData.email, formData.password)
    .then((userCredential) => {
      setUserCredentials(userCredential.user);
    })
    .catch((error) => {
      console.log(error.message);
    });
};
