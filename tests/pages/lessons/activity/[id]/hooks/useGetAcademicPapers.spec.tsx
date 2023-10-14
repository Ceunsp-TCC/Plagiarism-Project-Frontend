import { renderHook, waitFor } from '@testing-library/react'
import { useGetAcademicPapers } from '@/app/(private)/lessons/activity/[id]/hooks'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { getAllAcademicPapersMock } from '@tests/helpers'
import type { ReactNode } from 'react'

const queryClient = new QueryClient()
const wrapper = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)

jest.mock('next/navigation', () => ({
  useParams: jest.fn().mockReturnValue({ id: 1 }),
}))
describe('useGetAcademicPapers', () => {
  it('Should return correct properties', async () => {
    getAllAcademicPapersMock(200)
    const { result } = renderHook(() => useGetAcademicPapers(), { wrapper })

    await waitFor(() => expect(result.current.isLoading).toBe(false))
    expect(result.current.isLoading).toBeDefined()
    expect(result.current.academicPapers).toBeDefined()
    expect(result.current.isEmpty).toBeDefined()
    expect(result.current.currentPage).toBeDefined()
    expect(result.current.numberPages).toBeDefined()
    expect(result.current.enabledPagination).toBeDefined()
    expect(result.current.enabledItems).toBeDefined()
    expect(result.current.setCurrentPage).toBeDefined()
  })
})
