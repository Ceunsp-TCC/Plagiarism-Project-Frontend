import type { InputProps } from '@/components/types'
import { FieldValues } from 'react-hook-form'
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
  return (
    <div
      className={`input-container ${className} ${
        hasError && 'input-has-error'
      }`}
    >
      {children}
      {register ? (
        <input {...register(name!)} type={type} {...rest} className="input" />
      ) : (
        <input type={type} {...rest} className="input" />
      )}

      {errorMessage && errorMessage()}
    </div>
  )
}
