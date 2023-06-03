import type { InputLabelProps } from '@/components/types'

export function InputLabel({
  children,
  className = '',
  hasError = false,
}: InputLabelProps) {
  return (
    <label className={`input-label ${className} ${hasError && 'text-red-600'}`}>
      {children}
    </label>
  )
}
