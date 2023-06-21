'use client'
import { formSchoolAddressSchema } from '@/app/(public)/signup/schemas'
import type { FormSchoolAddressFields } from '@/app/(public)/signup/types'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'

export function useFormSchoolAddress() {
  const { push } = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
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
    handleNavigate('/signup/form-school-credentials')
  }

  return {
    errors,
    register,
    handleSubmit,
    onSubmit,
    handleNavigate,
  }
}
