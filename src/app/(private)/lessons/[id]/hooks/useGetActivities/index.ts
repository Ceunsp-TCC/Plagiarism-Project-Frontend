import { activitiesServices } from '@services'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'next/navigation'
import { useNavigation } from '@hooks'
import { useAuthStore } from '@store'

export function useGetActivities() {
  const { navigate } = useNavigation()
  const { data } = useAuthStore()
  const { id } = useParams()
  const isStudent = data.user.roleName === 'STUDENT'
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
    isStudent,
    navigateToDetails,
  }
}
