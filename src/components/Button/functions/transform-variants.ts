import { variant } from '@/components/types'
export const transformVariant = (variant: variant) => {
  switch (variant) {
    case 'primary':
      return 'btn-primary'
    case 'secondary':
      return 'btn-secondary'
    case 'terciary':
      return 'btn-terciary'
  }
}
