import { ButtonProps } from '@/components/types'
import { transformVariant } from '@/components/Button/functions'
import './styles.css'

export function Button({
  children,
  variant = 'primary',
  type = 'button',
  className = '',
  isLoading = false,
  disabled = false,
  onClick,
  loading,
  ...rest
}: ButtonProps) {
  return (
    <div
      onClick={onClick}
      className={`${transformVariant(variant)} ${className} ${
        isLoading ? 'py-1' : 'py-4'
      }${disabled || isLoading ? 'cursor-default pointer-events-none' : ''}`}
    >
      <button disabled={disabled || isLoading} type={type} {...rest}>
        {isLoading ? loading && loading() : children}
      </button>
    </div>
  )
}
