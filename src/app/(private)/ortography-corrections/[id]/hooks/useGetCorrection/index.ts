'use client'
import { ortographyCorrectionsServices } from '@services'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'next/navigation'
import { useState } from 'react'

export function useGetCorrection() {
  const [viewMode, setViewMode] = useState<'RESULT' | 'ORIGINAL'>('RESULT')

  const { id } = useParams()

  const { data: ortographyCorrection, isLoading } = useQuery({
    queryKey: ['single-ortography-correction', id],
    queryFn: () => ortographyCorrectionsServices.getOne(Number(id)),
    refetchOnWindowFocus: false,
    retry: false,
  })

  const isResult = viewMode === 'RESULT'
  const isOriginal = viewMode === 'ORIGINAL'

  return {
    ortographyCorrection,
    isLoading,
    isResult,
    isOriginal,
    setViewMode,
  }
}
