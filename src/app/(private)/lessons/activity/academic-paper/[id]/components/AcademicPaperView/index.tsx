import * as S from './styles'

export function AcademicPaperView({ url = '' }: { url: string }) {
  return (
    <S.Container>
      <S.Paper src={url} role="academic-paper" />
    </S.Container>
  )
}
