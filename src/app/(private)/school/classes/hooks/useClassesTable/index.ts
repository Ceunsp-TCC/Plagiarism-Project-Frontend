'use client'
import { classServices } from '@services'
import { useQuery } from '@tanstack/react-query'
import { useClassesStore } from '@store'
import { useNavigation } from '@hooks'

export function useClassesTable() {
  const { currentPage, filters, setCurrentPage } = useClassesStore()
  const { navigate } = useNavigation()

  const {
    data: classes,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['classes', filters, currentPage],
    queryFn: () =>
      classServices.getAll({
        currentPage,
        name: filters.name,
      }),
    refetchOnWindowFocus: false,
    retry: false,
  })

  const isEmpty = isError
  const numberPages = classes?.totalPages
  const enabledPagination = classes?.totalRegisters! > 10
  const enabledItems = !isError && !isLoading

  return {
    classes,
    isLoading,
    currentPage,
    numberPages,
    enabledPagination,
    isEmpty,
    enabledItems,
    setCurrentPage,
    navigate,
  }
}
