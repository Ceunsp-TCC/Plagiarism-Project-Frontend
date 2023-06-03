import { ButtonIconProps } from '@/components/types'
import { transformIconVariant } from '@/components/Button/functions'

export function ButtonIcon({ Icon, variant = 'primary' }: ButtonIconProps) {
  return (
    <Icon
      className={`${transformIconVariant(variant)} text-xl relative right-2`}
    />
  )
}
