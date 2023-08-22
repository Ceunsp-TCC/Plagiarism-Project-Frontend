import { renderHook } from '@testing-library/react'
import { useNewSemester } from '@/app/(private)/school/courses/[id]/hooks'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import type { ReactNode } from 'react'

const queryClient = new QueryClient()
const wrapper = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)
jest.mock('next/navigation', () => ({
  useParams: jest.fn().mockReturnValue({ id: 1 }),
}))
describe('useNewSemester', () => {
  it('Should return correct properties', async () => {
    const { result } = renderHook(() => useNewSemester(), { wrapper })

    expect(result.current.isLoading).toBeDefined()
    expect(result.current.errors).toBeDefined()
    expect(result.current.isOpenModalNewSemester).toBeDefined()
    expect(result.current.handleSubmit).toBeDefined()
    expect(result.current.onClose).toBeDefined()
    expect(result.current.onSubmit).toBeDefined()
    expect(result.current.register).toBeDefined()
  })
})
