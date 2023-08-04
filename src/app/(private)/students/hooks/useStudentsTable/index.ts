'use client'
import { studentServices } from '@services'
import { isError, useQuery } from '@tanstack/react-query'
import { useStudentsStore } from '@store'

export function useStudentsTable() {
  const { currentPage, filters, setCurrentPage } = useStudentsStore()
  const {
    data: students,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['students', currentPage, filters],
    queryFn: () =>
      studentServices.getAll({
        currentPage,
        name: filters.name,
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
