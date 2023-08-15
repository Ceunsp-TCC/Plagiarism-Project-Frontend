'use client'
import { courseServices } from '@services'
import { useQuery } from '@tanstack/react-query'
import { useCoursesStore } from '@store'

export function useCoursesTable() {
  const { currentPage, filters, setCurrentPage } = useCoursesStore()
  const {
    data: courses,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['courses', currentPage, filters],
    queryFn: () =>
      courseServices.getAll({
        currentPage,
        name: filters.name,
      }),
    refetchOnWindowFocus: false,
    retry: false,
  })

  const isEmpty = isError
  const numberPages = courses?.totalPages
  const enabledPagination = courses?.totalRegisters! > 5
  const enabledItems = !isError && !isLoading

  return {
    courses,
    isLoading,
    currentPage,
    numberPages,
    enabledPagination,
    isEmpty,
    enabledItems,
    setCurrentPage,
  }
}
