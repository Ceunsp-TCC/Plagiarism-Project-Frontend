import { renderHook } from '@testing-library/react'
import { useNewStudent } from '@/app/(private)/students/hooks'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import type { ReactNode } from 'react'
import { ToastContainerCustom } from '@components'

const queryClient = new QueryClient()
const wrapper = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>
    <ToastContainerCustom />
    {children}
  </QueryClientProvider>
)
describe('useNewStudent', () => {
  it('Should return correct properties', () => {
    const { result } = renderHook(() => useNewStudent(), { wrapper })

    expect(result.current.onCloseModal).toBeDefined()
    expect(result.current.handleSubmit).toBeDefined()
    expect(result.current.onSubmit).toBeDefined()
    expect(result.current.register).toBeDefined()
    expect(result.current.errors).toBeDefined()
    expect(result.current.isOpenModalNewStudent).toBeDefined()
    expect(result.current.isSubmitting).toBeDefined()
    expect(result.current.isLoading).toBeDefined()
  })
})
