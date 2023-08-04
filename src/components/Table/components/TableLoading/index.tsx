import { SectionLoading } from '@components'
import * as S from './styles'

export function TableLoading() {
  return (
    <S.ContainerLoading>
      <S.WrapperLoading>
        <SectionLoading />
      </S.WrapperLoading>
    </S.ContainerLoading>
  )
}
