import type { SelectProps } from '@/components/types'
import type { FieldValues } from 'react-hook-form'

export function Select<TFormValues extends FieldValues>({
  label,
  errorMessage,
  register,
  children,
  className = '',
  hasError = false,
  name,
  ...rest
}: SelectProps<TFormValues>) {
  return (
    <div
      className={`select-wrapper ${className} ${hasError && 'input-has-error'}`}
    >
      {label && label()}
      {register ? (
        <select {...register(name!)} {...rest} className="select">
          {children}
        </select>
      ) : (
        <select {...rest} className="select">
          {children}
        </select>
      )}
      <div className="my-5">{errorMessage && errorMessage()}</div>
    </div>
  )
}
