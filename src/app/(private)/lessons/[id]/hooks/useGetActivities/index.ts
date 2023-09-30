import { activitiesServices } from '@services'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'next/navigation'

export function useGetActivities() {
  const { id } = useParams()
  const {
    data: activities,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['activities'],
    queryFn: () => activitiesServices.getAll({ lessonId: Number(id) }),
    refetchOnWindowFocus: false,
    retry: false,
  })

  const isEmpty = isError
  return {
    activities,
    isLoading,
    isEmpty,
  }
}
