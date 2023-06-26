'use client'
import { formSchoolAddressSchema } from '@/app/(public)/signup/schemas'
import type { FormSchoolAddressFields } from '@/app/(public)/signup/types'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { useSignupStore } from '@/store'
import { useEffect } from 'react'

export function useFormSchoolAddress() {
  const { setSchoolAddressState, setStepState, step } = useSignupStore()
  const isWrongStep = step !== 'FORMSCHOOLADDRESS'
  const { push } = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormSchoolAddressFields>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    criteriaMode: 'all',
    resolver: zodResolver(formSchoolAddressSchema),
  })
  const handleNavigate = (url: string) => {
    push(url)
    reset()
  }

  const onSubmit = (data: FormSchoolAddressFields) => {
    setStepState('FORMSCHOOLCREDENTIALS')
    handleNavigate('/signup/form-school-credentials')
    setSchoolAddressState(data)
  }

  useEffect(() => {
    if (isWrongStep && !isSubmitting) {
      handleNavigate('/signup/form-school')
    }
  }, [step])

  return {
    errors,
    isSubmitting,
    register,
    handleSubmit,
    onSubmit,
  }
}
