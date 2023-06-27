import type { BadgeProps } from '@/app/(components-landing-page)/types'
import * as S from './styles'

export function Badge({ text }: BadgeProps) {
  return (
    <S.Container>
      <S.Badge>
        <S.ContainerIcon>
          <S.CheckboxIcon />
        </S.ContainerIcon>
        <S.ContainerText>
          <S.Text>{text}</S.Text>
        </S.ContainerText>
      </S.Badge>
    </S.Container>
  )
}
