'use client'
import { useEffect } from 'react'
import { formSchoolCredentialsSchema } from '@/app/(public)/signup/schemas'
import type { FormSchoolCredentialsFields } from '@/app/(public)/signup/types'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { useSignupStore } from '@/store'
import { schoolServices } from '@/services'
import { useMutation } from '@tanstack/react-query'
import { transformObjectToApi } from '@/app/(public)/signup/functions'
import { ShowToast } from '@components'

export function useFormSchoolCredentials() {
  const { setSchoolCredentialsState, setStepState, step, payload } =
    useSignupStore()
  const isWrongStep = step !== 'FORMSCHOOLCREDENTIALS'

  const { push } = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormSchoolCredentialsFields>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    criteriaMode: 'all',
    resolver: zodResolver(formSchoolCredentialsSchema),
  })
  const handleNavigate = (url: string) => {
    push(url)
    reset()
  }
  const onSuccess = async () => {
    await setStepState('WARNINGACCOUNTINREVIEW')
    handleNavigate('/signup/warning-account-in-review')
    ShowToast({
      title: 'Conta criada!',
      description: 'Sua conta foi criada com sucesso',
      toastType: 'SUCCESS',
    })
  }

  const onError = async () => {
    ShowToast({
      title: 'Ocorreu um erro',
      description:
        'Houve um erro ao criar sua conta. Tente Novamente mais tarde!',
      toastType: 'ERROR',
    })
  }
  const { mutate, isLoading } = useMutation(
    () => schoolServices.create(transformObjectToApi(payload)),
    {
      onSuccess,
      onError,
    },
  )

  const onSubmit = async (data: FormSchoolCredentialsFields) => {
    setSchoolCredentialsState(data)
    mutate()

  }

  useEffect(() => {
    if (isWrongStep && !isLoading) {
      handleNavigate('/signup/form-school')
    }
  }, [step])


  return {
    errors,
    isLoading,
    register,
    handleSubmit,
    onSubmit,
  }
}
