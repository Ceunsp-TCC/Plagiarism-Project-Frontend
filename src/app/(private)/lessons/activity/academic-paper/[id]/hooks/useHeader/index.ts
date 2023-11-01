import { useParams } from 'next/navigation'
import { useGetDataAcademicPaper } from '../useGetDataAcademicPaper'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { academicPapersServices } from '@services'
import { ShowToast } from '@components'

export const useHeader = () => {
  const queryClient = useQueryClient()
  const { id } = useParams()
  const { isPending, isNotComplete, report } = useGetDataAcademicPaper()

  const onSuccess = () => {
    queryClient.refetchQueries(['academic-paper'])
    ShowToast({
      title: 'Trabalho enviado para análise com sucesso!',
      description:
        'O pedido de análise está sendo processado, assim que terminar você irá receber uma notificação!',
      toastType: 'SUCCESS',
    })
  }

  const onError = () => {
    ShowToast({
      title: 'Falha',
      description:
        'Falha ao enviar trabalho, por favor tente novamente mais tarde!',
      toastType: 'ERROR',
    })
  }

  const { mutate, isLoading } = useMutation({
    mutationKey: ['send-academic-paper-to-review'],
    mutationFn: () =>
      academicPapersServices.sendToReview({ academicPaperId: Number(id) }),
    onSuccess,
    onError,
  })

  const sendAcademicPaperToReview = () => {
    mutate()
  }
  return {
    isPending,
    isLoading,
    isNotComplete,
    report,
    sendAcademicPaperToReview,
  }
}
