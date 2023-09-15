import { renderHook, waitFor } from '@testing-library/react'
import { useClassesTable } from '@/app/(private)/school/classes/hooks'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { getAllClassesMock } from '@tests/helpers'

import type { ReactNode } from 'react'

const queryClient = new QueryClient()
const wrapper = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
  useRouter: jest.fn(() => ({
    push: jest.fn(),
    back: jest.fn(),
    forward: jest.fn(),
  })),
}))
describe('useClassesTable', () => {
  it('Should return correct properties', async () => {
    getAllClassesMock(200)
    const { result } = renderHook(() => useClassesTable(), { wrapper })

    await waitFor(() => expect(result.current.isLoading).toBe(false))
    expect(result.current.isLoading).toBeDefined()
    expect(result.current.classes).toBeDefined()
    expect(result.current.currentPage).toBeDefined()
    expect(result.current.enabledPagination).toBeDefined()
    expect(result.current.isEmpty).toBeDefined()
    expect(result.current.numberPages).toBeDefined()
    expect(result.current.setCurrentPage).toBeDefined()
  })
})
