'use client'
import { activitiesServices } from '@services'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'next/navigation'

export function useGetActivity() {
  const { id } = useParams()
  const {
    data: activity,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['activity'],
    queryFn: () => activitiesServices.getById({ activityId: Number(id) }),
    refetchOnWindowFocus: false,
    retry: false,
  })

  const isEmpty = isError

  return {
    activity,
    isLoading,
    isEmpty,
  }
}
