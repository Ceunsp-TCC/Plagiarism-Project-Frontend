'use client'
import { academicPapersServices } from '@services'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'next/navigation'

export function useGetAcademicPaper() {
  const { id } = useParams()
  const timeRefetchInterval = 10000 // 10 seconds

  const { data: academicPaper, isLoading } = useQuery({
    queryKey: ['academic-paper'],
    queryFn: () =>
      academicPapersServices.getById({ academicPaperId: Number(id) }),
    refetchOnWindowFocus: false,
    retry: false,
    refetchIntervalInBackground: true,
    refetchInterval: timeRefetchInterval,
  })

  const hasAvaliation = academicPaper?.note !== null
  return {
    academicPaper,
    isLoading,
    hasAvaliation,
  }
}
