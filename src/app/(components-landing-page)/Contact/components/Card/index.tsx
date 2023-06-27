import type { CardContactProps } from '@/app/(components-landing-page)/types'
import * as S from './styles'

export function CardContact({ title = '', info = '', Icon }: CardContactProps) {
  return (
    <S.Container>
      <S.Card>
        <S.ContainerIcon>
          <Icon className="fill-blue-500 text-2xl" />
        </S.ContainerIcon>
        <S.TitleCard>{title}</S.TitleCard>
        <S.InfoCard>{info}</S.InfoCard>
      </S.Card>
    </S.Container>
  )
}
