export interface FormConfig {
  name: string;
  type: string;
  className: string;
  value: string;
  placeholder: string;
  validation: object;
}

export interface CreateUserData {
  firstName: string;
  lastName: string;
  displayName: string;
  email: string;
  password: string;
  phone: string;
}

export interface LoginUserData {
  email: string;
  password: string;
}
