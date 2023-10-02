'use client'
import { ActivityItem } from './components'
import { TableLoading } from '@components'
import { useGetActivities } from '@/app/(private)/lessons/[id]/hooks'
import * as S from './styles'

export function Activities() {
  const { activities, isLoading, isEmpty, navigateToDetails } =
    useGetActivities()

  if (isLoading) {
    return <TableLoading />
  }
  return (
    <S.ContainerItems>
      <S.Title>Atividades</S.Title>
      {!isEmpty && (
        <>
          {activities?.map((activity) => (
            <ActivityItem
              key={activity.id}
              title={activity.title}
              type={activity.type}
              comments={activity.comments}
              createdAt={activity.createdAt}
              onClick={() => navigateToDetails(activity.id)}
            />
          ))}
        </>
      )}
    </S.ContainerItems>
  )
}
