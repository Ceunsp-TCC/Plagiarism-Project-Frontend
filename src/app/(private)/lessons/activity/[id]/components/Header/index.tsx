import * as S from './styles'

export function Header({
  title = '',
  comments = '',
}: {
  title: string
  comments: string
}) {
  return (
    <>
      <S.Title>{title}</S.Title>
      <S.Comments>{comments}</S.Comments>
    </>
  )
}
