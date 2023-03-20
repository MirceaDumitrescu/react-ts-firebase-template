export const loginFormConfig = [
     {
        name: 'email',
        type: 'email',
        className: 'form__group__input',
        placeholder: 'Enter your email',
        validation:{required: true}
     },
        {
        name: 'password',
        className: 'form__group__input',
        type: 'password',
        placeholder: 'Enter your password',
        validation:{required: true}
        },
        {
         name: 'button',
         className: 'form__group__button',
         type: 'button',
         value: 'Login',
         placeholder: 'Login',
         validation:{required: ''}
        }
    ]