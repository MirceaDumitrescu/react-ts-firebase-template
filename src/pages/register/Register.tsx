import FormGenerator from "../../components/formGenerator/FormGenerator";
import { RegisterFormConfig } from "./RegisterFormConfig";
import { registerUser } from "../../store/slices/users/loginRegisterUser";
import { createUser } from "../../api/firebase/auth";
import { create } from "react-test-renderer";

export interface RegisterUserData {
  firstName: string;
  lastName: string;
  displayName: string;
  email: string;
  password: string;
  phone: string;
}

const Register = () => {
  return (
    <div>
      <FormGenerator formConfig={RegisterFormConfig} onSubmit={createUser} />
    </div>
  );
};

export default Register;
