'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { filtersSchema } from '@/app/(private)/ortography-corrections/schemas'
import { useEffect } from 'react'
import { useOrtographicCorrectionTableStore } from '@store'
import type { FiltersFields } from '@/app/(private)/ortography-corrections/types'

export function useFilters() {
  const { setFilters } = useOrtographicCorrectionTableStore()
  const { register, handleSubmit, watch } = useForm<FiltersFields>({
    resolver: zodResolver(filtersSchema),
  })

  const identifier = watch('identifier')

  const onSubmit = (data: FiltersFields) => {}
  useEffect(() => {
    setFilters({
      identifier,
    })
  }, [setFilters, identifier])

  return {
    onSubmit,
    handleSubmit,
    register,
  }
}
