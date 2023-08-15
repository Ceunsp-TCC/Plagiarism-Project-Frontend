import { renderHook } from '@testing-library/react'
import { useNewTeacher } from '@/app/(private)/school/teachers/hooks'
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
describe('useNewTeacher', () => {
  it('Should return correct properties', () => {
    const { result } = renderHook(() => useNewTeacher(), { wrapper })

    expect(result.current.errors).toBeDefined()
    expect(result.current.isOpenModalNewTeacher).toBeDefined()
    expect(result.current.isSubmitting).toBeDefined()
    expect(result.current.isLoading).toBeDefined()
    expect(result.current.onCloseModal).toBeDefined()
    expect(result.current.handleSubmit).toBeDefined()
    expect(result.current.onSubmit).toBeDefined()
    expect(result.current.register).toBeDefined()
  })
})
