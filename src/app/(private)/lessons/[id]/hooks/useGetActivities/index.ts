import { activitiesServices } from '@services'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'next/navigation'
import { useNavigation } from '@/hooks'

export function useGetActivities() {
  const { navigate } = useNavigation()
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

  const navigateToDetails = (activityId: number) => {
    navigate(`/lessons/activity/${activityId}`)
  }
  const isEmpty = isError
  return {
    activities,
    isLoading,
    isEmpty,
    navigateToDetails,
  }
}
