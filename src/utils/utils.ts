import { TUser } from '../store/slices/users/authSlice';
import { UserRoles, AuthProvider } from '../store/slices/users/authService';

export const createUserObject = (user: TUser | any, firstname: string, lastname: string) => {
  return {
    email: user.email,
    uid: user.uid,
    firstName: firstname,
    lastName: lastname,
    role: UserRoles.USER,
    auth: AuthProvider.GOOGLE,
    emailVerified: user.emailVerified,
    phoneNumber: user.phoneNumber,
    photoURL: user.photoURL
  };
};
