import {useForm} from 'react-hook-form'
import {FormConfig} from './interfaces'


const FormGenerator = (props:FormConfig[], onSubmit:CallableFunction) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
      } = useForm();

      const fieldWatched = watch();

    return(
        <div className='container'>
            <form className='form' onSubmit={handleSubmit(()=>onSubmit(fieldWatched))}>
                {props.map((config:FormConfig) => (
<div key={config.name} className="form-group">
<input
type={config.type}
className={config.className}
value={config.value}
placeholder={config.placeholder}
{...register(config.name, config.validation)}
data-testid={config.name}
/>
{errors[config.name]?.type === "required" && (
    <span role="alert" data-testid='form-error'>
        This field is required!
    </span>
) }
{errors[config.name]?.type === "minLength" && (
              <span role="alert" data-testid="form-error">
                Password cannot be shorter than 8 characters!
              </span>
            )}
            {errors[config.name]?.type === "maxLength" && (
              <span role="alert" data-testid="form-error">
                Password cannot be longer than 20 characters!
              </span>
            )}
</div>
                ))}

            </form>
        </div>
    )
}

export default FormGenerator