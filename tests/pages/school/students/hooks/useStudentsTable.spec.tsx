import { renderHook, waitFor } from '@testing-library/react'
import { useStudentsTable } from '@/app/(private)/school/students/hooks'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { getAllStudentsMock } from '@tests/helpers'

import type { ReactNode } from 'react'

const queryClient = new QueryClient()
const wrapper = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)
describe('useStudentsTable', () => {
  it('Should return correct properties', async () => {
    getAllStudentsMock(200)
    const { result } = renderHook(() => useStudentsTable(), { wrapper })

    await waitFor(() => expect(result.current.isLoading).toBe(false))
    expect(result.current.isLoading).toBeDefined()
    expect(result.current.students).toBeDefined()
    expect(result.current.currentPage).toBeDefined()
    expect(result.current.enabledPagination).toBeDefined()
    expect(result.current.isEmpty).toBeDefined()
    expect(result.current.numberPages).toBeDefined()
    expect(result.current.setCurrentPage).toBeDefined()
  })
})
