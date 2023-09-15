'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { filtersSchema } from '@/app/(private)/school/classes/schemas'
import { useEffect } from 'react'
import { useClassesStore } from '@store'
import type { FiltersFields } from '@/app/(private)/school/classes/types'

export function useFilters() {
  const { setFilters } = useClassesStore()
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
