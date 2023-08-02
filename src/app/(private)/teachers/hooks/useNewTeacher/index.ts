'use client'
import { useRandomPasswordModalStore, useTeachersStore } from '@store'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { newTeacherSchema } from '@/app/(private)/teachers/schemas'
import { teacherServices } from '@services'
import { useMutation } from '@tanstack/react-query'
import { ShowToast } from '@components'
import type { NewTeacherFields } from '@/app/(private)/teachers/types'
import type { CreateTeacherProps } from '@/services/types'

export function useNewTeacher() {
  const { isOpenModalNewTeacher, setIsOpenModalNewTeacher } = useTeachersStore()
  const { setOpenModalRandomPassword, setCloseModalRandomPassword } =
    useRandomPasswordModalStore()
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<NewTeacherFields>({
    criteriaMode: 'all',
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    resolver: zodResolver(newTeacherSchema),
  })

  const { mutate, isLoading } = useMutation(
    (data: CreateTeacherProps) => teacherServices.create(data),
    {
      onSuccess: (data) => {
        setIsOpenModalNewTeacher(false)
        setOpenModalRandomPassword({
          title: 'Professor registrado com sucesso!',
          description:
            'Agora compartilhe a senha abaixo com ele de maneira segura 😉',
          randomPassword: data.content.randomPassword,
          onClickButton: () => setCloseModalRandomPassword(),
        })
      },
      onError: () => {
        setIsOpenModalNewTeacher(false)
        ShowToast({
          title: 'Ocorreu um erro',
          toastType: 'ERROR',
          description: 'Falha ao salvar professor ,tente novamente mais tarde!',
        })
      },
    },
  )
  const onSubmit = (data: NewTeacherFields) => {
    mutate(data)
  }
  const onCloseModal = () => {
    reset()
    setValue('CPF', '')
    setValue('phoneNumber', '')
    setValue('CND', '')
    setIsOpenModalNewTeacher(false)
  }

  return {
    isOpenModalNewTeacher,
    errors,
    isSubmitting,
    isLoading,
    handleSubmit,
    onCloseModal,
    onSubmit,
    register,
  }
}
