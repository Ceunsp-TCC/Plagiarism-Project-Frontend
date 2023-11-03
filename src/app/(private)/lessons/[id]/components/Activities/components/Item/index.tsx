import * as S from './styles'
import { Badge } from '@components'
import type { ItemProps } from '@/app/(private)/lessons/[id]/types'

export function ActivityItem({
  title = '',
  comments = '',
  createdAt = '',
  type = 'ACADEMICPAPER',
  sent = false,
  isStudent = false,
  note = null,
  onClick,
}: ItemProps) {
  const isAcademicPaper = type === 'ACADEMICPAPER'
  const hasNote = note !== null
  return (
    <S.Card onClick={onClick} className={sent ? 'pointer-events-none' : ''}>
      <S.ContainerTitleAndObservationAndCreatedAt>
        <S.Title>
          {title}
          <S.ActivityType>
            - {isAcademicPaper ? 'Trabalho' : 'Aviso'}
          </S.ActivityType>
        </S.Title>
        <S.ContainerObservationAndIsSent>
          <S.Observation>{comments}</S.Observation>
          {isStudent && isAcademicPaper && (
            <S.BadgesContainer>
              <S.BadgeWrapper>
                <Badge color={sent ? 'GREEN' : 'RED'}>
                  {sent ? 'Enviado' : 'Não enviado'}
                </Badge>
              </S.BadgeWrapper>
              <S.BadgeWrapper>
                <Badge color={hasNote ? 'GREEN' : 'YELLOW'}>
                  {hasNote ? note : 'Não avaliado'}
                </Badge>
              </S.BadgeWrapper>
            </S.BadgesContainer>
          )}
        </S.ContainerObservationAndIsSent>
        <S.CreatedAt>{createdAt}</S.CreatedAt>
      </S.ContainerTitleAndObservationAndCreatedAt>
    </S.Card>
  )
}
