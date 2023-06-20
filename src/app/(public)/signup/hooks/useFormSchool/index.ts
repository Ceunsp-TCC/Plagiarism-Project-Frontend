'use client'
import { formSchoolSchema } from '@/app/(public)/signup/schemas'
import type { FormSchoolFields } from '@/app/(public)/signup/types'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'

export function useFormSchool() {
  const { push } = useRouter()
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

  const onSubmit = (data: FormSchoolFields) => {
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
