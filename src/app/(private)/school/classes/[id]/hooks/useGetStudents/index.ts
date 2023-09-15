'use client'
import { classServices } from '@services'
import { useQuery } from '@tanstack/react-query'
import { useClasseStore } from '@store'
import { useParams } from 'next/navigation'

export function useGetStudents() {
  const { id } = useParams()
  const { currentPage, setCurrentPage } = useClasseStore()
  const {
    data: students,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['students-by-class', currentPage],
    queryFn: () =>
      classServices.getStudents({
        classId: Number(id),
        currentPage,
      }),
    refetchOnWindowFocus: false,
    retry: false,
  })

  const isEmpty = isError
  const numberPages = students?.totalPages
  const enabledPagination = students?.totalRegisters! > 10

  return {
    students,
    isLoading,
    currentPage,
    numberPages,
    enabledPagination,
    isEmpty,
    setCurrentPage,
  }
}
