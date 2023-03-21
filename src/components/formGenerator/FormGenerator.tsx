import { useForm } from 'react-hook-form';

interface TConfig {
  label?: string;
  type: string;
  name: string;
  value?: string;
  placeholder?: string;
  validation?: any;
  disabled?: boolean;
  className?: string;
}

interface FormProps {
  formConfig: TConfig[];
  onSubmit: (data: any) => void;
}

const FormGenerator = ({ formConfig, onSubmit }: FormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm();

  const fieldsWatched = watch();
  const isValid = Object.keys(errors).length === 0;

  return (
    <form onSubmit={handleSubmit(() => onSubmit(fieldsWatched))} className="form-generator">
      {formConfig.map((config: TConfig) => (
        <div key={config.name} className="form-generator">
          {errors[config.name] && <span className="input-error">This field is required</span>}
          {config.type && (
            <>
              <label htmlFor={config.name}>{config.label}</label>
              <input
                disabled={config.disabled}
                type={config.type}
                placeholder={config.placeholder}
                className={`w-100 input-field ${config.className}`}
                value={config.value}
                {...register(config.name, config.validation)}
              />
            </>
          )}
        </div>
      ))}
      <input type="submit" disabled={!isValid} className="form-button" value="Submit" />
    </form>
  );
};

export default FormGenerator;
