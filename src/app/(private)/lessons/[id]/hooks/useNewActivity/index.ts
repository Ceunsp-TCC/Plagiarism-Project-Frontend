'use client'
import { useLessonStore } from '@store'
import { ShowToast } from '@components'
import { useParams } from 'next/navigation'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { activitiesServices } from '@services'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { newActivitySchema } from '@/app/(private)/lessons/[id]/schemas'
import type { NewActivityFields } from '@/app/(private)/lessons/[id]/types'

export function useNewActivity() {
  const queryClient = useQueryClient()
  const { id } = useParams()
  const { setIsOpenModalNewActivity, isOpenModalNewActivity } = useLessonStore()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NewActivityFields>({
    criteriaMode: 'all',
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    resolver: zodResolver(newActivitySchema),
  })

  const handleCloseModal = () => {
    reset()
    setIsOpenModalNewActivity(false)
  }
  const { mutate, isLoading } = useMutation(
    (data: NewActivityFields) =>
      activitiesServices.create({ ...data, lessonId: Number(id) }),
    {
      onSuccess: () => {
        handleCloseModal()
        ShowToast({
          title: 'Atividade registrada com sucesso!',
          description: 'A atividade foi registrada na plataforma',
          toastType: 'SUCCESS',
        })
        queryClient.refetchQueries(['activities'])
      },
      onError: () => {
        handleCloseModal()
        ShowToast({
          title: 'Ocorreu um erro',
          toastType: 'ERROR',
          description:
            'Ocorreu um erro ao registrar a atividade, tente novamente mais tarde!',
        })
      },
    },
  )

  const onSubmit = (data: NewActivityFields) => {
    mutate(data)
  }
  return {
    errors,
    isLoading,
    isOpenModalNewActivity,
    register,
    handleSubmit,
    onSubmit,
    handleCloseModal,
  }
}
