import { useParams } from 'next/navigation'
import { useGetDataAcademicPaper } from '../useGetDataAcademicPaper'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { academicPapersServices } from '@/services'
import { ShowToast } from '@/components'

export const useHeaderPlagiarismDetails = () => {
  const { dataAcademicPaper } = useGetDataAcademicPaper()
  const reportsHasNull = dataAcademicPaper.report === null
  const { id } = useParams()

  const query = useQueryClient()

  const onSuccess = async () => {
    await query.invalidateQueries({ queryKey: ['academic-paper'] })
    ShowToast({
      title: 'Sucesso',
      description: 'Trabalho enviado para análise',
      toastType: 'SUCCESS',
    })
  }

  const onError = () => {
    ShowToast({
      title: 'Falha',
      description: 'Falha ao enviar trabalho, por favor tente novamente!',
      toastType: 'ERROR',
    })
  }

  const { data, mutate, isLoading } = useMutation({
    mutationKey: ['send-academic-paper-to-review'],
    mutationFn: () =>
      academicPapersServices.sendToReview({ academicPaperId: Number(id) }),
    onSuccess,
    onError,
  })

  const handleSendAccademicPaperToReview = () => {
    mutate()
  }
  return {
    dataAcademicPaper,
    reportsHasNull,
    handleSendAccademicPaperToReview,
    isLoading,
  }
}
