export const RegisterFormConfig = [
  {
    name: 'email',
    type: 'email',
    className: 'form__group__input',
    placeholder: 'Enter your email',
    validation: { required: true }
  },
  {
    name: 'password',
    className: 'form__group__input',
    type: 'password',
    placeholder: 'Enter your password',
    validation: { required: true }
  },
  {
    name: 'firstName',
    type: 'text',
    className: 'form__group__input',
    placeholder: 'Enter your first name',
    validation: { required: true }
  },
  {
    name: 'lastName',
    type: 'text',
    className: 'form__group__input',
    placeholder: 'Enter your last name',
    validation: { required: true }
  }
];
