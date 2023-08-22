import { useCourseStore } from '@store'
import { zodResolver } from '@hookform/resolvers/zod'
import { newLessonSchema } from '@/app/(private)/school/courses/[id]/schemas'
import { useForm } from 'react-hook-form'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { lessonServices } from '@services'
import { ShowToast } from '@components'
import type { CreateLessonProps } from '@services'
import type { NewLessonFields } from '@/app/(private)/school/courses/[id]/types'

export function useNewLesson() {
  const queryClient = useQueryClient()
  const { payloadModalNewLesson, setIsOpenModalNewLesson } = useCourseStore()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NewLessonFields>({
    criteriaMode: 'all',
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    resolver: zodResolver(newLessonSchema),
  })
  const onClose = () => {
    setIsOpenModalNewLesson({ isOpen: false, semesterId: 0 })
    reset()
  }
  const { mutate, isLoading } = useMutation(
    (data: CreateLessonProps) => lessonServices.create(data),
    {
      onSuccess: () => {
        onClose()
        ShowToast({
          title: 'Aula registrada com sucesso!',
          description: 'A aula foi registrada na plataforma',
          toastType: 'SUCCESS',
        })
        queryClient.refetchQueries(['course'])
      },
      onError: () => {
        onClose()
        ShowToast({
          title: 'Ocorreu um erro',
          toastType: 'ERROR',
          description: 'Falha ao salvar aula ,tente novamente mais tarde!',
        })
      },
    },
  )
  const onSubmit = (data: NewLessonFields) => {
    mutate({
      ...data,
      semesterId: payloadModalNewLesson.semesterId!,
    })
  }

  return {
    payloadModalNewLesson,
    errors,
    isLoading,
    onClose,
    register,
    onSubmit,
    handleSubmit,
  }
}
