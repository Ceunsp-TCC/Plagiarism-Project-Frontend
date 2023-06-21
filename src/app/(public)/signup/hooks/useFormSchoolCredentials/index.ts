'use client'
import { formSchoolCredentialsSchema } from '@/app/(public)/signup/schemas'
import type { FormSchoolCredentialsFields } from '@/app/(public)/signup/types'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'

export function useFormSchoolCredentials() {
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

  const onSubmit = (data: FormSchoolCredentialsFields) => {
    console.log('fields', data)
  }

  const handleNavigate = (url: string) => {
    push(url)
    reset()
  }

  return {
    errors,
    register,
    handleSubmit,
    onSubmit,
    handleNavigate,
  }
}
