'use client'
import { Layout } from '@components'
import { ProtectedMiddleware, PermissionsMiddleware } from '@middlewares'
import { NotificationProvider } from '@providers'
import type { ReactNode } from 'react'

export default function ProtectedLayout({ children }: { children: ReactNode }) {
  return (
    <ProtectedMiddleware>
      <PermissionsMiddleware>
        <Layout>
          <NotificationProvider>{children}</NotificationProvider>
        </Layout>
      </PermissionsMiddleware>
    </ProtectedMiddleware>
  )
}
