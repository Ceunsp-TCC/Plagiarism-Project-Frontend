import type { TextAreaLabelProps } from '@/components/types'
export function TextAreaLabel({
  children,
  className = '',
  hasError = false,
}: TextAreaLabelProps) {
  return (
    <span
      className={`text-area-label ${className} ${hasError && 'text-red-600'}`}
    >
      {children}
    </span>
  )
}
