'use client'
import { academicPapersServices } from '@services'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'next/navigation'

export function useGetAcademicPaper() {
  const { id } = useParams()

  const { data: academicPaper, isLoading } = useQuery({
    queryKey: ['academic-paper'],
    queryFn: () =>
      academicPapersServices.getById({ academicPaperId: Number(id) }),
    refetchOnWindowFocus: false,
    retry: false,
  })

  return {
    academicPaper,
    isLoading,
  }
}
