import FormGenerator from '../../components/formGenerator/FormGenerator';
import { RegisterFormConfig } from './register.config';
import { registerUser } from '../../store/slices/users/authService';
import { useAppDispatch } from '../../hooks/global';

export interface RegisterUserData {
  firstName: string;
  lastName: string;
  displayName: string;
  email: string;
  password: string;
  phone: string;
}

const Register = () => {
  const dispatch = useAppDispatch();

  const handleOnSubmit = async (data: RegisterUserData) => {
    dispatch(registerUser(data));
  };

  return (
    <div>
      <FormGenerator formConfig={RegisterFormConfig} onSubmit={handleOnSubmit} />
    </div>
  );
};

export default Register;
