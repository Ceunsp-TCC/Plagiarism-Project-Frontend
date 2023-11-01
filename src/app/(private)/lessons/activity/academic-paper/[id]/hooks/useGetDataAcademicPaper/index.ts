import { AcademicPaper } from '@/services'
import { useQueryClient } from '@tanstack/react-query'

export const useGetDataAcademicPaper = () => {
  const queryClient = useQueryClient()
  const data = queryClient.getQueriesData({
    queryKey: ['academic-paper'],
  })
  const academicPaper = data[0][1] as AcademicPaper

  const analysisStatus = academicPaper.analysisStatus
  const isCompleted = analysisStatus === 'COMPLETED'
  const isPending = analysisStatus === 'PENDING'
  const isNotComplete = academicPaper.analysisStatus !== 'COMPLETED'
  const hasSources = isCompleted && academicPaper.report!.sources.length > 0
  const sources = academicPaper.report?.sources
  const report = academicPaper.report

  return {
    isCompleted,
    isPending,
    isNotComplete,
    hasSources,
    sources,
    report,
    analysisStatus,
  }
}
