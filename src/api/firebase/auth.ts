import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';
import { LoginUserData } from '../../pages/login/Login';
import { RegisterUserData } from '../../pages/register/Register';
// Create a new user and automatically login the new registered user
export const  createUser =async (
  formData: RegisterUserData,
  setUserCredentials: CallableFunction
) => {
  // Register a new user using email/pass sign in option
 await createUserWithEmailAndPassword(auth, formData.email, formData.password)
    .then(() => {
      setUserCredentials(formData);
      return formData;
    })
    .catch((error) => {
      console.log(error.message);
    });
};

// Login an existing user
export const logInUser = async (formData: LoginUserData, setUserCredentials: CallableFunction) => {
  await signInWithEmailAndPassword(auth, formData.email, formData.password)
    .then((userCredential) => {
      setUserCredentials(userCredential.user);
      return userCredential.user;
    })
    .catch((error) => {
      console.log(error.message);
    });
};
