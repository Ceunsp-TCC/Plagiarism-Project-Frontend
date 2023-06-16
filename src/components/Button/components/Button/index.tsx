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
        disabled || isLoading ? 'cursor-default pointer-events-none' : ''
      }`}
    >
      {loading && isLoading && loading()}
      <button disabled={disabled || isLoading} type={type} {...rest}>
        {isLoading ? 'Processando...' : children}
      </button>
    </div>
  )
}
