import { renderHook } from '@testing-library/react'
import { useNewCourse } from '@/app/(private)/school/courses/hooks'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ToastContainerCustom } from '@components'
import type { ReactNode } from 'react'

const queryClient = new QueryClient()
const wrapper = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>
    <ToastContainerCustom />
    {children}
  </QueryClientProvider>
)
describe('useNewCourse', () => {
  it('Should return correct properties', () => {
    const { result } = renderHook(() => useNewCourse(), { wrapper })

    expect(result.current.errors).toBeDefined()
    expect(result.current.isLoading).toBeDefined()
    expect(result.current.isOpenModalNewCourse).toBeDefined()
    expect(result.current.onCloseModal).toBeDefined()
    expect(result.current.handleSubmit).toBeDefined()
    expect(result.current.onSubmit).toBeDefined()
    expect(result.current.register).toBeDefined()
  })
})
