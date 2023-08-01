import type { PageHeaderProps } from '@/components/types'
import * as S from './styles'

export function PageHeader({ title = '', description = '' }: PageHeaderProps) {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
    </S.Container>
  )
}
