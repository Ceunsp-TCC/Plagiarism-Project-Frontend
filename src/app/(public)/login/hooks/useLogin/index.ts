'use client'
import { formLoginSchema } from '@/app/(public)/login/schemas'
import type { FormLoginFields } from '@/app/(public)/login/types'
import { authServices } from '@services'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import { ShowToast } from '@components'
import { appRoutes } from '@constants'
import { useAuthStore, useNewPasswordModalStore } from '@store'
import type { AxiosError } from 'axios'
import type { LoginProps } from '@services'

export function useLogin() {
  const { setOpenModalNewPassword } = useNewPasswordModalStore()
  const { setUserState } = useAuthStore()
  const { push } = useRouter()
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FormLoginFields>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    criteriaMode: 'all',
    resolver: zodResolver(formLoginSchema),
  })

  const handleNavigation = (url: string) => push(url)
  const { mutate, isLoading } = useMutation(
    (data: LoginProps) => authServices.login(data),
    {
      onSuccess: (data) => {
        const isTeacher = data.user.roleName === 'TEACHER'
        const isStudent = data.user.roleName === 'STUDENT'

        if (isStudent || isTeacher) {
          const randomPasswordStudent = data.user.studentData?.randomPassword
          const randomPasswordTeacher = data.user.teacherData?.randomPassword
          if (randomPasswordStudent || randomPasswordTeacher) {
            return setOpenModalNewPassword({
              title: 'Antes de Acessar: Troque Sua Senha',
              description:
                'Troque sua senha gerada por uma senha pessoal antes de acessar.',
              userId: data.user.id,
            })
          }
        }

        setUserState(data)
        handleNavigation(appRoutes.private.students)
      },
      onError: (error: AxiosError) => {
        const isNotAuthorized = error.response?.status === 403

        ShowToast({
          title: 'Error',
          description: isNotAuthorized
            ? 'Sua conta ainda está em revisão por favor aguarde um pouco'
            : 'Credenciais Inválidas',
          toastType: 'ERROR',
        })
        setError('email', { message: 'Credenciais Inválidas' })
        setError('password', { message: 'Credenciais Inválidas' })
      },
    },
  )

  const onSubmit = (data: FormLoginFields) => mutate(data)

  return {
    errors,
    isLoading,
    register,
    handleSubmit,
    onSubmit,
  }
}
