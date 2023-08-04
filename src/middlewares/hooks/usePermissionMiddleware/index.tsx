'use client'
import { usePermissions, useNavigation } from '@hooks'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import type { Paths } from '@types'

export function usePermissionMiddleware() {
  const { navigate } = useNavigation()
  const { checkPermissionPerUrl } = usePermissions()
  const pathName = usePathname()

  const hasPermission = checkPermissionPerUrl(pathName as Paths)

  useEffect(() => {
    if (!hasPermission) navigate('/not-found')
  }, [pathName])

  return {
    hasPermission,
  }
}
