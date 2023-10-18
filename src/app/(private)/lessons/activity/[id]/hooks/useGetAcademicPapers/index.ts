import { academicPapersServices } from '@services'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'next/navigation'
import { useAcademicPaperTableStore } from '@store'
import { useNavigation } from '@hooks'

export function useGetAcademicPapers() {
  const { id } = useParams()
  const { currentPage, setCurrentPage } = useAcademicPaperTableStore()
  const { navigate } = useNavigation()

  const {
    data: academicPapers,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['academic-papers', currentPage],
    queryFn: () =>
      academicPapersServices.getAll({ activityId: Number(id), currentPage }),
    refetchOnWindowFocus: false,
    retry: false,
  })

  const enabledItems = !isError && !isLoading
  const isEmpty = isError
  const enabledPagination = academicPapers?.totalRegisters! > 5
  const numberPages = academicPapers?.totalPages

  return {
    academicPapers,
    isLoading,
    enabledItems,
    isEmpty,
    enabledPagination,
    numberPages,
    currentPage,
    setCurrentPage,
    navigate,
  }
}
