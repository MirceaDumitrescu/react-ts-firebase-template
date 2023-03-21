import React from 'react';
import FormGenerator from '../../components/formGenerator/FormGenerator';
import { loginFormConfig } from './loginFormConfig';
import { signInUser } from '../../store/slices/users/loginRegisterUser';

export interface LoginUserData {
  email: string;
  password: string;
}

const Login = () => {
  return (
    <div>
      <FormGenerator formConfig={loginFormConfig} onSubmit={signInUser} />
    </div>
  );
};

export default Login;
