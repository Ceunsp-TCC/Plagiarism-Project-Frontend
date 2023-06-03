import { variant } from '@/components/types'
export const transformIconVariant = (variant: variant) => {
  switch (variant) {
    case 'primary':
      return 'fill-icon-button-primary'
    case 'secondary':
      return 'fill-gray-400'
  }
}
