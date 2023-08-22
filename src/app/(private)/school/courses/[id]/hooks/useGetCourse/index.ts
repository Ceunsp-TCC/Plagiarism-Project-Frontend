'use client'
import { useQuery } from '@tanstack/react-query'
import { courseServices } from '@services'
import { notFound, useParams } from 'next/navigation'
import { usePermissions } from '@hooks'
import { useEffect } from 'react'

export function useGetCourse() {
  const { checkHasPermission } = usePermissions()
  const { id } = useParams()
  const { isLoading, isError } = useQuery({
    queryKey: ['course'],
    queryFn: () => courseServices.getOne({ courseId: Number(id) }),
  })

  useEffect(() => {
    if (isError || !checkHasPermission('getCourse')) {
      notFound()
    }
  }, [isError])

  return {
    isLoading,
  }
}
