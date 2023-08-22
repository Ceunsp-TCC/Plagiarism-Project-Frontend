'use client'
import type { ReactNode } from 'react'
import { Layout } from '@components'
import { ProtectedMiddleware, PermissionsMiddleware } from '@middlewares'

export default function ProtectedLayout({ children }: { children: ReactNode }) {
  return (
    <ProtectedMiddleware>
      <PermissionsMiddleware>
        <Layout>{children}</Layout>
      </PermissionsMiddleware>
    </ProtectedMiddleware>
  )
}
