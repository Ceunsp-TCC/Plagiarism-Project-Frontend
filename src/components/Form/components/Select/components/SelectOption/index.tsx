import type { SelectOptionProps } from '@/components/types'
export function SelectOption({
  className = '',
  children,
  ...rest
}: SelectOptionProps) {
  return (
    <option {...rest} className={`bg-gray-600  font-semibold ${className}`}>
      {children}
    </option>
  )
}
