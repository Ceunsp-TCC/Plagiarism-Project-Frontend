import { renderHook } from '@testing-library/react'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { useNewActivity } from '@/app/(private)/lessons/[id]/hooks'
import type { ReactNode } from 'react'

const queryClient = new QueryClient()
const wrapper = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)
jest.mock('next/navigation', () => ({
  useParams: jest.fn().mockReturnValue({ id: 1 }),
}))
describe('useNewActivity', () => {
  it('Should return correct properties', async () => {
    const { result } = renderHook(() => useNewActivity(), { wrapper })

    expect(result.current.isLoading).toBeDefined()
    expect(result.current.errors).toBeDefined()
    expect(result.current.isOpenModalNewActivity).toBeDefined()
    expect(result.current.onSubmit).toBeDefined()
    expect(result.current.register).toBeDefined()
    expect(result.current.handleSubmit).toBeDefined()
    expect(result.current.handleCloseModal).toBeDefined()
  })
})
