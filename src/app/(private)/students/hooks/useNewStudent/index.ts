'use client'
import { useStudentsStore } from '@store'
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
  const onSuccess = async () => {
    setIsOpenModalNewStudent(false)
    ShowToast({
      title: 'Aluno salvo!',
      description: 'Aluno salvo com sucesso',
      toastType: 'SUCCESS',
    })
  }

  const onError = async () => {
    setIsOpenModalNewStudent(false)
    ShowToast({
      title: 'Ocorreu um erro',
      toastType: 'ERROR',
      description: 'Falha ao salvar aluno ,tente novamente mais tarde!s',
    })
  }
  const { mutate } = useMutation(
    (data: CreateStudentProps) => studentServices.create(data),
    {
      onSuccess,
      onError,
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
    handleSubmit,
    onCloseModal,
    onSubmit,
    register,
  }
}
