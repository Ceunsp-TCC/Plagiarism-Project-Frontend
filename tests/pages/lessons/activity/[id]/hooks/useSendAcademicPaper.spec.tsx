import { renderHook } from '@testing-library/react'
import { useSendAcademicPaper } from '@/app/(private)/lessons/activity/[id]/hooks'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import type { ReactNode } from 'react'

const queryClient = new QueryClient()
const wrapper = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)

jest.mock('next/navigation', () => ({
  useParams: jest.fn().mockReturnValue({ id: 1 }),
  usePathname: jest.fn(),
  useRouter: jest.fn(() => ({
    push: jest.fn(),
    back: jest.fn(),
    forward: jest.fn(),
  })),
}))
describe('useSendAcademicPaper', () => {
  it('Should return correct properties', async () => {
    const { result } = renderHook(() => useSendAcademicPaper(), { wrapper })

    expect(result.current.isLoading).toBeDefined()
    expect(result.current.errors).toBeDefined()
    expect(result.current.register).toBeDefined()
    expect(result.current.handleSubmit).toBeDefined()
    expect(result.current.onSubmit).toBeDefined()
  })
})
