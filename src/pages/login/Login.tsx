import FormGenerator from '../../components/formGenerator/FormGenerator';
import { loginFormConfig } from './login.config';
import { signInUser, signInWithGoogle } from '../../store/slices/users/authService';
import { useAppDispatch } from '../../hooks/global';
import { useSelector } from 'react-redux';
import useAuth from '../../hooks/useLogin';
export interface LoginUserData {
  email: string;
  password: string;
}

const Login = () => {
  const dispatch = useAppDispatch();
  const { authenticated, user, loading } = useAuth();

  const handleOnSubmit = async (data: LoginUserData) => {
    dispatch(signInUser(data));
  };

  const handleGoogleSignIn = async () => {
    dispatch(signInWithGoogle());
  };

  const { hasError } = useSelector((state: any) => state.user);

  if (authenticated) {
    return <div>Logged in</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (hasError) {
    return <div>Error</div>;
  }

  if (user?.email) {
    return <div>Logged in</div>;
  }

  return (
    <div>
      <FormGenerator formConfig={loginFormConfig} onSubmit={handleOnSubmit} />
      <button onClick={handleGoogleSignIn}>Sign in with Google</button>
    </div>
  );
};

export default Login;
