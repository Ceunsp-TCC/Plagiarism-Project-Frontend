import type { TableBodyProps } from '@/components/types'
import * as S from './styles'
export function TableBody({ children, ...props }: TableBodyProps) {
  return <S.Tbody {...props}>{children}</S.Tbody>
}
