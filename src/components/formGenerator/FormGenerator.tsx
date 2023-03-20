import { useForm } from 'react-hook-form';
import { FormProps, FormConfig} from './formInterface';

const FormGenerator = (props:FormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm();

  const fieldWatched = watch();

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit(() => props.onSubmit(fieldWatched))}>
        {props.formConfig.map((config: FormConfig) => (
          <div key={config.name} className="form__group">
            <input
              type={config.type}
              className={config.className}
              value={config.value}
              placeholder={config.placeholder}
              {...register(config.name, config.validation)}
              data-testid={config.name}
            />
            {errors[config.name]?.type === 'required' && (
              <span role="alert">
                This field is required!
              </span>
            )}
            {errors[config.name]?.type === 'minLength' && (
              <span role="alert">
                Password cannot be shorter than 8 characters!
              </span>
            )}
            {errors[config.name]?.type === 'maxLength' && (
              <span role="alert" >
                Password cannot be longer than 20 characters!
              </span>
            )}
          </div>
        ))}
      </form>
    </div>
  );
};

export default FormGenerator;
