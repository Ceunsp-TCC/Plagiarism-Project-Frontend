import { useCourseStore } from '@store'
import { zodResolver } from '@hookform/resolvers/zod'
import { newSemesterSchema } from '@/app/(private)/school/courses/[id]/schemas'
import { useForm } from 'react-hook-form'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { semesterServices } from '@services'
import { ShowToast } from '@components'
import { useParams } from 'next/navigation'
import type { CreateSemesterProps } from '@services'
import type { NewSemesterFields } from '@/app/(private)/school/courses/[id]/types'

export function useNewSemester() {
  const { id } = useParams()
  const queryClient = useQueryClient()
  const { isOpenModalNewSemester, setIsOpenModalNewSemester } = useCourseStore()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NewSemesterFields>({
    criteriaMode: 'all',
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    resolver: zodResolver(newSemesterSchema),
  })
  const onClose = () => {
    setIsOpenModalNewSemester(false)
    reset()
  }
  const { mutate, isLoading } = useMutation(
    (data: CreateSemesterProps) => semesterServices.create(data),
    {
      onSuccess: () => {
        onClose()
        ShowToast({
          title: 'Semestre registrado com sucesso!',
          description: 'O semestre foi registrado na plataforma',
          toastType: 'SUCCESS',
        })
        queryClient.refetchQueries(['course'])
      },
      onError: () => {
        onClose()
        ShowToast({
          title: 'Ocorreu um erro',
          toastType: 'ERROR',
          description: 'Falha ao salvar semestre ,tente novamente mais tarde!',
        })
      },
    },
  )
  const onSubmit = (data: NewSemesterFields) => {
    mutate({
      ...data,
      courseId: Number(id),
    })
  }

  return {
    isOpenModalNewSemester,
    errors,
    isLoading,
    onClose,
    register,
    onSubmit,
    handleSubmit,
  }
}
