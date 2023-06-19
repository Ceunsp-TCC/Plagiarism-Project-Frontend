import type { InputProps } from '@/components/types'
import { FieldValues } from 'react-hook-form'
import './styles.css'
export function Input<TFormValues extends FieldValues>({
  children,
  className = '',
  hasError = false,
  name,
  type = 'text',
  errorMessage,
  register,
  ...rest
}: InputProps<TFormValues>) {
  const isInputNumber = type === 'number'
  return (
    <div className={`${className} `}>
      {children}
      {register ? (
        <input
          {...register(name!, { valueAsNumber: isInputNumber })}
          type={type}
          {...rest}
          autoComplete="disabled-autocomplete"
          className={`input ${hasError && 'input-has-error'}`}
        />
      ) : (
        <input
          autoComplete="disabled-autocomplete"
          type={type}
          {...rest}
          className={`input ${hasError && 'input-has-error'}`}
        />
      )}
      <div className="container-error-message-input">
        {errorMessage && errorMessage()}
      </div>
    </div>
  )
}
