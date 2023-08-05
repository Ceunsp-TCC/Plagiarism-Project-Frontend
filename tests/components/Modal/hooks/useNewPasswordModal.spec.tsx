import { renderHook } from '@testing-library/react'
import { ToastContainerCustom } from '@components'
import { useNewPasswordModal } from '@/components/Modal/hooks'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import type { ReactNode } from 'react'

const queryClient = new QueryClient()
const wrapper = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>
    <ToastContainerCustom />
    {children}
  </QueryClientProvider>
)
describe('useNewPasswordModal', () => {
  it('Should return correct properties', () => {
    const { result } = renderHook(() => useNewPasswordModal(), { wrapper })

    expect(result.current.buttonLabel).toBeDefined()
    expect(result.current.description).toBeDefined()
    expect(result.current.errors).toBeDefined()
    expect(result.current.isOpenModalNewPassword).toBeDefined()
    expect(result.current.register).toBeDefined()
    expect(result.current.handleSubmit).toBeDefined()
    expect(result.current.onSubmit).toBeDefined()
    expect(result.current.onClose).toBeDefined()
  })
})
