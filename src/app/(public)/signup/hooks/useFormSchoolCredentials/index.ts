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
import { AxiosError } from 'axios'

export function useFormSchoolCredentials() {
  const { setSchoolCredentialsState, setStepState, step, payload } =
    useSignupStore()
  const isWrongStep = step !== 'FORMSCHOOLCREDENTIALS'

  const { push } = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
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
  }
  const { mutate, isLoading } = useMutation(
    () => schoolServices.create(transformObjectToApi(payload)),
    {
      onSuccess,
      onError: (error: AxiosError) => {
        console.log(error.response?.data)
      },
    },
  )

  const onSubmit = async (data: FormSchoolCredentialsFields) => {
    setSchoolCredentialsState(data)
  }

  useEffect(() => {
    if (isWrongStep && !isLoading) {
      handleNavigate('/signup/form-school')
    }
    if (isSubmitSuccessful) mutate()
  }, [step, isSubmitSuccessful])
  return {
    errors,
    isLoading,
    register,
    handleSubmit,
    onSubmit,
  }
}
