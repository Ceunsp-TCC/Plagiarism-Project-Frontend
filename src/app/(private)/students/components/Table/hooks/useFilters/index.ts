'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { filtersSchema } from '@/app/(private)/students/schemas'
import { useEffect } from 'react'
import { useStudentsStore } from '@store'
import type { FiltersFields } from '@/app/(private)/students/types'

export function useFilters() {
  const { setFilters } = useStudentsStore()
  const { register, handleSubmit, watch } = useForm<FiltersFields>({
    resolver: zodResolver(filtersSchema),
  })

  const name = watch('name')

  const onSubmit = (data: FiltersFields) => {}
  useEffect(() => {
    setFilters({
      name,
    })
  }, [setFilters, name])
  return {
    onSubmit,
    handleSubmit,
    register,
  }
}
