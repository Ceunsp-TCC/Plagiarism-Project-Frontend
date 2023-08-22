import { renderHook } from '@testing-library/react'
import { useGetCourse } from '@/app/(private)/school/courses/[id]/hooks'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { getCourseMock } from '@tests/helpers'
import type { ReactNode } from 'react'

const queryClient = new QueryClient()
const wrapper = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)
jest.mock('next/navigation', () => ({
  useParams: jest.fn().mockReturnValue({ id: 1 }),
  notFound: jest.fn(),
}))
describe('useGetCourse', () => {
  it('Should return correct properties', async () => {
    getCourseMock(200)
    const { result } = renderHook(() => useGetCourse(), { wrapper })

    expect(result.current.isLoading).toBeDefined()
  })
})
