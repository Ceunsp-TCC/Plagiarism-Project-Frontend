import { renderHook, waitFor } from '@testing-library/react'
import { useTeachersTable } from '@/app/(private)/teachers/hooks'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { getAllTeachersMock } from '@tests/helpers'
import type { ReactNode } from 'react'

const queryClient = new QueryClient()
const wrapper = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)
describe('useTeachersTable', () => {
  it('Should return correct properties', async () => {
    getAllTeachersMock(200)
    const { result } = renderHook(() => useTeachersTable(), { wrapper })

    await waitFor(() => expect(result.current.isLoading).toBe(false))
    expect(result.current.isLoading).toBeDefined()
    expect(result.current.teachers).toBeDefined()
    expect(result.current.currentPage).toBeDefined()
    expect(result.current.enabledPagination).toBeDefined()
    expect(result.current.isEmpty).toBeDefined()
    expect(result.current.numberPages).toBeDefined()
    expect(result.current.setCurrentPage).toBeDefined()
  })
})
