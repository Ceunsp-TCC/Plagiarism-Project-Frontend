import { ButtonProps } from '@/components/types'
import { transformVariant } from '@/components/Button/functions'
import './styles.css'

export function Button({
  children,
  variant = 'primary',
  label = '',
  type = 'button',
  onClick,
  loading,
  className = '',
  isLoading = false,
  disabled = false,
  ...rest
}: ButtonProps) {
  return (
    <div
      onClick={onClick}
      className={`${transformVariant(variant)} ${className} ${
        disabled || isLoading ? 'cursor-default pointer-events-none' : ''
      }`}
    >
      {loading && isLoading && loading()}
      {children}
      <button disabled={disabled || isLoading} type={type} {...rest}>
        {isLoading ? 'Processando...' : label}
      </button>
    </div>
  )
}
