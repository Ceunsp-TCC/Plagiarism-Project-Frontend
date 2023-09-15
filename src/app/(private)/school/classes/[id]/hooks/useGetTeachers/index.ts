'use client'
import { teacherServices } from '@services'
import { useQuery } from '@tanstack/react-query'

export function useGetTeachers() {
  const { data: teachers, isLoading } = useQuery({
    queryKey: ['teacher-for-link-lesson'],
    queryFn: () => teacherServices.getAll({ numberlinesPerPage: 500 }),
    refetchOnWindowFocus: false,
    retry: false,
  })

  return {
    teachers,
    isLoading,
  }
}
