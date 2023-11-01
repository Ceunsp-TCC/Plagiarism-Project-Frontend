import { renderHook, waitFor } from '@testing-library/react'
import { useGetAcademicPaper } from '@/app/(private)/lessons/activity/academic-paper/[id]/hooks'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { getAcademicPaperByIdMock } from '@tests/helpers'
import type { ReactNode } from 'react'

const queryClient = new QueryClient()
const wrapper = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)

jest.mock('next/navigation', () => ({
  useParams: jest.fn().mockReturnValue({ id: 1 }),
  usePathname: jest.fn(),
  useRouter: jest.fn(() => ({
    push: jest.fn(),
    back: jest.fn(),
    forward: jest.fn(),
  })),
}))
describe('useGetAcademicPaper', () => {
  it('Should return correct properties with status pending', async () => {
    getAcademicPaperByIdMock(200, 'PENDING')
    const { result } = renderHook(() => useGetAcademicPaper(), { wrapper })

    await waitFor(() => expect(result.current.isLoading).toBe(false))

    expect(result.current.isLoading).toBeDefined()
    expect(result.current.academicPaper).toBeDefined()
    expect(result.current.academicPaper?.report).toBe(null)
  })
  beforeEach(() => {
    return queryClient.removeQueries({ queryKey: ['academic-paper'] })
  })
  it('Should return correct properties with status processing', async () => {
    getAcademicPaperByIdMock(200, 'PROCESSING')
    const { result } = renderHook(() => useGetAcademicPaper(), { wrapper })

    await waitFor(() => expect(result.current.isLoading).toBe(false))

    expect(result.current.isLoading).toBeDefined()
    expect(result.current.academicPaper).toBeDefined()
    expect(result.current.academicPaper?.report).toBe(null)
  })
  beforeEach(() => {
    return queryClient.removeQueries({ queryKey: ['academic-paper'] })
  })
  it('Should return correct properties with status completed', async () => {
    getAcademicPaperByIdMock(200, 'COMPLETED')
    const { result } = renderHook(() => useGetAcademicPaper(), { wrapper })

    await waitFor(() => expect(result.current.isLoading).toBe(false))

    expect(result.current.isLoading).toBeDefined()
    expect(result.current.academicPaper).toBeDefined()
    expect(result.current.academicPaper?.report).toBeDefined()
    expect(result.current.academicPaper?.report?.id).toBeDefined()
    expect(result.current.academicPaper?.report?.originality).toBeDefined()
    expect(result.current.academicPaper?.report?.plagiarism).toBeDefined()
    expect(result.current.academicPaper?.report?.sources).toBeDefined()
  })
})
