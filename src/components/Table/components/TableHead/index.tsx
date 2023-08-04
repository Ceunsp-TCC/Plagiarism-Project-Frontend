import type { TableHeadProps } from '@/components/types'
import * as S from './styles'

export function TableHead({ children, ...props }: TableHeadProps) {
  return <S.THead {...props}>{children}</S.THead>
}
