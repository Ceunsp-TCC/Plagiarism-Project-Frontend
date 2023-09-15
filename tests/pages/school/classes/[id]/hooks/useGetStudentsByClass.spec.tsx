import { renderHook, waitFor } from '@testing-library/react'
import { useGetStudents } from '@/app/(private)/school/classes/[id]/hooks'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { getAllStudentsByClassMock } from '@tests/helpers'
import type { ReactNode } from 'react'

const queryClient = new QueryClient()
const wrapper = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)
jest.mock('next/navigation', () => ({
  useParams: jest.fn().mockReturnValue({ id: 1 }),
}))
describe('useGetStudents', () => {
  it('Should return correct properties', async () => {
    getAllStudentsByClassMock(200)
    const { result } = renderHook(() => useGetStudents(), { wrapper })

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
