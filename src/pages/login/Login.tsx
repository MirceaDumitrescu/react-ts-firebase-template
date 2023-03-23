import FormGenerator from '../../components/formGenerator/FormGenerator';
import { loginFormConfig } from './login.config';
import { signInUser } from '../../store/slices/users/authService';
import { useAppDispatch } from '../../hooks/global';
import { useSelector } from 'react-redux';

export interface LoginUserData {
  email: string;
  password: string;
}

const Login = () => {
  const dispatch = useAppDispatch();

  const handleOnSubmit = async (data: LoginUserData) => {
    dispatch(signInUser(data));
  };

  const { isLoading, isLoggedIn, hasError, loginData } = useSelector((state: any) => state.user);

  console.log(loginData);
  if (isLoggedIn) {
    return <div>Logged in</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (hasError) {
    return <div>Error</div>;
  }

  if (loginData.email) {
    return <div>Logged in</div>;
  }

  return (
    <div>
      <FormGenerator formConfig={loginFormConfig} onSubmit={handleOnSubmit} />
    </div>
  );
};

export default Login;
