'use client'
import { ShowToast } from '@components'
import { useParams } from 'next/navigation'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { sendAcademicPaperSchema } from '@/app/(private)/lessons/activity/[id]/schemas'
import { academicPapersServices } from '@services'
import { useNavigation } from '@hooks'

import type { SendAcademicPaperFields } from '@/app/(private)/lessons/activity/[id]/types'
import type { DefaultResponse } from '@types'
import type { AxiosError } from 'axios'
import type { SendAcademicPaperProps } from '@services'

export function useSendAcademicPaper() {
  const { id } = useParams()
  const { navigateBack } = useNavigation()
  const queryClient = useQueryClient()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SendAcademicPaperFields>({
    criteriaMode: 'all',
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    resolver: zodResolver(sendAcademicPaperSchema),
  })
  const hasPaper = watch('paper') !== undefined && watch('paper').length > 0
  const paperName = hasPaper ? watch('paper')[0].name : undefined
  const { mutate, isLoading } = useMutation(
    (data: SendAcademicPaperProps) =>
      academicPapersServices.send(data, Number(id)),
    {
      onSuccess: () => {
        ShowToast({
          title: 'Trabalho enviado com sucesso!',
          description: 'O trabalho foi enviado e será avaliado pelo professor',
          toastType: 'SUCCESS',
        })
        queryClient.refetchQueries(['activities'])
        navigateBack()
      },
      onError: (error: AxiosError<DefaultResponse>) => {
        const ultrapassedMaxWords =
          error.response?.data.message ===
          'The number of words in the PDF exceeds the limit of words'
        ShowToast({
          title: 'Ocorreu um erro',
          toastType: 'ERROR',
          description: ultrapassedMaxWords
            ? 'O limite atual de palavras para teste foi excedido'
            : 'Ocorreu um erro ao enviar o trabalho, tente novamente mais tarde!',
        })
      },
    },
  )

  const onSubmit = (data: SendAcademicPaperFields) => {
    mutate({
      ...data,
      paper: data.paper[0],
    })
  }
  return {
    errors,
    paperName,
    isLoading,
    register,
    handleSubmit,
    onSubmit,
  }
}
