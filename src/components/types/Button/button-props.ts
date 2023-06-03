import { ButtonHTMLAttributes } from 'react'
import { IconType } from 'react-icons'
import type { ReactNode } from 'react'

export type variant = 'primary' | 'secondary' | 'terciary'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label?: string
  variant?: variant
  onClick?: () => void
  className?: string
  disabled?: boolean
  isLoading?: boolean
  loading?: () => ReactNode
}

export type ButtonIconProps = {
  Icon: IconType
  variant?: variant
}
