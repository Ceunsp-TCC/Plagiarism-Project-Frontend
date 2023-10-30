'use client'
'use client'
import { ortographyCorrectionsServices } from '@services'
import { useQuery } from '@tanstack/react-query'
import { useOrtographicCorrectionTableStore } from '@store'

export function useGetCorrections() {
  const { currentPage, filters, setCurrentPage } =
    useOrtographicCorrectionTableStore()
  const {
    data: ortographicCorrections,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['ortography-corrections', currentPage, filters],
    queryFn: () =>
      ortographyCorrectionsServices.getAll({
        currentPage,
        identifier: filters.identifier,
      }),
    refetchOnWindowFocus: false,
    retry: false,
  })

  const isEmpty = isError
  const numberPages = ortographicCorrections?.totalPages
  const enabledPagination = ortographicCorrections?.totalRegisters! > 10

  return {
    ortographicCorrections,
    isLoading,
    currentPage,
    numberPages,
    enabledPagination,
    isEmpty,
    setCurrentPage,
  }
}
