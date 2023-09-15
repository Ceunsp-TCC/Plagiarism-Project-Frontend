'use client'
import { classServices } from '@services'
import { useQuery } from '@tanstack/react-query'

export function useGetClasses() {
  const { data: classes, isLoading } = useQuery({
    queryKey: ['classes-for-link-student'],
    queryFn: () => classServices.getAll({ numberlinesPerPage: 500 }),
    refetchOnWindowFocus: false,
    retry: false,
  })

  return {
    classes,
    isLoading,
  }
}
