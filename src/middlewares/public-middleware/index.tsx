'use client'
import { usePublicMiddleware } from '@/middlewares/hooks'
import type { PublicMiddlewareProps } from '@/middlewares/types'

export function PublicMiddleware({ children }: PublicMiddlewareProps) {
  const { isAuthenticated } = usePublicMiddleware()
  return (
    <>
      {!isAuthenticated && children}
      {isAuthenticated && null}
    </>
  )
}
