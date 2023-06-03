import type { TextAreaProps } from '@/components/types'
import { FieldValues } from 'react-hook-form'
export function TextArea<TFormValues extends FieldValues>({
  errorMessage,
  label,
  register,
  name,
  className = '',
  children,
  resizeDisabled = true,
  ...rest
}: TextAreaProps<TFormValues>) {
  return (
    <div className={`text-area-wrapper ${className}`}>
      {label && label()}
      {register ? (
        <textarea
          {...register(name!)}
          {...rest}
          className={`text-area ${resizeDisabled && 'resize-none'}`}
        ></textarea>
      ) : (
        <textarea
          {...rest}
          className={`text-area ${resizeDisabled && 'resize-none'}`}
        ></textarea>
      )}
      <div>{errorMessage && errorMessage()}</div>
    </div>
  )
}
