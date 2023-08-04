'use client'
import { useStudentsStore, useRandomPasswordModalStore } from '@store'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { newStudentSchema } from '@/app/(private)/students/schemas'
import { studentServices } from '@services'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { ShowToast } from '@components'
import type { NewStudentFields } from '@/app/(private)/students/types'
import type { CreateStudentProps } from '@/services/types'

export function useNewStudent() {
  const queryClient = useQueryClient()
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
  const clearFields = () => {
    reset()
    setValue('CPF', '')
    setValue('phoneNumber', '')
  }
  const { mutate, isLoading } = useMutation(
    (data: CreateStudentProps) => studentServices.create(data),
    {
      onSuccess: (data) => {
        setIsOpenModalNewStudent(false)
        clearFields()
        setOpenModalRandomPassword({
          title: 'Aluno registrado com sucesso!',
          description:
            'Agora compartilhe a senha abaixo com ele de maneira segura 😉',
          randomPassword: data.content.randomPassword,
          onClickButton: () => setCloseModalRandomPassword(),
        })
        queryClient.refetchQueries(['students'])
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
    clearFields()
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
