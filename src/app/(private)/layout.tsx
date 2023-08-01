'use client'
import type { ReactNode } from 'react'
import { ProtectedMiddleware, PermissionsMiddleware } from '@middlewares'
import { Layout } from '@components'

export default function ProtectedLayout({ children }: { children: ReactNode }) {
  return (
    <ProtectedMiddleware>
      <PermissionsMiddleware>
        <Layout>{children}</Layout>
      </PermissionsMiddleware>
    </ProtectedMiddleware>
  )
}
