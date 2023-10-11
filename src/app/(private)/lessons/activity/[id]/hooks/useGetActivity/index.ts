'use client'
import { activitiesServices } from '@services'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'next/navigation'
import { usePermissions } from '@hooks'

export function useGetActivity() {
  const { checkHasPermission } = usePermissions()
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
  const isAcademicPaper = activity?.type === 'ACADEMICPAPER'
  const isEnabledToSendAcademicPaper =
    checkHasPermission('sendAcademicPaper') && isAcademicPaper

  return {
    activity,
    isLoading,
    isEmpty,
    isEnabledToSendAcademicPaper,
  }
}
