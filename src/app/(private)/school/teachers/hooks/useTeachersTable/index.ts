'use client'
import { teacherServices } from '@services'
import { useQuery } from '@tanstack/react-query'
import { useTeachersStore } from '@store'

export function useTeachersTable() {
  const { currentPage, filters, setCurrentPage } = useTeachersStore()
  const {
    data: teachers,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['teachers', currentPage, filters],
    queryFn: () =>
      teacherServices.getAll({
        currentPage,
        name: filters.name,
      }),
    refetchOnWindowFocus: false,
    retry: false,
  })

  const isEmpty = isError
  const numberPages = teachers?.totalPages
  const enabledPagination = teachers?.totalRegisters! > 10

  return {
    teachers,
    isLoading,
    currentPage,
    numberPages,
    enabledPagination,
    isEmpty,
    setCurrentPage,
  }
}
