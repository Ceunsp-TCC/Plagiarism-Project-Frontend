import { AcademicPaper } from '@/services'
import { useQueryClient } from '@tanstack/react-query'

export const useGetDataAcademicPaper = () => {
  const queryClient = useQueryClient()
  const data = queryClient.getQueriesData({
    queryKey: ['academic-paper'],
  })
  const dataAcademicPaper = data[0][1] as AcademicPaper
  return {
    dataAcademicPaper,
  }
}
