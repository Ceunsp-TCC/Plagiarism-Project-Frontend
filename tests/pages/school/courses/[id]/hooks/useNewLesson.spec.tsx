import { renderHook } from '@testing-library/react'
import { useNewLesson } from '@/app/(private)/school/courses/[id]/hooks'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import type { ReactNode } from 'react'

const queryClient = new QueryClient()
const wrapper = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)
describe('useNewLesson', () => {
  it('Should return correct properties', async () => {
    const { result } = renderHook(() => useNewLesson(), { wrapper })

    expect(result.current.isLoading).toBeDefined()
    expect(result.current.errors).toBeDefined()
    expect(result.current.payloadModalNewLesson).toBeDefined()
    expect(result.current.handleSubmit).toBeDefined()
    expect(result.current.onClose).toBeDefined()
    expect(result.current.onSubmit).toBeDefined()
    expect(result.current.register).toBeDefined()
  })
})
