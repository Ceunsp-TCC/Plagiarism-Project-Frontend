'use client'
import { useStudentsStore, useRandomPasswordModalStore } from '@store'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { newStudentSchema } from '@/app/(private)/students/schemas'
import { studentServices } from '@services'
import { useMutation } from '@tanstack/react-query'
import { ShowToast } from '@components'
import type { NewStudentFields } from '@/app/(private)/students/types'
import type { CreateStudentProps } from '@/services/types'

export function useNewStudent() {
  const { isOpenModalNewStudent, setIsOpenModalNewStudent } = useStudentsStore()
  const { setOpenModalRandomPassword, setCloseModalRandomPassword } =
    useRandomPasswordModalStore()
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<NewStudentFields>({
    criteriaMode: 'all',
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    resolver: zodResolver(newStudentSchema),
  })

  const { mutate, isLoading } = useMutation(
    (data: CreateStudentProps) => studentServices.create(data),
    {
      onSuccess: (data) => {
        setIsOpenModalNewStudent(false)
        setOpenModalRandomPassword({
          title: 'Aluno registrado com sucesso!',
          description:
            'Agora compartilhe a senha abaixo com ele de maneira segura 😉',
          randomPassword: data.content.randomPassword,
          onClickButton: () => setCloseModalRandomPassword(),
        })
      },
      onError: () => {
        setIsOpenModalNewStudent(false)
        ShowToast({
          title: 'Ocorreu um erro',
          toastType: 'ERROR',
          description: 'Falha ao salvar aluno ,tente novamente mais tarde!',
        })
      },
    },
  )
  const onSubmit = (data: NewStudentFields) => {
    mutate(data)
  }
  const onCloseModal = () => {
    reset()
    setValue('CPF', '')
    setValue('phoneNumber', '')
    setIsOpenModalNewStudent(false)
  }

  return {
    isOpenModalNewStudent,
    errors,
    isSubmitting,
    isLoading,
    handleSubmit,
    onCloseModal,
    onSubmit,
    register,
  }
}
