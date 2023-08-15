import { renderHook, waitFor } from '@testing-library/react'
import { useCoursesTable } from '@/app/(private)/school/courses/hooks'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { getAllCoursesMock } from '@tests/helpers'

import type { ReactNode } from 'react'

const queryClient = new QueryClient()
const wrapper = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)
describe('useCoursesTable', () => {
  it('Should return correct properties', async () => {
    getAllCoursesMock(200)
    const { result } = renderHook(() => useCoursesTable(), { wrapper })

    await waitFor(() => expect(result.current.isLoading).toBe(false))
    expect(result.current.isLoading).toBeDefined()
    expect(result.current.courses).toBeDefined()
    expect(result.current.currentPage).toBeDefined()
    expect(result.current.enabledPagination).toBeDefined()
    expect(result.current.isEmpty).toBeDefined()
    expect(result.current.numberPages).toBeDefined()
    expect(result.current.setCurrentPage).toBeDefined()
  })
})
