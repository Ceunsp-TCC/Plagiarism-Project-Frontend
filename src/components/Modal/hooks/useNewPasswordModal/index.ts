'use client'
import { useMutation } from '@tanstack/react-query'
import { newPasswordSchema } from '@/components/Modal/schemas'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { userServices } from '@services'
import { useNewPasswordModalStore } from '@store'
import { ShowToast } from '@components'
import type { UpdatePasswordProps } from '@services'
import type { NewPasswordFields } from '@/components/Modal/types'

export function useNewPasswordModal() {
  const {
    title,
    description,
    isOpenModalNewPassword,
    userId,
    buttonLabel,
    setCloseModalNewPassword,
  } = useNewPasswordModalStore()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NewPasswordFields>({
    mode: 'onSubmit',
    criteriaMode: 'all',
    reValidateMode: 'onSubmit',
    resolver: zodResolver(newPasswordSchema),
  })

  const { mutate, isLoading } = useMutation(
    (data: UpdatePasswordProps) => userServices.updatePassword(data),
    {
      onSuccess: () => {
        setCloseModalNewPassword()
        ShowToast({
          title: 'Senha atualizada!',
          description: 'Sua senha foi atualizada com sucesso',
          toastType: 'SUCCESS',
        })
      },
      onError: () => {
        setCloseModalNewPassword()
        ShowToast({
          title: 'Ocorreu um erro',
          description:
            'Houve um erro ao atualizar sua senha. Tente Novamente mais tarde!',
          toastType: 'ERROR',
        })
      },
    },
  )
  const onSubmit = ({ password, confirmPassword }: NewPasswordFields) => {
    mutate({
      confirmPassword,
      password,
      userId,
    })
  }
  const onClose = () => {
    setCloseModalNewPassword()
    reset()
  }

  return {
    title,
    description,
    buttonLabel,
    isOpenModalNewPassword,
    errors,
    isLoading,
    onSubmit,
    register,
    handleSubmit,
    onClose,
  }
}
