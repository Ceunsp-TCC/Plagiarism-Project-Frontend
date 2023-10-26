// import { LoadingReport } from './components'
import { HeaderPlagiarismDetails } from './components'
import * as S from './styles'

export function Header() {
  return (
    <S.Container>
      <HeaderPlagiarismDetails />
      <S.WrapperButton>{/* <LoadingReport /> */}</S.WrapperButton>
    </S.Container>
  )
}
