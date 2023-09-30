import * as S from './styles'
import type { ItemProps } from '@/app/(private)/lessons/[id]/types'

export function ActivityItem({
  title = '',
  comments = '',
  createdAt = '',
  type = 'ACADEMICPAPER',
  onClick,
}: ItemProps) {
  const isAcademicPaper = type === 'ACADEMICPAPER'
  return (
    <S.Card onClick={onClick}>
      <S.ContainerTitleAndObservationAndCreatedAt>
        <S.Title>
          {title}
          <S.ActivityType>
            - {isAcademicPaper ? 'Trabalho' : 'Aviso'}
          </S.ActivityType>
        </S.Title>
        <S.Observation>{comments}</S.Observation>
        <S.CreatedAt>{createdAt}</S.CreatedAt>
      </S.ContainerTitleAndObservationAndCreatedAt>
    </S.Card>
  )
}
