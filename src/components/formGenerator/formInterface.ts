export interface FormConfig {
  name: string;
  type: string;
  className: string;
  value: string;
  placeholder: string;
  validation: object;
}

export interface FormProps {
  formConfig: FormConfig[];
  onSubmit: CallableFunction
}




