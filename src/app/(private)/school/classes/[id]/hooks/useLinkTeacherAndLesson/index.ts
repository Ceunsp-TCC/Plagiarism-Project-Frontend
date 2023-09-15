'use client'
import { useClasseStore } from '@store'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { linkTeacherSchema } from '@/app/(private)/school/classes/[id]/schemas'
import { classServices } from '@services'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { ShowToast } from '@components'
import type { LinkTeacherFields } from '@/app/(private)/school/classes/[id]/types'

export function useLinkTeacherAndLesson() {
  const queryClient = useQueryClient()
  const { payloadModalLinkTeacher, setIsOpenModalLinkTeacher } =
    useClasseStore()

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<LinkTeacherFields>({
    criteriaMode: 'all',
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    resolver: zodResolver(linkTeacherSchema),
  })

  const onCloseModal = () => {
    reset()
    setIsOpenModalLinkTeacher({ isOpen: false, lessonId: 0 })
  }
  const { mutate, isLoading } = useMutation(
    (teacherId: number) =>
      classServices.linkTeacherAndLesson({
        teacherId,
        lessonId: payloadModalLinkTeacher.lessonId!,
      }),
    {
      onSuccess: () => {
        onCloseModal()
        ShowToast({
          title: 'Professor vinculado com sucesso!',
          description: 'Seu professor foi vinculado com a aula com sucesso!',
          toastType: 'SUCCESS',
        })
        queryClient.refetchQueries(['class'])
      },
      onError: () => {
        onCloseModal()
        ShowToast({
          title: 'Ocorreu um erro',
          toastType: 'ERROR',
          description:
            'Falha ao vincular o professor com  está aula,tente novamente mais tarde',
        })
      },
    },
  )
  const onSubmit = ({ teacher }: LinkTeacherFields) => {
    mutate(Number(teacher))
  }

  return {
    payloadModalLinkTeacher,
    errors,
    isLoading,
    handleSubmit,
    onCloseModal,
    onSubmit,
    register,
  }
}
