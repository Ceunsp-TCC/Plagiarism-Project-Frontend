import type { SelectLabelProps } from '@/components/types'
export function SelectLabel({
  children,
  className = '',
  hasError = false,
}: SelectLabelProps) {
  return (
    <span className={`select-label ${className} ${hasError && 'text-red-600'}`}>
      {children}
    </span>
  )
}
