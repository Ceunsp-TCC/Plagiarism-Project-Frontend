import type { ReactNode } from 'react'
import { ProtectedMiddleware, PermissionsMiddleware } from '@middlewares'
import { Layout } from '@components'

export default function ProtectedLayout({ children }: { children: ReactNode }) {
  return (
    <ProtectedMiddleware>
      <Layout>{children}</Layout>
    </ProtectedMiddleware>
  )
}
