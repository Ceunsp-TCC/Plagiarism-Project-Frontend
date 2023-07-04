import type { ReactNode } from 'react'
import { ProtectedMiddleware, PermissionsMiddleware } from '@middlewares'

export default function ProtectedLayout({ children }: { children: ReactNode }) {
  return (
    <ProtectedMiddleware>
      <PermissionsMiddleware>{children}</PermissionsMiddleware>
    </ProtectedMiddleware>
  )
}
