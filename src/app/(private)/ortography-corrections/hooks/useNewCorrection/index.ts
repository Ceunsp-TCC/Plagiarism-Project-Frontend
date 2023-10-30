'use client'
import { useOrtographicCorrectionTableStore } from '@store'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { newCorrectionSchema } from '@/app/(private)/ortography-corrections/schemas'
import { ortographyCorrectionsServices } from '@services'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { ShowToast } from '@components'
import { newCorrectionErrorMessageAdapter } from '@/app/(private)/ortography-corrections/functions'
import type { CreateOrtographyError } from '@/app/(private)/ortography-corrections/functions'
import type { NewCorrectionFields } from '@/app/(private)/ortography-corrections/types'
import type { CreateOrtographicCorrectionProps } from '@services'
import type { DefaultResponse } from '@types'
import type { AxiosError } from 'axios'

export function useNewCorrection() {
  const queryClient = useQueryClient()
  const { isModalNewCorrectionOpen, setOpenModalNewCorrection } =
    useOrtographicCorrectionTableStore()

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<NewCorrectionFields>({
    criteriaMode: 'all',
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    resolver: zodResolver(newCorrectionSchema),
  })

  const hasFile =
    watch('original') !== undefined && watch('original').length > 0
  const fileName = hasFile ? watch('original')[0].name : undefined

  const onCloseModal = () => {
    reset()
    setOpenModalNewCorrection(false)
  }
  const { mutate, isLoading } = useMutation(
    (data: CreateOrtographicCorrectionProps) =>
      ortographyCorrectionsServices.create(data),
    {
      onSuccess: () => {
        onCloseModal()
        ShowToast({
          title: 'Arquivo enviado com sucesso!',
          description: 'Seu arquivo foi enviado para correção!',
          toastType: 'SUCCESS',
        })
        queryClient.refetchQueries(['ortography-corrections'])
      },
      onError: (error: AxiosError<DefaultResponse>) => {
        const message = error.response?.data.message as CreateOrtographyError
        onCloseModal()
        ShowToast({
          title: 'Ocorreu um erro',
          toastType: 'ERROR',
          description: newCorrectionErrorMessageAdapter(message),
        })
      },
    },
  )
  const onSubmit = ({
    userProvidedIdentifier,
    original,
  }: NewCorrectionFields) => {
    mutate({ userProvidedIdentifier, original: original[0] })
  }

  return {
    isModalNewCorrectionOpen,
    errors,
    isLoading,
    fileName,
    handleSubmit,
    onCloseModal,
    onSubmit,
    register,
  }
}
