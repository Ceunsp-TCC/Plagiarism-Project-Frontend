import { renderHook, waitFor } from '@testing-library/react'
import { useGetCorrections } from '@/app/(private)/ortography-corrections/hooks'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { getAllOrtographyCorrectionsMock } from '@tests/helpers'

import type { ReactNode } from 'react'

const queryClient = new QueryClient()
const wrapper = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)
describe('useGetCorrections', () => {
  it('Should return correct properties', async () => {
    getAllOrtographyCorrectionsMock(200)
    const { result } = renderHook(() => useGetCorrections(), { wrapper })

    await waitFor(() => expect(result.current.isLoading).toBe(false))
    expect(result.current.isLoading).toBeDefined()
    expect(result.current.ortographicCorrections).toBeDefined()
    expect(result.current.currentPage).toBeDefined()
    expect(result.current.enabledPagination).toBeDefined()
    expect(result.current.isEmpty).toBeDefined()
    expect(result.current.numberPages).toBeDefined()
    expect(result.current.setCurrentPage).toBeDefined()
  })
})
