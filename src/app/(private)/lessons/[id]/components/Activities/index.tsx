'use client'
import { ActivityItem } from './components'
import { SectionLoading, TableLoading } from '@components'
import { useGetActivities } from '@/app/(private)/lessons/[id]/hooks'
import * as S from './styles'

export function Activities() {
  const { activities, isLoading, isEmpty } = useGetActivities()

  if (isLoading) {
    return <TableLoading />
  }
  return (
    <S.ContainerItems>
      {!isEmpty && (
        <>
          <S.Title>Atividades</S.Title>
          {activities?.map((activity) => (
            <ActivityItem
              key={activity.id}
              title={activity.title}
              type={activity.type}
              comments={activity.comments}
              createdAt={activity.createdAt}
              onClick={() => console.log('click')}
            />
          ))}
        </>
      )}
    </S.ContainerItems>
  )
}
