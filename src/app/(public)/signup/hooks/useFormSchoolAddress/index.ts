'use client'
import { formSchoolAddressSchema } from '@/app/(public)/signup/schemas'
import type { FormSchoolAddressFields } from '@/app/(public)/signup/types'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { useAutoCompleteAddress } from '@/hooks'
import { useEffect } from 'react'

export function useFormSchoolAddress() {
  const { push } = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    setValue,
    setError,
  } = useForm<FormSchoolAddressFields>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    criteriaMode: 'all',
    resolver: zodResolver(formSchoolAddressSchema),
  })
  const zipCode = watch('CEP')
  const enabledToFoundCep = zipCode && zipCode.length === 9
  const {
    address,
    isError: isErrorAutoCompleteAddress,
    isSuccess: isSuccessAutoCompleteAddress,
    autoComplete,
  } = useAutoCompleteAddress(zipCode)
  const onSubmit = (data: FormSchoolAddressFields) => {
    console.log('fields', data)
  }

  const handleNavigate = (url: string) => {
    push(url)
    reset()
  }

  const handleAutoCompleteAddress = () => {
    if (enabledToFoundCep) autoComplete()
  }

  useEffect(() => {
    if (isSuccessAutoCompleteAddress) {
      setValue('city', address?.localidade! ?? '')
      setValue('district', address?.bairro! ?? '')
      setValue('state', address?.uf! ?? '')
      setValue('street', address?.logradouro! ?? '')
    }
    if (isErrorAutoCompleteAddress) {
      setError('CEP', {
        message: 'Por favor, insira um CEP válido',
        type: 'pattern',
      })
    }
  }, [isSuccessAutoCompleteAddress, address, isErrorAutoCompleteAddress])
  return {
    errors,
    register,
    handleSubmit,
    onSubmit,
    handleNavigate,
    handleAutoCompleteAddress,
  }
}
