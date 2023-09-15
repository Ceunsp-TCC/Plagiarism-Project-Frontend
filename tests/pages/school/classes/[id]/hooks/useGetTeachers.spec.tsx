import { renderHook, waitFor } from '@testing-library/react'
import { useGetTeachers } from '@/app/(private)/school/classes/[id]/hooks'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { getAllTeachersMock } from '@tests/helpers'
import type { ReactNode } from 'react'

const queryClient = new QueryClient()
const wrapper = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)
jest.mock('next/navigation', () => ({
  useParams: jest.fn().mockReturnValue({ id: 1 }),
}))
describe('useGetTeachers', () => {
  it('Should return correct properties', async () => {
    getAllTeachersMock(200)
    const { result } = renderHook(() => useGetTeachers(), { wrapper })

    await waitFor(() => expect(result.current.isLoading).toBe(false))
    expect(result.current.isLoading).toBeDefined()
    expect(result.current.teachers).toBeDefined()
  })
})
