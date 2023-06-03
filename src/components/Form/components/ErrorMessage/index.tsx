import { ErrorMessageProps } from '@/components/types'
export function ErrorMessage({ children }: ErrorMessageProps) {
  return <p className="error-message">{children}</p>
}
