import FormGenerator from '../../components/formGenerator/FormGenerator';
import { loginFormConfig } from './login.config';
import { signInUser } from '../../store/slices/users/authService';
import { useAppDispatch } from '../../hooks/global';
import { useSelector } from 'react-redux';
import { signInWithGoogle } from '../../store/slices/users/authService';

export interface LoginUserData {
  email: string;
  password: string;
}

const Login = () => {
  const dispatch = useAppDispatch();

  const handleOnSubmit = async (data: LoginUserData) => {
    dispatch(signInUser(data));
  };

  const googleAuth = async () => {
    dispatch(signInWithGoogle());
  };

  // const userData = useSelector((state: any) => state.user.loginData);

  // if (userData) {
  //   console.log(userData);
  // }

  return (
    <div>
      <FormGenerator formConfig={loginFormConfig} onSubmit={handleOnSubmit} />
      <button onClick={googleAuth}>Log in with google</button>
    </div>
  );
};

export default Login;
