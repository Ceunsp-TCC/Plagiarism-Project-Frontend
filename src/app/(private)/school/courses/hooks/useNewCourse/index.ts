'use client'
import { useCoursesStore } from '@store'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { newCourseSchema } from '@/app/(private)/school/courses/schemas'
import { courseServices } from '@services'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { ShowToast } from '@components'
import type { NewCourseFields } from '@/app/(private)/school/courses/types'
import type { CreateCourseProps } from '@services'
import type { CourseCategory, DefaultResponse } from '@types'
import type { AxiosError } from 'axios'

export function useNewCourse() {
  const queryClient = useQueryClient()
  const { isOpenModalNewCourse, setIsOpenModalNewCourse } = useCoursesStore()

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<NewCourseFields>({
    criteriaMode: 'all',
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    resolver: zodResolver(newCourseSchema),
  })
  const hasImage = watch('image') !== undefined && watch('image').length > 0
  const imageName = hasImage ? watch('image')[0].name : undefined

  const onCloseModal = () => {
    reset()
    setIsOpenModalNewCourse(false)
  }
  const { mutate, isLoading } = useMutation(
    (data: CreateCourseProps) => courseServices.create(data),
    {
      onSuccess: (data) => {
        onCloseModal()
        ShowToast({
          title: 'Curso registrado com sucesso!',
          description: 'Seu curso foi registrado na plataforma',
          toastType: 'SUCCESS',
        })
        queryClient.refetchQueries(['courses'])
      },
      onError: (error: AxiosError<DefaultResponse>) => {
        const alreadyExistsCourseWithThisName = error.response?.status === 400
        onCloseModal()
        ShowToast({
          title: 'Ocorreu um erro',
          toastType: 'ERROR',
          description: alreadyExistsCourseWithThisName
            ? 'Já existe um curso com este nome. Por favor, escolha um nome diferente.'
            : 'Falha ao salvar curso ,tente novamente mais tarde!',
        })
      },
    },
  )
  const onSubmit = (data: NewCourseFields) => {
    mutate({
      ...data,
      price: parseFloat(data.price),
      category: data.category as CourseCategory,
      image: data.image[0],
    })
  }

  return {
    isOpenModalNewCourse,
    errors,
    isLoading,
    imageName,
    handleSubmit,
    onCloseModal,
    onSubmit,
    register,
  }
}
