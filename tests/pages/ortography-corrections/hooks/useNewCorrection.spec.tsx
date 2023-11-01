import { renderHook } from '@testing-library/react'
import { useNewCorrection } from '@/app/(private)/ortography-corrections/hooks'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import type { ReactNode } from 'react'

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
  useRouter: jest.fn(() => ({
    push: jest.fn(),
    back: jest.fn(),
    forward: jest.fn(),
  })),
}))
const queryClient = new QueryClient()
const wrapper = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)

describe('useNewCorrection', () => {
  it('Should return correct properties', async () => {
    const { result } = renderHook(() => useNewCorrection(), { wrapper })

    expect(result.current.isLoading).toBeDefined()
    expect(result.current.errors).toBeDefined()
    expect(result.current.isModalNewCorrectionOpen).toBeDefined()
    expect(result.current.onCloseModal).toBeDefined()
    expect(result.current.onSubmit).toBeDefined()
    expect(result.current.register).toBeDefined()
  })
})
