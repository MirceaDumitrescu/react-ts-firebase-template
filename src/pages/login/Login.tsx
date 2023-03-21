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

  const userData = useSelector((state: any) => state.user.loginData);

  if (userData) {
    console.log(userData);
  }

  return (
    <div>
      <FormGenerator formConfig={loginFormConfig} onSubmit={handleOnSubmit} />
    </div>
  );
};

export default Login;
