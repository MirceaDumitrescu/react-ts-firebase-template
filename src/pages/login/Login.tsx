import FormGenerator from '../../components/formGenerator/FormGenerator';
import { loginFormConfig } from './login.config';
import { logoutUser, signInUser, signInWithGoogle } from '../../store/slices/users/authService';
import { useAppDispatch } from '../../hooks/global';
import { useSelector } from 'react-redux';
import useAuth from '../../hooks/useLogin';
import { SpinnerComponent } from '../../components/loadingSpinner/Spinner';
import LinkWrapper from '../../components/linkWrapper/Link';
import ConditionalRendering from '../../components/conditionalRendering/ConditionalRendering';

export interface LoginUserData {
  email: string;
  password: string;
}

const Login = () => {
  const dispatch = useAppDispatch();
  const { authenticated, loading } = useAuth();

  const handleOnSubmit = async (data: LoginUserData) => {
    dispatch(signInUser(data));
  };

  const handleGoogleSignIn = async () => {
    dispatch(signInWithGoogle());
  };

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  const { hasError, loginData, isLoading } = useSelector((state: any) => state.user);

  if (loading || isLoading) {
    return <SpinnerComponent variant="large" />;
  }

  if (hasError) {
    return <div>Error</div>;
  }

  if (authenticated) {
    return (
      <div>
        <p>Logged in</p>
        <button onClick={handleLogout}>Logout</button>
        {loginData.role && <p>Role: {loginData.role}</p>}
        <LinkWrapper url="/admin/dashboard">Dashboard</LinkWrapper>
        <ConditionalRendering condition={loginData.role === 'admin'}>
          <p> Admin only content</p>
        </ConditionalRendering>
      </div>
    );
  }

  return (
    <div>
      <FormGenerator formConfig={loginFormConfig} onSubmit={handleOnSubmit} />
      <button onClick={handleGoogleSignIn}>Sign in with Google</button>
    </div>
  );
};

export default Login;
