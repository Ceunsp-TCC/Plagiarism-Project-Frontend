'use client'
import { formSchoolSchema } from '@/app/(public)/signup/schemas'
import type { FormSchoolFields } from '@/app/(public)/signup/types'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { useSignupStore } from '@/store'

export function useFormSchool() {
  const { push } = useRouter()
  const { setSchoolState, setStepState } = useSignupStore()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormSchoolFields>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    criteriaMode: 'all',
    resolver: zodResolver(formSchoolSchema),
  })
  const handleNavigate = (url: string) => {
    push(url)
    reset()
  }
  const onSubmit = (data: FormSchoolFields) => {
    setSchoolState(data)
    setStepState('FORMSCHOOLADDRESS')
    handleNavigate('/signup/form-school-address')
  }

  return {
    errors,
    register,
    handleSubmit,
    onSubmit,
    handleNavigate,
  }
}
