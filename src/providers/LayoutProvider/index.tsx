'use client'
import type { LayoutProviderProps } from '@providers'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import {
  ToastContainerCustom,
  RandomPasswordModal,
  NewPasswordModal,
  ConfirmationModal,
} from '@components'

const queryClient = new QueryClient()

export function LayoutProvider({ children }: LayoutProviderProps) {
  const enabledDevTools = process.env.NEXT_PUBLIC_MODE === 'development'

  return (
    <QueryClientProvider client={queryClient}>
      <ToastContainerCustom />
      <RandomPasswordModal />
      <NewPasswordModal />
      <ConfirmationModal />
      {enabledDevTools && <ReactQueryDevtools initialIsOpen={false} />}
      {children}
    </QueryClientProvider>
  )
}
