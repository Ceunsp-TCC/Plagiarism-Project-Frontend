'use client'
import { useEffect } from 'react'
import { formSchoolCredentialsSchema } from '@/app/(public)/signup/schemas'
import type { FormSchoolCredentialsFields } from '@/app/(public)/signup/types'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { useSignupStore } from '@/store'

export function useFormSchoolCredentials() {
  const { setSchoolCredentialsState, setStepState, step } = useSignupStore()
  const isWrongStep = step !== 'FORMSCHOOLCREDENTIALS'

  const { push } = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
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

  const onSubmit = async (data: FormSchoolCredentialsFields) => {
    await setStepState('WARNINGACCOUNTINREVIEW')
    handleNavigate('/signup/warning-account-in-review')
    setSchoolCredentialsState(data)
  }

  useEffect(() => {
    if (isWrongStep && !isSubmitting) {
      handleNavigate('/signup/form-school')
    }
  }, [step])
  return {
    errors,
    register,
    handleSubmit,
    onSubmit,
    handleNavigate,
  }
}
